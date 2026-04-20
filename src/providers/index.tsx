"use client";

import React, { useSyncExternalStore } from "react";
import { TRPCReactProvider } from "@/src/trpc/client/createIndex";

interface ProviderProps {
    children: React.ReactNode;
}

const subscribeToMount = () => () => undefined;
const getClientMountSnapshot = () => true;
const getServerMountSnapshot = () => false;

export const Provider = ({ children }: ProviderProps) => {
    const isMounted = useSyncExternalStore(
        subscribeToMount,
        getClientMountSnapshot,
        getServerMountSnapshot
    );

    if(!isMounted) return null

    return (
        <TRPCReactProvider>
            {children}
        </TRPCReactProvider>
    )
}
