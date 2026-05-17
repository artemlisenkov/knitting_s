"use client"

import Image from "next/image";
import { FaInstagram, FaTelegramPlane } from "react-icons/fa";
import { playfairDisplay } from "@/src/app/fonts";
import { toPublicAssetPath } from "@/src/lib/public-asset-path";
import type { LandingCopy } from "@/src/app/_ui/landing/landing-types";

export function AboutSection({
    aboutMe,
    contactDelivery,
}: {
    aboutMe: LandingCopy["aboutMe"];
    contactDelivery: LandingCopy["contactDelivery"];
}) {
    return (
        <section id="contact" className="scroll-mt-16 border-b border-[#ead0d4] bg-white/50 px-4 py-8 sm:px-6 sm:py-10">
            <div className="mx-auto grid w-full max-w-5xl items-center justify-center gap-6 lg:grid-cols-[minmax(0,1fr)_24rem] lg:gap-8">
                <div className="order-2 flex flex-col items-center text-center lg:order-1">
                    <p className="mb-4 text-xs font-semibold uppercase tracking-[0.22em] text-[#b05b66]">
                        {contactDelivery.eyebrow}
                    </p>

                    <h1 className="font-heading max-w-xl text-3xl font-semibold leading-tight text-[#2c2426] sm:text-4xl lg:text-[2.75rem]">
                        {aboutMe.title}
                    </h1>

                    <div className="my-7 h-px w-24 bg-[#d88c98]" />
                    <p className="max-w-xl text-base leading-7 text-[#5f5154] sm:text-lg">
                        {contactDelivery.intro}
                    </p>

                    <div className="mt-7 flex flex-col gap-3 sm:flex-row sm:justify-center">
                        <a
                            href={contactDelivery.instagramHref}
                            target="_blank"
                            rel="noreferrer"
                            className="flex min-w-[180px] items-center justify-center gap-3 rounded-md border border-[#ead0d4] bg-[#fffaf8] px-4 py-3 text-[#2c2426] transition-colors hover:border-[#d88c98] hover:bg-white"
                        >
                            <FaInstagram className="size-5 text-[#994d59]" aria-hidden="true" />
                            <span className="text-sm font-semibold">{contactDelivery.instagramLabel}</span>
                        </a>
                        <a
                            href={contactDelivery.telegramHref}
                            target="_blank"
                            rel="noreferrer"
                            className="flex min-w-[180px] items-center justify-center gap-3 rounded-md border border-[#ead0d4] bg-[#fffaf8] px-4 py-3 text-[#2c2426] transition-colors hover:border-[#d88c98] hover:bg-white"
                        >
                            <FaTelegramPlane className="size-5 text-[#994d59]" aria-hidden="true" />
                            <span className="text-sm font-semibold">{contactDelivery.telegramLabel}</span>
                        </a>
                    </div>
                </div>

                <div className="order-1 lg:order-2">
                    <div className="group/photo mx-auto max-w-[22rem] overflow-hidden rounded-md border border-[#d78d98] bg-[#fffaf8] p-3 sm:max-w-[24rem] sm:shadow-[12px_12px_0_rgba(176,91,102,0.2)] lg:max-w-[24rem]">
                        <div className="relative aspect-[4/5] overflow-hidden rounded-md bg-white">
                            <Image
                                src={toPublicAssetPath("/main/portfolio_kate.jpg")}
                                alt={aboutMe.imageAlt}
                                fill
                                sizes="(min-width: 1024px) 420px, 100vw"
                                priority
                                unoptimized
                                className="h-full w-full scale-[1.08] object-cover object-[62%_center] transition-opacity lg:scale-[1.12]"
                            />
                        </div>
                        <div className="px-1 pb-2 pt-5 text-left">
                            <p className={`${playfairDisplay.className} text-[1.95rem] leading-none font-bold text-[#2c2426] sm:text-[2.55rem]`}>
                                KATE
                            </p>
                            <p className="mt-2.5 text-[11px] font-semibold uppercase tracking-[0.28em] text-[#7a666b] sm:text-sm">
                                Crochet Maker
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
