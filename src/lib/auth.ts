import { betterAuth } from "better-auth";
import { drizzleAdapter } from "better-auth/adapters/drizzle"
import { eq } from "drizzle-orm";
import { headers } from "next/headers";
import { db } from "@/src/db"
import { user } from "@/src/db/schema";

const adminEmails = new Set(
    (process.env.ADMIN_EMAILS ?? "")
        .split(",")
        .map((email) => email.trim().toLowerCase())
        .filter(Boolean)
);

const isAdminEmail = (email: string | null | undefined) => (
    email ? adminEmails.has(email.toLowerCase()) : false
);

export const auth = betterAuth({
    baseURL: process.env.BETTER_AUTH_URL,
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
        enabled: false,
    },
    databaseHooks: {
        user: {
            create: {
                before: async (newUser) => isAdminEmail(newUser.email),
            },
        },
        session: {
            create: {
                before: async (newSession) => {
                    const [sessionUser] = await db
                        .select({ email: user.email })
                        .from(user)
                        .where(eq(user.id, newSession.userId))
                        .limit(1);

                    return isAdminEmail(sessionUser?.email);
                },
            },
        },
    },
});

export const getSession = async () => auth.api.getSession({
    headers: await headers(),
})
