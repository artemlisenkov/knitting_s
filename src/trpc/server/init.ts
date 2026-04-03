import superjson from "superjson";

import {cache} from "react";
import {db} from "@/src/db";
import {initTRPC, TRPCError} from "@trpc/server";
import {getSession} from "@/src/lib/auth";


export const createTRPCContext = cache(() => { db });

type Context = {
    db: typeof db;
};

const trpc = initTRPC.context<Context>().create({
    transformer: superjson
});


export const createTRPCRouter = trpc.router;
export const createCallerFactory = trpc.createCallerFactory;
export const baseProcedure = trpc.procedure;
export const protectedProcedure = trpc.procedure.use(trpc.middleware( async ({ ctx, next }) => {
    const session = await getSession();

    if (!session) {
        throw new TRPCError({
            code: "UNAUTHORIZED",
        });
    }

    return next({
        ctx: {
            ...ctx,
            user: session.user,
        }
    });
}));