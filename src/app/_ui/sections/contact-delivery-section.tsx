"use client"

import { FaInstagram, FaTelegramPlane } from "react-icons/fa";
import type { LandingCopy } from "@/src/app/_ui/landing/landing-types";

export function ContactDeliverySection({
    contactDelivery,
}: {
    contactDelivery: LandingCopy["contactDelivery"];
}) {
    return (
        <section id="contactDelivery" className="scroll-mt-16 px-4 py-14 sm:px-6">
            <div className="mx-auto max-w-3xl text-center">
                <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#994d59]">
                    {contactDelivery.eyebrow}
                </p>
                <h2 className="mt-3 text-3xl font-semibold text-[#2c2426]">
                    {contactDelivery.title}
                </h2>
                <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-[#5f5154]">
                    {contactDelivery.intro}
                </p>

                <div className="mt-8 flex flex-wrap justify-center gap-3">
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
        </section>
    );
}
