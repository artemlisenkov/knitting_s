"use client"

import Image from "next/image";
import { useEffect, useMemo, useRef, useState } from "react";
import { Button } from "@/src/components/ui/button";
import { cn } from "@/src/lib/utils";
import { getWelcomeDisplayProducts } from "@/src/app/_ui/catalog/catalog-display-products";
import type { PublishedCatalogProduct } from "@/src/app/_data/catalog-products";
import type { LandingCopy } from "@/src/app/_ui/landing/landing-types";

const AUTO_ADVANCE_MS = 2500;

export function WelcomeSection({
    welcome,
    catalog,
    databaseProducts = [],
    onOpenProduct,
}: {
    welcome: LandingCopy["welcome"];
    catalog: LandingCopy["catalog"];
    databaseProducts?: PublishedCatalogProduct[];
    onOpenProduct: (productId: string) => void;
}) {
    const products = useMemo(
        () => getWelcomeDisplayProducts({ catalog, databaseProducts }),
        [catalog, databaseProducts]
    );
    const [activeIndex, setActiveIndex] = useState(0);
    const touchStartRef = useRef<{ x: number; y: number } | null>(null);
    const currentIndex = products.length > 0 ? activeIndex % products.length : 0;
    const showProductAtIndex = (nextIndex: number) => {
        if (products.length <= 1 || nextIndex === currentIndex) return;

        setActiveIndex(nextIndex);
    };
    const showNextProduct = () => {
        if (products.length <= 1) return;

        showProductAtIndex((currentIndex + 1) % products.length);
    };
    const showPreviousProduct = () => {
        if (products.length <= 1) return;

        showProductAtIndex((currentIndex - 1 + products.length) % products.length);
    };

    useEffect(() => {
        if (products.length <= 1) return;

        const intervalId = window.setInterval(() => {
            setActiveIndex((currentActiveIndex) => (currentActiveIndex + 1) % products.length);
        }, AUTO_ADVANCE_MS);

        return () => window.clearInterval(intervalId);
    }, [products.length]);

    if (products.length === 0) {
        return (
            <section
                id="home"
                className="scroll-mt-16 border-b border-[#ead0d4] bg-white/50 px-4 pt-22 pb-8 sm:px-6 sm:pt-10 sm:pb-10"
            >
                <div className="mx-auto max-w-6xl">
                    <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#994d59]">
                        {welcome.eyebrow}
                    </p>
                    <h1 className="font-heading mt-4 max-w-3xl text-4xl font-semibold leading-tight text-[#2c2426] sm:text-5xl lg:text-6xl">
                        {welcome.title}
                    </h1>
                    <p className="mt-5 max-w-2xl text-base leading-7 text-[#5f5154] sm:text-lg">
                        {welcome.description}
                    </p>
                </div>
            </section>
        );
    }

    return (
        <section
            id="home"
            className="scroll-mt-16 relative z-0 overflow-hidden border-b border-[#ead0d4] bg-[#1f1b1c] text-white"
            onTouchStart={(event) => {
                const touch = event.touches[0];

                if (!touch) return;

                touchStartRef.current = { x: touch.clientX, y: touch.clientY };
            }}
            onTouchEnd={(event) => {
                const touchStart = touchStartRef.current;
                const touch = event.changedTouches[0];

                touchStartRef.current = null;

                if (!touchStart || !touch) return;

                const deltaX = touch.clientX - touchStart.x;
                const deltaY = touch.clientY - touchStart.y;

                if (Math.abs(deltaX) < 40 || Math.abs(deltaX) < Math.abs(deltaY)) return;

                if (deltaX < 0) {
                    showNextProduct();
                    return;
                }

                showPreviousProduct();
            }}
        >
            <div className="relative min-h-[46rem] sm:min-h-[82dvh] lg:min-h-[calc(100dvh-3.5rem)]">
                {products.map((product, index) => {
                    const isActive = index === currentIndex;

                    return (
                        <div
                            key={product.id}
                            className={cn(
                                "absolute inset-0 transition-opacity duration-[900ms] ease-out",
                                isActive ? "z-20 opacity-100" : "z-10 opacity-0",
                                isActive ? "pointer-events-auto" : "pointer-events-none"
                            )}
                            aria-hidden={!isActive}
                        >
                            <div className="absolute inset-0">
                                <Image
                                    src={product.imageSrc}
                                    alt=""
                                    fill
                                    priority={index === 0}
                                    sizes="100vw"
                                    unoptimized
                                    className="h-full w-full object-cover opacity-42"
                                />
                                <div className="absolute inset-0 bg-[#140f10]/46" />
                                <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(20,15,16,0.22)_0%,rgba(20,15,16,0.42)_48%,rgba(20,15,16,0.62)_100%)]" />
                            </div>

                            <div className="relative mx-auto flex min-h-[46rem] max-w-6xl items-start px-4 pt-14 pb-4 sm:min-h-[82dvh] sm:items-center sm:px-6 sm:pt-20 sm:pb-10 lg:min-h-[calc(100dvh-3.5rem)] lg:pt-20 lg:pb-12">
                                <div className="grid w-full gap-5 sm:gap-7 lg:grid-cols-[minmax(0,0.9fr)_minmax(320px,0.72fr)] lg:items-center lg:gap-10">
                                    <div className="order-1">
                                        <div className="mx-auto max-w-[20.5rem] overflow-hidden rounded-md border border-white/15 bg-white/6 p-2 shadow-none backdrop-blur-sm sm:max-w-[18.5rem] sm:p-3 lg:mx-0 lg:max-w-[38rem]">
                                            <div className="relative aspect-[4/5] overflow-hidden rounded-md bg-white/8">
                                                <Image
                                                    src={product.imageSrc}
                                                    alt={product.imageAlt}
                                                    fill
                                                    priority={index === 0}
                                                    sizes="(min-width: 1024px) 42vw, 100vw"
                                                    unoptimized
                                                    className="h-full w-full object-cover"
                                                />
                                            </div>
                                        </div>
                                    </div>

                                    <div className="order-2 flex max-w-xl flex-col items-start">
                                        <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-white/68 sm:text-sm">
                                            {product.kindLabel}
                                        </p>
                                        <h1 className="font-heading mt-3 max-w-[11ch] text-[2.3rem] font-semibold leading-[0.94] text-white sm:mt-4 sm:text-6xl lg:text-7xl">
                                            {product.shortTitle}
                                        </h1>

                                        <Button
                                            type="button"
                                            className="mt-5 rounded-full bg-[#f6eeea] px-5 text-[#231c1e] shadow-none hover:bg-white sm:mt-8 sm:px-6"
                                            onClick={() => onOpenProduct(product.id)}
                                        >
                                            {welcome.productAction}
                                        </Button>

                                        <div className="mt-5 flex gap-2 sm:mt-8">
                                            {products.map((_, dotIndex) => (
                                                <button
                                                    key={dotIndex}
                                                    type="button"
                                                    className={cn(
                                                        "h-2 rounded-full transition-all duration-300",
                                                        dotIndex === currentIndex
                                                            ? "w-8 bg-white"
                                                            : "w-2 bg-white/35 hover:bg-white/55"
                                                    )}
                                                    aria-label={`Show ${products[dotIndex]?.title ?? "product"}`}
                                                    onClick={() => {
                                                        showProductAtIndex(dotIndex);
                                                    }}
                                                />
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    );
                })}
            </div>
        </section>
    );
}
