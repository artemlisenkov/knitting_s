"use client"

import { usePathname, useSearchParams } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { AboutSection } from "@/src/app/_ui/about-section";
import { CatalogSection } from "@/src/app/_ui/catalog-section";
import { CustomOrderSection } from "@/src/app/_ui/custom-order-section";
import {
    DevViewportSwitch,
    type DevPreviewMode,
} from "@/src/app/_ui/dev-viewport-switch";
import { LandingHeader } from "@/src/app/_ui/landing-header";
import {
    landingTranslations,
    type LandingLanguage,
} from "@/src/app/_ui/landing-translations";
import { PaletteSection } from "@/src/app/_ui/palette-section";
import { SimpleLandingSection } from "@/src/app/_ui/simple-landing-section";
import type { PublishedCatalogProduct } from "@/src/app/_data/catalog-products";

export const LandingPageContents = ({
    isAdminView = false,
    databaseProducts = [],
}: {
    isAdminView?: boolean;
    databaseProducts?: PublishedCatalogProduct[];
}) => {
    const [language, setLanguage] = useState<LandingLanguage>("en");
    const [isCatalogVisible, setIsCatalogVisible] = useState(false);
    const [devPreviewMode, setDevPreviewMode] = useState<DevPreviewMode>("desktop");
    const catalogRef = useRef<HTMLElement | null>(null);
    const pathname = usePathname();
    const searchParams = useSearchParams();
    const translation = landingTranslations[language];
    const isDevelopment = process.env.NODE_ENV === "development";
    const isDevPreviewFrame = searchParams.has("devViewport");
    const canUseDevPreview = isAdminView && isDevelopment && !isDevPreviewFrame;

    useEffect(() => {
        document.documentElement.lang = language;
    }, [language]);

    useEffect(() => {
        const catalogElement = catalogRef.current;

        if (!catalogElement) return;

        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry?.isIntersecting) {
                    setIsCatalogVisible(true);
                    observer.disconnect();
                }
            },
            { threshold: 0.25 }
        );

        observer.observe(catalogElement);

        return () => observer.disconnect();
    }, []);

    const navItems = [
        { label: translation.nav.aboutMe, href: "#aboutMe" },
        { label: translation.nav.catalog, href: "#catalog" },
        { label: translation.nav.palette, href: "#palette" },
        { label: translation.nav.customOrder, href: "#customOrder" },
        { label: translation.nav.delivery, href: "#delivery" },
        { label: translation.nav.contact, href: "#contact" },
    ];

    if (canUseDevPreview && devPreviewMode === "phone") {
        return (
            <div className="min-h-screen bg-[#f8eef0] px-4 py-20">
                <DevViewportSwitch mode={devPreviewMode} onModeChange={setDevPreviewMode} />
                <div className="mx-auto w-[390px] max-w-full overflow-hidden rounded-lg bg-white shadow-2xl ring-1 ring-[#ead0d4]">
                    <iframe
                        src={`${pathname}?devViewport=phone`}
                        title="Phone preview"
                        className="h-[844px] w-full border-0"
                    />
                </div>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-[#f8eef0] text-[#2f2a2a]">
            {canUseDevPreview ? (
                <DevViewportSwitch mode={devPreviewMode} onModeChange={setDevPreviewMode} />
            ) : null}

            <LandingHeader
                brand={translation.brand}
                navItems={navItems}
                language={language}
                isAdminView={isAdminView}
                onLanguageChange={setLanguage}
            />

            <main>
                {isAdminView ? (
                    <div className="border-b border-red-200 bg-red-50 px-4 py-2 text-center text-sm font-semibold text-red-700">
                        Your are having admin&apos;s view
                    </div>
                ) : null}

                <AboutSection aboutMe={translation.aboutMe} />

                <CatalogSection
                    catalog={translation.catalog}
                    catalogRef={catalogRef}
                    databaseProducts={databaseProducts}
                    isCatalogVisible={isCatalogVisible}
                    isAdminView={isAdminView}
                />

                <PaletteSection palette={translation.palette} />

                <CustomOrderSection customOrder={translation.customOrder} />

                <SimpleLandingSection
                    id="delivery"
                    eyebrow={translation.delivery.eyebrow}
                    title={translation.delivery.title}
                    bordered
                />

                <SimpleLandingSection
                    id="contact"
                    eyebrow={translation.contact.eyebrow}
                    title={translation.contact.title}
                />
            </main>
        </div>
    );
}
