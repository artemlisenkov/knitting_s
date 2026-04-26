"use client"

import Image from "next/image";
import { buttonVariants } from "@/src/components/ui/button";
import { cn } from "@/src/lib/utils";
import type { LandingCopy } from "@/src/app/_ui/landing-types";

export function AboutSection({
    aboutMe,
    secondaryActionHref = "#contactDelivery",
}: {
    aboutMe: LandingCopy["aboutMe"];
    secondaryActionHref?: string;
}) {
    return (
        <section id="aboutMe" className="mx-auto grid min-h-[calc(100vh-3rem)] scroll-mt-16 w-full max-w-6xl items-center gap-8 px-4 py-10 sm:px-6 lg:grid-cols-[1.06fr_0.94fr] lg:py-14">
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
                            "bg-[#b05b66] px-5 text-white shadow-sm hover:-translate-y-0.5 hover:rounded-lg hover:bg-[#994d59] hover:shadow-md"
                        )}
                    >
                        {aboutMe.primaryAction}
                    </a>
                    <a
                        href={secondaryActionHref}
                        className={cn(
                            buttonVariants({ variant: "outline" }),
                            "border-[#d9a0a8] bg-white/45 px-5 text-[#6c3f46] hover:-translate-y-0.5 hover:rounded-lg hover:border-[#b05b66] hover:bg-white hover:text-[#994d59] hover:shadow-md"
                        )}
                    >
                        {aboutMe.secondaryAction}
                    </a>
                </div>
            </div>

            <div className="order-1 lg:order-2">
                <div className="group/photo ml-auto max-w-md overflow-hidden rounded-md border border-[#d78d98] bg-[#fffaf8] p-3 shadow-[12px_12px_0_rgba(176,91,102,0.2)]">
                    <div className="relative aspect-[4/5] overflow-hidden rounded-md bg-white">
                        <Image
                            src="/main/portfolio_kate.jpg?v=3"
                            alt={aboutMe.imageAlt}
                            fill
                            sizes="(min-width: 1024px) 420px, 100vw"
                            priority
                            unoptimized
                            className="h-full w-full object-cover transition-opacity"
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
        </section>
    );
}
