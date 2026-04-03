"use client";

import { Button } from "@/src/components/ui/button";
import { Input } from "@/src/components/ui/input";
import { Label } from "@/src/components/ui/label";
import { Separator } from "@/src/components/ui/separator";
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
            <div className="flex items-center gap-3" data-testid="signup-separator">
                <Separator className="flex-1" />
                <span className="text-xs text-muted-foreground">OR CONTINUE WITH</span>
                <Separator className="flex-1" />
            </div>
            <div className="space-y-2" data-testid="email-field">
                <Label htmlFor="email">Email</Label>
                <Input
                    id="email"
                    type="email"
                    placeholder="you@example.com"
                    autoComplete="email"
                    data-testid="email-input"
                />
            </div>
            <div className="space-y-2" data-testid="password-field">
                <Label htmlFor="password">Password</Label>
                <Input id="password" type="password" autoComplete="current-password" data-testid="password-input" />
            </div>
        </form>
    )
}