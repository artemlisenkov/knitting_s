"use client"

import { Card, CardContent, CardDescription, CardTitle } from "@/src/components/ui/card";
import type { LandingCopy } from "@/src/app/_ui/landing-types";

export function CustomOrderSection({
    customOrder,
}: {
    customOrder: LandingCopy["customOrder"];
}) {
    return (
        <section id="customOrder" className="scroll-mt-16 px-4 py-16 sm:px-6">
            <div className="mx-auto max-w-6xl">
                <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
                    <div className="rounded-md border border-[#d78d98] bg-[#fffaf8] p-6 shadow-[10px_10px_0_rgba(176,91,102,0.14)] sm:p-8">
                        <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#994d59]">
                            {customOrder.eyebrow}
                        </p>
                        <h2 className="mt-4 font-serif text-4xl leading-tight text-[#2c2426] sm:text-5xl">
                            {customOrder.title}
                        </h2>
                        <p className="mt-6 text-base leading-7 text-[#5f5154] sm:text-lg">
                            {customOrder.intro}
                        </p>
                        <p className="mt-8 border-l-2 border-[#d88c98] pl-4 font-serif text-2xl leading-tight text-[#2c2426]">
                            {customOrder.closing}
                        </p>
                    </div>

                    <div className="grid gap-3">
                        {customOrder.items.map((item, index) => (
                            <Card
                                key={item.title}
                                className="rounded-md border-[#ead0d4] bg-white/65 py-4 shadow-none ring-[#ead0d4] transition-all duration-200 hover:-translate-y-1 hover:border-[#d88c98] hover:bg-white hover:shadow-md"
                            >
                                <CardContent className="grid gap-4 px-4 sm:grid-cols-[3.5rem_1fr] sm:items-start sm:px-5">
                                    <div className="flex size-12 items-center justify-center rounded-full border border-[#d88c98] bg-[#f8eef0] font-serif text-xl font-semibold text-[#994d59]">
                                        {String(index + 1).padStart(2, "0")}
                                    </div>
                                    <div>
                                        <CardTitle className="text-lg text-[#2c2426]">
                                            {item.title}
                                        </CardTitle>
                                        <CardDescription className="mt-2 text-[#6a5b5f]">
                                            {item.description}
                                        </CardDescription>
                                    </div>
                                </CardContent>
                            </Card>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
