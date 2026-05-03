"use client"

import Image from "next/image";
import { buttonVariants } from "@/src/components/ui/button";
import { toPublicAssetPath } from "@/src/lib/public-asset-path";
import { cn } from "@/src/lib/utils";
import type { LandingCopy } from "@/src/app/_ui/landing/landing-types";

export function AboutSection({
    aboutMe,
    secondaryActionHref = "#contactDelivery",
}: {
    aboutMe: LandingCopy["aboutMe"];
    secondaryActionHref?: string;
}) {
    return (
        <section id="aboutMe" className="scroll-mt-16 border-b border-[#ead0d4] bg-white/50 px-4 pt-6 pb-3 sm:px-6 lg:pt-8 lg:pb-5">
            <div className="mx-auto grid w-full max-w-6xl items-center gap-8 lg:min-h-[calc(100vh-6rem)] lg:grid-cols-[1.06fr_0.94fr]">
                <div className="order-2 flex flex-col items-center text-center lg:order-1 lg:items-start lg:text-left">
                    <p className="mb-4 text-xs font-semibold uppercase tracking-[0.22em] text-[#b05b66]">
                        {aboutMe.eyebrow}
                    </p>

                    <h1 className="max-w-2xl text-4xl font-semibold leading-tight text-[#2c2426] sm:text-5xl lg:text-6xl">
                        {aboutMe.title}
                    </h1>

                    <div className="my-7 h-px w-24 bg-[#d88c98]" />

                    <p className="max-w-xl text-base leading-7 text-[#5f5154] sm:text-lg">
                        {aboutMe.description}
                    </p>

                    <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                        <a
                            href="#catalog"
                            className={cn(
                                buttonVariants(),
                                "bg-[#b05b66] px-5 text-white sm:shadow-sm hover:-translate-y-0.5 hover:rounded-lg hover:bg-[#994d59] sm:hover:shadow-md"
                            )}
                        >
                            {aboutMe.primaryAction}
                        </a>
                        <a
                            href={secondaryActionHref}
                            className={cn(
                                buttonVariants({ variant: "outline" }),
                                "border-[#d9a0a8] bg-white/45 px-5 text-[#6c3f46] hover:-translate-y-0.5 hover:rounded-lg hover:border-[#b05b66] hover:bg-white hover:text-[#994d59] sm:hover:shadow-md"
                            )}
                        >
                            {aboutMe.secondaryAction}
                        </a>
                    </div>
                </div>

                <div className="order-1 lg:order-2">
                    <div className="group/photo ml-auto max-w-md overflow-hidden rounded-md border border-[#d78d98] bg-[#fffaf8] p-3 sm:shadow-[12px_12px_0_rgba(176,91,102,0.2)]">
                        <div className="relative aspect-[4/5] overflow-hidden rounded-md bg-white">
                            <Image
                                src={toPublicAssetPath("/main/portfolio_kate.JPG")}
                                alt={aboutMe.imageAlt}
                                fill
                                sizes="(min-width: 1024px) 420px, 100vw"
                                priority
                                unoptimized
                                className="h-full w-full scale-[1.08] object-cover object-[62%_center] transition-opacity lg:scale-[1.12]"
                            />
                        </div>
                        <div className="px-1 pb-2 pt-5 text-left">
                            <p className="font-serif text-3xl font-bold uppercase leading-none tracking-[0.08em] text-[#2c2426]">
                                Kate
                            </p>
                            <p className="mt-2 font-serif text-2xl leading-none text-[#2c2426]">
                                Crochet Maker
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
