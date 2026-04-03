"use client";

import { useRouter } from "next/navigation";
import { authClient } from "@/src/lib/auth-client";
import { Button } from "@/src/components/ui/button";

export const SignOutButton = () => {
    const router = useRouter();

    const signOut = async () => await authClient.signOut({
        fetchOptions: {
            onSuccess: () => router.push("/login")
        },
    });

    return (
        <Button
            onClick={signOut}
            variant="outline"
        >
            Sign Out
        </Button>
    );
};