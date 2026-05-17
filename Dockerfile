FROM node:22-bookworm-slim AS base

ENV NEXT_TELEMETRY_DISABLED=1
WORKDIR /app

FROM base AS deps

COPY package.json package-lock.json ./
RUN npm ci

FROM base AS builder

COPY --from=deps /app/node_modules ./node_modules
COPY . .

ENV NODE_OPTIONS=--max-old-space-size=3072

RUN npm run build
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
