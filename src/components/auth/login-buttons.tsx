"use client";

import { Button } from "@/src/components/ui/button";
import { FcGoogle } from "react-icons/fc";
import { authClient } from "@/src/lib/auth-client";

export const LoginButtons = () => {
    const signInWithGoogle = async () => await authClient.signIn.social({
        callbackURL: "/home",
        provider: "google",
    });

    return (
        <form className="space-y-3" id="signup-form" data-testid="signup-form">
            <Button onClick={signInWithGoogle}
                    variant="outline" className="w-full gap-1" type="button" data-testid="google-signup">
                <FcGoogle className="h-4 w-4" aria-hidden="true" />
                Google
            </Button>
        </form>
    )
}