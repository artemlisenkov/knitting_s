# syntax=docker/dockerfile:1.7

FROM node:22-bookworm-slim AS base

ENV NEXT_TELEMETRY_DISABLED=1
WORKDIR /app

FROM base AS deps

COPY package.json package-lock.json ./
RUN --mount=type=cache,target=/root/.npm npm ci

FROM base AS builder

ARG BETTER_AUTH_URL
ARG BETTER_AUTH_SECRET
ARG DATABASE_URL
ARG GOOGLE_CLIENT_ID
ARG GOOGLE_CLIENT_SECRET
ARG ADMIN_EMAILS

COPY --from=deps /app/node_modules ./node_modules
COPY . .

ENV NODE_OPTIONS=--max-old-space-size=3072

RUN --mount=type=cache,target=/app/.next/cache \
    BETTER_AUTH_URL="$BETTER_AUTH_URL" \
    BETTER_AUTH_SECRET="$BETTER_AUTH_SECRET" \
    DATABASE_URL="$DATABASE_URL" \
    GOOGLE_CLIENT_ID="$GOOGLE_CLIENT_ID" \
    GOOGLE_CLIENT_SECRET="$GOOGLE_CLIENT_SECRET" \
    ADMIN_EMAILS="$ADMIN_EMAILS" \
    npm run build
RUN mkdir -p .next/standalone/public/uploads
RUN cp -R public/. .next/standalone/public/
RUN mkdir -p .next/standalone/.next
RUN cp -R .next/static .next/standalone/.next/static

FROM node:22-bookworm-slim AS runner

WORKDIR /app

ENV NODE_ENV=production
ENV NEXT_TELEMETRY_DISABLED=1
ENV HOSTNAME=0.0.0.0
ENV PORT=3000
ENV NODE_OPTIONS=--max-old-space-size=3072

COPY --from=builder /app/.next/standalone ./

RUN mkdir -p /app/public/uploads

EXPOSE 3000

CMD ["node", "server.js"]
