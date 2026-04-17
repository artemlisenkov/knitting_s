"use client";

import React, { useState, useEffect } from "react";
import { TRPCReactProvider } from "@/src/trpc/client/createIndex";

interface ProviderProps {
    children: React.ReactNode;
}

export const Provider = ({ children }: ProviderProps) => {
    const [isMounted, setIsMounted] = useState(false);

    useEffect(() => { setIsMounted(true); }, []);

    if(!isMounted) return null

    return (
        <TRPCReactProvider>
            {children}
        </TRPCReactProvider>
    )
}