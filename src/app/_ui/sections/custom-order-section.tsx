"use client"

import type { LandingCopy } from "@/src/app/_ui/landing/landing-types";

export function CustomOrderSection({
    customOrder,
}: {
    customOrder: LandingCopy["customOrder"];
}) {
    return (
        <section id="customOrder" className="scroll-mt-16 px-4 py-14 sm:px-6">
            <div className="mx-auto max-w-6xl">
                <div className="max-w-3xl lg:max-w-none">
                    <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#994d59]">
                        {customOrder.eyebrow}
                    </p>
                    <h2 className="font-heading mt-4 text-4xl font-semibold leading-tight text-[#2c2426] sm:text-5xl">
                        {customOrder.title}
                    </h2>
                    <p className="mt-6 max-w-2xl text-base leading-7 text-[#5f5154] sm:text-lg">
                        {customOrder.intro}
                    </p>
                </div>

                <ul className="mt-10 grid lg:grid-cols-5 lg:gap-x-6">
                    {customOrder.items.map((item, index) => (
                        <li
                            key={item.title}
                            className="flex items-start gap-3 border-t border-[#d88c98]/35 py-5 first:border-t-0 first:pt-0 lg:border-t-0 lg:py-0"
                        >
                            <span
                                className="mt-2 block size-2 shrink-0 rounded-full bg-[#b05b66]"
                                aria-hidden="true"
                            />
                            <div>
                                <p className="text-sm font-semibold uppercase tracking-[0.14em] text-[#994d59]">
                                    {String(index + 1).padStart(2, "0")}
                                </p>
                                <h3 className="mt-1 text-lg font-semibold text-[#2c2426]">
                                    {item.title}
                                </h3>
                                <p className="mt-2 text-sm leading-6 text-[#6a5b5f] sm:text-[15px]">
                                    {item.description}
                                </p>
                            </div>
                        </li>
                    ))}
                </ul>
            </div>
        </section>
    );
}
