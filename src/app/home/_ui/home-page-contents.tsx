"use client"

import {SignOutButton} from "@/src/components/auth/signout-button";

export const HomePageContents = () => {

    return (
        <div className="flex flex-col min-h-screen items-center justify-center bg-muted/40 p-6">
            This is the home page.
            <SignOutButton />
        </div>
    );
}