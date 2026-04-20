"use client"

import { cn } from "@/src/lib/utils";

export function SimpleLandingSection({
    id,
    eyebrow,
    title,
    bordered = false,
}: {
    id: string;
    eyebrow: string;
    title: string;
    bordered?: boolean;
}) {
    return (
        <section
            id={id}
            className={cn(
                "scroll-mt-16 px-4 py-16 sm:px-6",
                bordered && "border-y border-[#ead0d4] bg-white/50"
            )}
        >
            <div className="mx-auto max-w-6xl">
                <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#994d59]">
                    {eyebrow}
                </p>
                <h2 className="mt-3 max-w-2xl text-3xl font-semibold text-[#2c2426]">
                    {title}
                </h2>
            </div>
        </section>
    );
}
