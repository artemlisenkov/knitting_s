"use client"

import Image from "next/image";
import { useSearchParams } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { buttonVariants, Button } from "@/src/components/ui/button";
import { Card, CardContent, CardDescription, CardTitle } from "@/src/components/ui/card";
import { cn } from "@/src/lib/utils";
import {
    landingLanguages,
    landingTranslations,
} from "@/src/app/_ui/landing-translations";
import type { LandingLanguage } from "@/src/app/_ui/landing-translations";

const catalogProductImages = {
    "cardigan-cloudy": "/cardigan-cloudy.jpg?v=2",
    "top-zebra": "/top-zebra.jpg?v=2",
    "top-browny": "/top-browny.jpg?v=2",
    "top-gradient": "/top-gradient.jpg?v=2",
    "top-flower": "/top-flower.jpg?v=2",
};

const catalogPageSize = 4;
type DevPreviewMode = "desktop" | "phone";
type LandingCopy = typeof landingTranslations.en;

export const LandingPageContents = () => {
    const [language, setLanguage] = useState<LandingLanguage>("en");
    const [isCatalogVisible, setIsCatalogVisible] = useState(false);
    const [devPreviewMode, setDevPreviewMode] = useState<DevPreviewMode>("desktop");
    const catalogRef = useRef<HTMLElement | null>(null);
    const searchParams = useSearchParams();
    const translation = landingTranslations[language];
    const isDevelopment = process.env.NODE_ENV === "development";
    const isDevPreviewFrame = searchParams.has("devViewport");
    const activeLanguageIndex = landingLanguages.findIndex((languageOption) => languageOption.code === language);

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

    if (isDevelopment && !isDevPreviewFrame && devPreviewMode === "phone") {
        return (
            <div className="min-h-screen bg-[#f8eef0] px-4 py-20">
                <DevViewportSwitch mode={devPreviewMode} onModeChange={setDevPreviewMode} />
                <div className="mx-auto w-[390px] max-w-full overflow-hidden rounded-lg bg-white shadow-2xl ring-1 ring-[#ead0d4]">
                    <iframe
                        src="/?devViewport=phone"
                        title="Phone preview"
                        className="h-[844px] w-full border-0"
                    />
                </div>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-[#f8eef0] text-[#2f2a2a]">
            {isDevelopment && !isDevPreviewFrame ? (
                <DevViewportSwitch mode={devPreviewMode} onModeChange={setDevPreviewMode} />
            ) : null}
            <header className="sticky top-0 z-20 border-b border-white/50 bg-white/45 backdrop-blur-md">
                <nav className="mx-auto flex min-h-12 w-full max-w-6xl items-center justify-between px-4 sm:px-6">
                    <a href="#aboutMe" className="text-sm font-semibold uppercase tracking-[0.18em] text-[#994d59]">
                        {translation.brand}
                    </a>

                    <div className="hidden items-center gap-1 rounded-full border border-[#ead0d4]/70 bg-white/45 p-1 shadow-sm sm:flex">
                        {navItems.map((item) => (
                            <a
                                key={item.href}
                                href={item.href}
                                className={cn(
                                    buttonVariants({ variant: "ghost", size: "xs" }),
                                    "rounded-full px-3 text-xs uppercase text-[#4d3b3f] hover:bg-white/65 hover:text-[#994d59] hover:shadow-sm"
                                )}
                            >
                                {item.label}
                            </a>
                        ))}
                    </div>

                    <div className="rounded-full border border-[#ead0d4]/70 bg-white/45 p-1 shadow-sm">
                        <div className="relative grid grid-cols-4">
                            <span
                                className="absolute inset-y-0 left-0 rounded-full bg-white/65 shadow-sm transition-transform duration-500 ease-out"
                                style={{
                                    width: `${100 / landingLanguages.length}%`,
                                    transform: `translateX(${activeLanguageIndex * 100}%)`,
                                }}
                                aria-hidden="true"
                            />
                            {landingLanguages.map((languageOption) => (
                                <Button
                                    key={languageOption.code}
                                    variant="ghost"
                                    size="sm"
                                    type="button"
                                    className={cn(
                                        "relative z-10 h-8 rounded-full px-2.5 text-xs font-semibold text-[#4d3b3f] hover:bg-white/30 hover:text-[#994d59]",
                                        language === languageOption.code && "text-[#994d59]"
                                    )}
                                    aria-label={`Switch language to ${languageOption.label}`}
                                    aria-pressed={language === languageOption.code}
                                    onClick={() => setLanguage(languageOption.code)}
                                >
                                    {languageOption.flagClassName ? (
                                        <span className={cn(languageOption.flagClassName, "rounded-sm shadow-xs")} />
                                    ) : (
                                        <span className="h-3 w-4 rounded-sm bg-[#D9D2D2] shadow-xs" aria-hidden="true" />
                                    )}
                                    <span>{languageOption.label}</span>
                                </Button>
                            ))}
                        </div>
                    </div>
                </nav>
            </header>

            <main>
                <section id="aboutMe" className="mx-auto grid min-h-[calc(100vh-3rem)] scroll-mt-16 w-full max-w-6xl items-center gap-8 px-4 py-10 sm:px-6 lg:grid-cols-[1.06fr_0.94fr] lg:py-14">
                    <div className="order-2 flex flex-col items-center text-center lg:order-1 lg:items-start lg:text-left">
                        <p className="mb-4 text-xs font-semibold uppercase tracking-[0.22em] text-[#b05b66]">
                            {translation.aboutMe.eyebrow}
                        </p>

                        <h1 className="max-w-2xl text-4xl font-semibold leading-tight text-[#2c2426] sm:text-5xl lg:text-6xl">
                            {translation.aboutMe.title}
                        </h1>

                        <div className="my-7 h-px w-24 bg-[#d88c98]" />

                        <p className="max-w-xl text-base leading-7 text-[#5f5154] sm:text-lg">
                            {translation.aboutMe.description}
                        </p>

                        <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                            <a
                                href="#catalog"
                                className={cn(
                                    buttonVariants(),
                                    "bg-[#b05b66] px-5 text-white shadow-sm hover:-translate-y-0.5 hover:rounded-lg hover:bg-[#994d59] hover:shadow-md"
                                )}
                            >
                                {translation.aboutMe.primaryAction}
                            </a>
                            <a
                                href="#contact"
                                className={cn(
                                    buttonVariants({ variant: "outline" }),
                                    "border-[#d9a0a8] bg-white/45 px-5 text-[#6c3f46] hover:-translate-y-0.5 hover:rounded-lg hover:border-[#b05b66] hover:bg-white hover:text-[#994d59] hover:shadow-md"
                                )}
                            >
                                {translation.aboutMe.secondaryAction}
                            </a>
                        </div>
                    </div>

                    <div className="order-1 lg:order-2">
                        <div className="group/photo ml-auto max-w-md overflow-hidden rounded-md border border-[#d78d98] bg-[#fffaf8] p-3 shadow-[12px_12px_0_rgba(176,91,102,0.2)]">
                            <div className="relative aspect-[4/5] overflow-hidden rounded-md bg-white">
                                <Image
                                    src="/main.jpg?v=2"
                                    alt={translation.aboutMe.imageAlt}
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

                <section ref={catalogRef} id="catalog" className="scroll-mt-16 px-4 py-16 sm:px-6">
                    <div className="mx-auto max-w-6xl">
                        <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#994d59]">
                            {translation.catalog.eyebrow}
                        </p>
                        <h2 className="mt-3 max-w-2xl text-3xl font-semibold text-[#2c2426]">
                            {translation.catalog.title}
                        </h2>

                        <div className="mt-10 space-y-14">
                            {translation.catalog.groups.map((group) => (
                                <CatalogProductGroup
                                    key={group.title}
                                    group={group}
                                    emptyText={translation.catalog.emptyText}
                                    isVisible={isCatalogVisible}
                                />
                            ))}
                        </div>
                    </div>
                </section>

                <PaletteSection translation={translation} />

                <CustomOrderSection translation={translation} />

                <section id="delivery" className="scroll-mt-16 border-y border-[#ead0d4] bg-white/50 px-4 py-16 sm:px-6">
                    <div className="mx-auto max-w-6xl">
                        <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#994d59]">
                            {translation.delivery.eyebrow}
                        </p>
                        <h2 className="mt-3 max-w-2xl text-3xl font-semibold text-[#2c2426]">
                            {translation.delivery.title}
                        </h2>
                    </div>
                </section>

                <section id="contact" className="scroll-mt-16 px-4 py-16 sm:px-6">
                    <div className="mx-auto max-w-6xl">
                        <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#994d59]">
                            {translation.contact.eyebrow}
                        </p>
                        <h2 className="mt-3 max-w-2xl text-3xl font-semibold text-[#2c2426]">
                            {translation.contact.title}
                        </h2>
                    </div>
                </section>
            </main>
        </div>
    )
}

function PaletteSection({ translation }: { translation: LandingCopy }) {
    return (
        <section id="palette" className="scroll-mt-16 border-y border-[#ead0d4] bg-white/50 px-4 py-16 sm:px-6">
            <div className="mx-auto grid max-w-6xl gap-8 lg:grid-cols-[0.85fr_1.15fr] lg:items-end">
                <div>
                    <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#994d59]">
                        {translation.palette.eyebrow}
                    </p>
                    <h2 className="mt-3 max-w-2xl text-3xl font-semibold text-[#2c2426]">
                        {translation.palette.title}
                    </h2>
                    <p className="mt-5 max-w-xl text-base leading-7 text-[#5f5154]">
                        {translation.palette.intro}
                    </p>
                </div>

                <div className="grid grid-cols-2 gap-3 sm:grid-cols-3">
                    {translation.palette.colors.map((color) => (
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

function CustomOrderSection({ translation }: { translation: LandingCopy }) {
    return (
        <section id="customOrder" className="scroll-mt-16 px-4 py-16 sm:px-6">
            <div className="mx-auto max-w-6xl">
                <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
                    <div className="rounded-md border border-[#d78d98] bg-[#fffaf8] p-6 shadow-[10px_10px_0_rgba(176,91,102,0.14)] sm:p-8">
                        <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#994d59]">
                            {translation.customOrder.eyebrow}
                        </p>
                        <h2 className="mt-4 font-serif text-4xl leading-tight text-[#2c2426] sm:text-5xl">
                            {translation.customOrder.title}
                        </h2>
                        <p className="mt-6 text-base leading-7 text-[#5f5154] sm:text-lg">
                            {translation.customOrder.intro}
                        </p>
                        <p className="mt-8 border-l-2 border-[#d88c98] pl-4 font-serif text-2xl leading-tight text-[#2c2426]">
                            {translation.customOrder.closing}
                        </p>
                    </div>

                    <div className="grid gap-3">
                        {translation.customOrder.items.map((item, index) => (
                            <Card
                                key={item.title}
                                className="rounded-md border-[#ead0d4] bg-white/65 py-4 shadow-none ring-[#ead0d4] transition-all duration-200 hover:-translate-y-1 hover:border-[#d88c98] hover:bg-white hover:shadow-md"
                            >
                                <CardContent className="grid gap-4 px-4 sm:grid-cols-[3.5rem_1fr] sm:items-start sm:px-5">
                                    <div className="flex size-12 items-center justify-center rounded-full border border-[#d88c98] bg-[#f8eef0] font-serif text-xl font-semibold text-[#994d59]">
                                        {String(index + 1).padStart(2, "0")}
                                    </div>
                                    <div>
                                        <CardTitle className="text-lg text-[#2c2426]">
                                            {item.title}
                                        </CardTitle>
                                        <CardDescription className="mt-2 text-[#6a5b5f]">
                                            {item.description}
                                        </CardDescription>
                                    </div>
                                </CardContent>
                            </Card>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}

function DevViewportSwitch({
    mode,
    onModeChange,
}: {
    mode: DevPreviewMode;
    onModeChange: (mode: DevPreviewMode) => void;
}) {
    return (
        <div className="fixed left-3 top-3 z-50 flex items-center gap-1 rounded-lg border border-[#ead0d4] bg-white/85 p-1 shadow-md backdrop-blur">
            {(["desktop", "phone"] as const).map((previewMode) => (
                <Button
                    key={previewMode}
                    type="button"
                    variant="ghost"
                    size="sm"
                    className={cn(
                        "h-8 rounded-md px-3 text-xs capitalize text-[#4d3b3f] hover:bg-[#f8eef0] hover:text-[#994d59]",
                        mode === previewMode && "bg-[#f8eef0] text-[#994d59]"
                    )}
                    aria-pressed={mode === previewMode}
                    onClick={() => onModeChange(previewMode)}
                >
                    {previewMode}
                </Button>
            ))}
        </div>
    );
}

type CatalogGroup = typeof landingTranslations.en.catalog.groups[number];

function CatalogProductGroup({
    group,
    emptyText,
    isVisible,
}: {
    group: CatalogGroup;
    emptyText: string;
    isVisible: boolean;
}) {
    const [page, setPage] = useState(0);
    const pageCount = Math.max(1, Math.ceil(group.products.length / catalogPageSize));
    const pageProducts = group.products.slice(page * catalogPageSize, (page + 1) * catalogPageSize);

    const showNextPage = () => setPage((currentPage) => (currentPage + 1) % pageCount);

    return (
        <section aria-label={group.title}>
            <div className="mb-5 flex items-end justify-between gap-4">
                <h3 className="font-serif text-3xl leading-none text-[#2c2426] sm:text-4xl">
                    {group.title}
                </h3>
                {pageCount > 1 ? (
                    <p className="text-sm font-medium text-[#994d59]">
                        {page + 1} / {pageCount}
                    </p>
                ) : null}
            </div>

            {group.products.length > 0 ? (
                <div className="relative">
                    <div className="grid grid-cols-2 gap-4 lg:grid-cols-4">
                        {pageProducts.map((product, index) => (
                            <article
                                key={product.id}
                                className={cn(
                                    "min-w-0 transition-all duration-700 ease-out",
                                    isVisible ? "translate-x-0 opacity-100" : "translate-x-16 opacity-0"
                                )}
                                style={{ transitionDelay: `${index * 120}ms` }}
                            >
                                <div className="overflow-hidden rounded-md border border-[#d78d98] bg-[#fffaf8] p-1.5 shadow-none sm:p-2 lg:shadow-[8px_8px_0_rgba(176,91,102,0.12)]">
                                    <div className="relative aspect-3/4 overflow-hidden rounded-md bg-white">
                                        <Image
                                            src={catalogProductImages[product.id]}
                                            alt={product.imageAlt}
                                            fill
                                            sizes="(min-width: 1024px) 25vw, 50vw"
                                            unoptimized
                                            className="h-full w-full object-cover"
                                        />
                                    </div>
                                </div>
                                <h4 className="mt-3 text-base font-semibold text-[#2c2426] sm:mt-4 sm:text-lg">
                                    {product.title}
                                </h4>
                                <p className="mt-1.5 text-xs leading-5 text-[#6a5b5f] sm:mt-2 sm:text-sm sm:leading-6">
                                    {product.description}
                                </p>
                            </article>
                        ))}
                    </div>

                    {pageCount > 1 ? (
                        <Button
                            type="button"
                            size="icon"
                            className="absolute right-0 top-1/2 size-12 -translate-y-1/2 rounded-full bg-[#b05b66] text-white shadow-md hover:bg-[#994d59]"
                            aria-label={`Next ${group.title} page`}
                            onClick={showNextPage}
                        >
                            →
                        </Button>
                    ) : null}

                    {pageCount > 1 ? (
                        <div className="mt-6 flex justify-center gap-2">
                            {Array.from({ length: pageCount }).map((_, index) => (
                                <button
                                    key={index}
                                    type="button"
                                    className={cn(
                                        "size-2.5 rounded-full border border-[#d88c98]",
                                        page === index ? "bg-[#994d59]" : "bg-white/70"
                                    )}
                                    aria-label={`Show ${group.title} page ${index + 1}`}
                                    onClick={() => setPage(index)}
                                />
                            ))}
                        </div>
                    ) : null}
                </div>
            ) : (
                <p className="border-l-2 border-[#d88c98] pl-4 text-base leading-7 text-[#6a5b5f]">
                    {emptyText}
                </p>
            )}
        </section>
    );
}
