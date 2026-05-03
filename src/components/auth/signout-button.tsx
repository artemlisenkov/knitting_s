"use client";

import { useRouter } from "next/navigation";
import { authClient } from "@/src/lib/auth-client";
import { Button } from "@/src/components/ui/button";
import { cn } from "@/src/lib/utils";

export const SignOutButton = ({
    className,
}: {
    className?: string;
} = {}) => {
    const router = useRouter();

    const signOut = async () => await authClient.signOut({
        fetchOptions: {
            onSuccess: () => router.push("/")
        },
    });

    return (
        <Button
            onClick={signOut}
            className={cn(
                "rounded-full bg-red-600 px-4 text-white sm:shadow-sm hover:bg-red-700 hover:text-white",
                className
            )}
        >
            Sign Out
        </Button>
    );
};
