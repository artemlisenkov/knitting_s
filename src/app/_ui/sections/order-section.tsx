"use client"

import { ChevronDownIcon } from "lucide-react";
import Image from "next/image";
import { useState } from "react";
import type { LandingCopy } from "@/src/app/_ui/landing/landing-types";
import { Button } from "@/src/components/ui/button";

const aiPreviewImages = Array.from({ length: 10 }, (_, index) => `/ai/ai-${index + 1}.jpg`);

export function OrderSection({
    measurements,
    customOrder,
}: {
    measurements: LandingCopy["measurements"];
    customOrder: LandingCopy["customOrder"];
}) {
    const [isAiPreviewOpen, setIsAiPreviewOpen] = useState(false);

    return (
        <section id="order" className="scroll-mt-16 border-y border-[#ead0d4] bg-[#f8eef0] px-4 py-14 sm:px-6">
            <div className="mx-auto max-w-6xl">
                <div>
                    <h2 className="font-heading mx-auto max-w-2xl text-center text-3xl font-semibold leading-tight text-[#2c2426] sm:text-3xl">
                        {measurements.title}
                    </h2>

                    <div className="mx-auto mt-6 w-full max-w-sm rounded-md border border-[#d78d98] bg-[#fffaf8] p-4 lg:hidden">
                        <div className="relative aspect-[4/5] overflow-hidden rounded-md bg-white">
                            <Image
                                src="/main/measurements.jpg"
                                alt={measurements.imageAlt}
                                fill
                                sizes="100vw"
                                unoptimized
                                className="h-full w-full object-contain p-2"
                            />
                        </div>
                    </div>

                    <div className="mt-8 grid gap-8 lg:grid-cols-[0.96fr_1.04fr] lg:items-center">
                        <div className="rounded-md border border-[#d78d98] bg-[#fffaf8] p-6 sm:shadow-[10px_10px_0_rgba(176,91,102,0.14)] sm:p-8">
                            <div className="grid gap-5">
                                {measurements.items.map((item, index) => (
                                    <div
                                        key={item.title}
                                        className="grid gap-4 border-t border-[#ead0d4] pt-5 first:border-t-0 first:pt-0 sm:grid-cols-[3.25rem_1fr] sm:items-start"
                                    >
                                        <div className="font-heading flex size-12 items-center justify-center rounded-full border border-[#d88c98] bg-white text-xl font-semibold text-[#994d59]">
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

                        <div className="hidden lg:block">
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
                </div>

                <div className="mt-12 border-t border-[#d88c98]/35 pt-12">
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

                    <div className="mt-12 border-t border-[#d88c98]/35 pt-10">
                        <h3 className="font-heading text-2xl font-semibold leading-tight text-[#2c2426] sm:text-3xl">
                            {customOrder.aiPreview.title}
                        </h3>
                        <p className="mt-4 max-w-3xl text-base leading-7 text-[#5f5154] sm:text-lg">
                            {customOrder.aiPreview.intro}
                        </p>
                        <p className="mt-4 max-w-3xl text-sm leading-6 text-[#6a5b5f] sm:text-base sm:leading-7">
                            {customOrder.aiPreview.note}
                        </p>

                        <div className="mt-6">
                            <Button
                                type="button"
                                variant="outline"
                                size="sm"
                                aria-expanded={isAiPreviewOpen}
                                onClick={() => setIsAiPreviewOpen((currentState) => !currentState)}
                                className="rounded-full border-[#d9bcc1] bg-white/75 px-4 text-[#5f5154] hover:bg-[#fff4f6] hover:text-[#5f5154]"
                            >
                                {isAiPreviewOpen
                                    ? customOrder.aiPreview.hideAction
                                    : customOrder.aiPreview.showAction}
                                <ChevronDownIcon
                                    className={`size-4 transition-transform duration-300 ${
                                        isAiPreviewOpen ? "rotate-180" : ""
                                    }`}
                                />
                            </Button>
                        </div>

                        <div
                            className={`grid transition-all duration-300 ease-out ${
                                isAiPreviewOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
                            }`}
                        >
                            <div className="overflow-hidden">
                                <div className="mt-6 grid grid-cols-3 gap-2.5 sm:grid-cols-5 lg:max-w-3xl">
                                    {aiPreviewImages.map((src, index) => (
                                        <div
                                            key={src}
                                            className="overflow-hidden rounded-md border border-[#d78d98] bg-[#fffaf8] p-1"
                                        >
                                            <div className="relative aspect-[4/5] overflow-hidden rounded-sm bg-white">
                                                <Image
                                                    src={src}
                                                    alt={`${customOrder.aiPreview.title} example ${index + 1}`}
                                                    fill
                                                    sizes="(min-width: 1024px) 90px, (min-width: 640px) 18vw, 28vw"
                                                    quality={60}
                                                    loading="lazy"
                                                    className="h-full w-full object-cover"
                                                />
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
