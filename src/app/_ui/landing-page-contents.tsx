"use client"

import Link from "next/link";
import { Button } from "@/src/components/ui/button";

export const LandingPageContents = () => {

    return (
        <div className="flex flex-col min-h-screen items-center justify-center bg-muted/40 p-6">
            This is the Landing page.
            <Link href="/login">
                <Button>
                    Login
                </Button>
            </Link>
        </div>
    )
}