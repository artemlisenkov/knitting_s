"use client"

import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { CatalogSection } from "@/src/app/_ui/catalog/catalog-section";
import { AboutSection } from "@/src/app/_ui/sections/about-section";
import { CustomOrderSection } from "@/src/app/_ui/sections/custom-order-section";
import {
    DevViewportSwitch,
    type DevPreviewMode,
} from "@/src/app/_ui/landing/dev-viewport-switch";
import { LandingHeader } from "@/src/app/_ui/landing/landing-header";
import {
    landingTranslations,
    type LandingLanguage,
} from "@/src/app/_ui/landing/landing-translations";
import { MeasurementsSection } from "@/src/app/_ui/sections/measurements-section";
import { PaletteSection } from "@/src/app/_ui/sections/palette-section";
import { WelcomeSection } from "@/src/app/_ui/sections/welcome-section";
import type { PublishedCatalogProduct } from "@/src/app/_data/catalog-products";
import { useIsMobile } from "@/src/hooks/use-mobile";

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
    const [selectedProductId, setSelectedProductId] = useState<string | null>(null);
    const catalogRef = useRef<HTMLElement | null>(null);
    const router = useRouter();
    const pathname = usePathname();
    const searchParams = useSearchParams();
    const isMobile = useIsMobile();
    const translation = landingTranslations[language];
    const isDevelopment = process.env.NODE_ENV === "development";
    const isDevPreviewFrame = searchParams.has("devViewport");
    const canUseDevPreview = isAdminView && isDevelopment && !isDevPreviewFrame;
    const isProductOverlayOpen = selectedProductId !== null || searchParams.get("product") !== null;

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

    const createProductHref = (productId: string) => {
        const params = new URLSearchParams(searchParams.toString());

        params.set("product", productId);

        const query = params.toString();

        return query ? `${pathname}?${query}` : pathname;
    };

    const openProduct = (productId: string) => {
        if (isMobile) {
            router.push(createProductHref(productId), { scroll: false });
            return;
        }

        setSelectedProductId(productId);
    };

    const navItems = [
        { label: translation.nav.welcome, href: "#home" },
        { label: translation.nav.catalog, href: "#catalog" },
        { label: translation.nav.palette, href: "#palette" },
        { label: translation.nav.customOrder, href: "#customOrder" },
        { label: translation.nav.measurements, href: "#measurements" },
        { label: translation.nav.contactDelivery, href: "#contact" },
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
                isHidden={isProductOverlayOpen}
                onLanguageChange={setLanguage}
            />

            <main>
                {isAdminView ? (
                    <div className="border-b border-red-200 bg-red-50 px-4 py-2 text-center text-sm font-semibold text-red-700">
                        Your are having admin&apos;s view
                    </div>
                ) : null}

                <WelcomeSection
                    welcome={translation.welcome}
                    catalog={translation.catalog}
                    databaseProducts={databaseProducts}
                    onOpenProduct={openProduct}
                />

                <CatalogSection
                    catalog={translation.catalog}
                    catalogRef={catalogRef}
                    databaseProducts={databaseProducts}
                    isCatalogVisible={isCatalogVisible}
                    isAdminView={isAdminView}
                    selectedProductId={selectedProductId}
                    onOpenProduct={openProduct}
                    onCloseProduct={() => setSelectedProductId(null)}
                />

                <PaletteSection palette={translation.palette} />

                <CustomOrderSection customOrder={translation.customOrder} />

                <MeasurementsSection measurements={translation.measurements} />

                <AboutSection
                    aboutMe={translation.aboutMe}
                    contactDelivery={translation.contactDelivery}
                />
            </main>
        </div>
    );
}
