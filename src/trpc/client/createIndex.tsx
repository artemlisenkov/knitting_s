"use client";
import superjson from "superjson";
import React, {useState} from "react";

import { AppRouter } from "../server/routers/_app"
import { makeQueryClient } from "@/src/trpc/client/query-client";
import { createTRPCClient, httpBatchLink } from "@trpc/client";
import { QueryClientProvider } from "@tanstack/react-query";
import { createTRPCContext } from "@trpc/tanstack-react-query";

import type { QueryClient } from "@tanstack/react-query";

export const { TRPCProvider, useTRPC } = createTRPCContext<AppRouter>()

let clientQueryClientSingleton: QueryClient;

function getQueryClient() {
    if (typeof window === "undefined") {
        return makeQueryClient();
    }

    return (clientQueryClientSingleton ??= makeQueryClient());
}

function getUrl() {
    const base = (() => {
       if (typeof window !== "undefined") return '';
       if (process.env.VERCEL_URL) return `https://${process.env.VERCEL_URL}`;
       return 'http://localhost:3000';
    })();

    return `${base}/api/trpc`;
}

export const TRPCReactProvider = (props: Readonly<{
        children: React.ReactNode;
    }>,
) =>  {
    const queryClient = getQueryClient();
    const [trpcClient] = useState(() => createTRPCClient<AppRouter>({
        links: [
            httpBatchLink({
                transformer: superjson,
                url: getUrl(),
            }),
        ],
    }));

    return (
        <QueryClientProvider client={queryClient}>
            <TRPCProvider trpcClient={trpcClient} queryClient={queryClient}>
                {props.children}
            </TRPCProvider>
        </QueryClientProvider>
    )
}