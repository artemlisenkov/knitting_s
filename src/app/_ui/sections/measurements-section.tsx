"use client"

import Image from "next/image";
import type { LandingCopy } from "@/src/app/_ui/landing/landing-types";

export function MeasurementsSection({
    measurements,
}: {
    measurements: LandingCopy["measurements"];
}) {
    return (
        <section id="measurements" className="scroll-mt-16 border-y border-[#ead0d4] bg-white/50 px-4 py-14 sm:px-6">
            <div className="mx-auto grid max-w-6xl gap-8 lg:grid-cols-[0.96fr_1.04fr] lg:items-center">
                <div className="order-2 lg:order-1">
                    <h2 className="mx-auto max-w-2xl text-center font-serif text-3xl leading-tight text-[#2c2426] sm:text-3xl">
                        {measurements.title}
                    </h2>

                    <div className="mt-8 rounded-md border border-[#d78d98] bg-[#fffaf8] p-6 sm:shadow-[10px_10px_0_rgba(176,91,102,0.14)] sm:p-8">
                        <div className="grid gap-5">
                            {measurements.items.map((item, index) => (
                            <div
                                key={item.title}
                                className="grid gap-4 border-t border-[#ead0d4] pt-5 first:border-t-0 first:pt-0 sm:grid-cols-[3.25rem_1fr] sm:items-start"
                            >
                                <div className="flex size-12 items-center justify-center rounded-full border border-[#d88c98] bg-white font-serif text-xl font-semibold text-[#994d59]">
                                    {String(index + 1).padStart(2, "0")}
                                </div>
                                <div>
                                    <h3 className="text-sm font-semibold uppercase tracking-[0.14em] text-[#994d59]">
                                        {item.title}
                                    </h3>
                                    <p className="mt-3 text-base leading-7 text-[#5f5154]">
                                        {item.description}
                                    </p>
                                    <p className="mt-3 text-sm leading-6 text-[#6a5b5f]">
                                        {item.hint}
                                    </p>
                                </div>
                            </div>
                            ))}
                        </div>
                    </div>
                </div>

                <div className="order-1 lg:order-2">
                    <div className="mx-auto w-full max-w-sm rounded-md border border-[#d78d98] bg-[#fffaf8] p-4 sm:shadow-[10px_10px_0_rgba(176,91,102,0.14)] sm:max-w-md sm:p-5">
                        <div className="relative aspect-[4/5] overflow-hidden rounded-md bg-white">
                            <Image
                                src="/main/measurements.jpg"
                                alt={measurements.imageAlt}
                                fill
                                sizes="(min-width: 1024px) 420px, 100vw"
                                unoptimized
                                className="h-full w-full object-contain p-2 sm:p-3"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
