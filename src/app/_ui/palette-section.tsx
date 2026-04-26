"use client"

import type { LandingCopy } from "@/src/app/_ui/landing-types";

export function PaletteSection({
    palette,
}: {
    palette: LandingCopy["palette"];
}) {
    return (
        <section id="palette" className="scroll-mt-0 border-y border-[#ead0d4] bg-white/50 px-4 py-16 sm:px-6">
            <div className="mx-auto grid max-w-6xl gap-8 lg:grid-cols-[0.85fr_1.15fr] lg:items-end">
                <div>
                    <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#994d59]">
                        {palette.eyebrow}
                    </p>
                    <h2 className="mt-3 max-w-2xl text-3xl font-semibold text-[#2c2426]">
                        {palette.title}
                    </h2>
                    <p className="mt-5 max-w-xl text-base leading-7 text-[#5f5154]">
                        {palette.intro}
                    </p>
                </div>

                <div className="grid grid-cols-2 gap-3 sm:grid-cols-3">
                    {palette.colors.map((color) => (
                        <div
                            key={color.name}
                            className="rounded-md border border-[#ead0d4] bg-[#fffaf8] p-3"
                        >
                            <div
                                className="h-16 rounded-md border border-black/5"
                                style={{ backgroundColor: color.hex }}
                                aria-hidden="true"
                            />
                            <p className="mt-3 text-sm font-semibold text-[#2c2426]">
                                {color.name}
                            </p>
                            <p className="mt-1 text-xs uppercase tracking-[0.12em] text-[#8a7478]">
                                {color.hex}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
