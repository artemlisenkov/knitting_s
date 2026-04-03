import { betterAuth } from "better-auth";
import { drizzleAdapter } from "better-auth/adapters/drizzle"
import { headers } from "next/headers";
import { db } from "@/src/db"

export const auth = betterAuth({
    database: drizzleAdapter(db, {
        provider: "pg",
    }),
    pages: {
        signIn: "/login",
    },
    socialProviders: {
        google: {
            clientId: process.env.GOOGLE_CLIENT_ID as string,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET as string,
        },
    },
    emailAndPassword: {
        enabled: true,
    },
});

export const getSession = async () => auth.api.getSession({
    headers: await headers(),
})