"use client"

import { ChevronDownIcon } from "lucide-react";
import Image from "next/image";
import { useLayoutEffect, useRef, useState } from "react";
import {
    paletteCollections,
    type PaletteCollection,
    type PaletteCollectionSection,
    type PaletteSetId,
} from "@/src/app/_ui/landing/palette-colors";
import type { LandingCopy } from "@/src/app/_ui/landing/landing-types";
import { Button } from "@/src/components/ui/button";

export function PaletteSection({
    palette,
}: {
    palette: LandingCopy["palette"];
}) {
    const sectionRef = useRef<HTMLElement | null>(null);
    const gridRef = useRef<HTMLDivElement | null>(null);
    const [selectedPaletteId, setSelectedPaletteId] = useState<PaletteSetId>("baby-cotton");
    const [isExpanded, setIsExpanded] = useState(false);
    const [fullHeight, setFullHeight] = useState(0);
    const [collapsedHeight, setCollapsedHeight] = useState<number | null>(null);
    const [cardHeight, setCardHeight] = useState(0);
    const selectedPalette =
        paletteCollections.find((collection) => collection.id === selectedPaletteId) ??
        paletteCollections[0];
    const selectedSections =
        selectedPalette.sections ?? [{ id: selectedPalette.id, colors: selectedPalette.colors }];
    const selectedColorCount = selectedSections.reduce(
        (totalCount, section) => totalCount + section.colors.length,
        0
    );

    useLayoutEffect(() => {
        const grid = gridRef.current;

        if (!grid) {
            return;
        }

        const updateHeights = () => {
            const items = Array.from(grid.querySelectorAll<HTMLElement>("[data-palette-card]"));
            const nextFullHeight = grid.scrollHeight;

            setFullHeight(nextFullHeight);

            if (items.length === 0) {
                setCollapsedHeight(null);
                return;
            }

            const firstGrid =
                grid.querySelector<HTMLElement>("[data-palette-grid]") ?? grid;
            const gridStyles = window.getComputedStyle(firstGrid);
            const columnCount = Math.max(
                1,
                gridStyles.gridTemplateColumns.split(" ").filter(Boolean).length
            );
            const rowGap = Number.parseFloat(gridStyles.rowGap || "0");
            const nextCardHeight = items[0].offsetHeight;

            setCardHeight(nextCardHeight);

            if (items.length <= columnCount) {
                setCollapsedHeight(nextFullHeight);
                return;
            }

            const nextCollapsedHeight = Math.min(
                nextFullHeight,
                Math.round(nextCardHeight * 1.5 + rowGap)
            );

            setCollapsedHeight(nextCollapsedHeight);
        };

        updateHeights();

        const resizeObserver = new ResizeObserver(updateHeights);
        resizeObserver.observe(grid);

        return () => {
            resizeObserver.disconnect();
        };
    }, [selectedColorCount, selectedPalette.id, selectedPalette.variant]);

    const canExpand = collapsedHeight !== null && fullHeight - collapsedHeight > 8;
    const visibleHeight = isExpanded || !canExpand ? fullHeight : collapsedHeight;

    const scrollToPalette = () => {
        const section = sectionRef.current;

        if (!section) {
            return;
        }

        const nextTop = Math.max(0, window.scrollY + section.getBoundingClientRect().top - 16);

        window.scrollTo({
            top: nextTop,
            behavior: "smooth",
        });
    };

    return (
        <section
            ref={sectionRef}
            id="palette"
            className="scroll-mt-0 border-y border-[#ead0d4] bg-white/50 px-4 py-12 sm:px-6"
        >
            <div className="mx-auto grid max-w-6xl gap-8 lg:grid-cols-[0.85fr_1.15fr] lg:items-center">
                <div>
                    <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#994d59]">
                        {palette.eyebrow}
                    </p>
                    <h2 className="font-heading mt-3 max-w-2xl text-3xl font-semibold text-[#2c2426]">
                        {palette.title}
                    </h2>
                    <p className="mt-5 max-w-xl text-base leading-7 text-[#5f5154]">
                        {palette.intro}
                    </p>
                </div>

                <div>
                    <div className="mb-5 grid grid-cols-3 gap-2">
                        {paletteCollections.map((collection) => (
                            <Button
                                key={collection.id}
                                type="button"
                                variant="outline"
                                size="sm"
                                className={`h-9 rounded-full border-[#d9bcc1] px-3 text-xs uppercase tracking-[0.08em] ${
                                    collection.id === selectedPaletteId
                                        ? "bg-[#fff4f6] text-[#5f5154]"
                                        : "bg-white/70 text-[#7a6a6f] hover:bg-white hover:text-[#5f5154]"
                                }`}
                                aria-pressed={collection.id === selectedPaletteId}
                                onClick={() => {
                                    setSelectedPaletteId(collection.id);
                                    setIsExpanded(false);
                                }}
                            >
                                {collection.label}
                            </Button>
                        ))}
                    </div>

                    <div
                        className="relative overflow-hidden transition-[max-height] duration-500 ease-in-out"
                        style={{ maxHeight: `${visibleHeight}px` }}
                    >
                        {selectedColorCount > 0 ? (
                            <div ref={gridRef} className="space-y-5">
                                {selectedSections.map((section) => (
                                    <PaletteColorSection
                                        key={section.id}
                                        collection={selectedPalette}
                                        section={section}
                                    />
                                ))}
                            </div>
                        ) : (
                            <div
                                ref={gridRef}
                                className="rounded-md border border-[#ead0d4] bg-[#fffaf8] px-5 py-8 text-center text-sm leading-6 text-[#6a5b5f]"
                            >
                                {palette.emptyText}
                            </div>
                        )}

                        {canExpand ? (
                            <div
                                aria-hidden="true"
                                className={`pointer-events-none absolute inset-x-0 bottom-0 transition-opacity duration-300 ${
                                    isExpanded ? "opacity-0" : "opacity-100"
                                }`}
                                style={{ height: `${Math.max(40, Math.round(cardHeight * 0.5))}px` }}
                            >
                                <div className="h-full bg-gradient-to-t from-[#f8eef0] via-[#f8eef0]/58 to-transparent" />
                            </div>
                        ) : null}
                    </div>

                    {canExpand ? (
                        <div className="mt-5 flex justify-center">
                            <Button
                                type="button"
                                variant="outline"
                                size="icon-sm"
                                aria-label={isExpanded ? "Collapse palette" : "Expand palette"}
                                aria-expanded={isExpanded}
                                onClick={() =>
                                    setIsExpanded((currentState) => {
                                        if (currentState) {
                                            requestAnimationFrame(scrollToPalette);
                                        }

                                        return !currentState;
                                    })
                                }
                                className="h-8 w-16 border-[#d9bcc1] bg-white/75 text-[#746569] hover:bg-[#fff4f6] hover:text-[#5f5154]"
                            >
                                <ChevronDownIcon
                                    className={`size-4 transition-transform duration-300 ${isExpanded ? "rotate-180" : ""}`}
                                />
                            </Button>
                        </div>
                    ) : null}
                </div>
            </div>
        </section>
    );
}

function PaletteColorSection({
    collection,
    section,
}: {
    collection: PaletteCollection;
    section: PaletteCollectionSection;
}) {
    return (
        <div>
            {section.dividerAbove ? <div className="mb-5 h-px bg-[#e3c7cc]" /> : null}
            <div
                data-palette-grid
                className={`grid gap-3 ${
                    collection.variant === "double"
                        ? "grid-cols-2 sm:grid-cols-3 xl:grid-cols-4"
                        : "grid-cols-3 sm:grid-cols-4 xl:grid-cols-5"
                }`}
            >
                {section.colors.map((color) => (
                    <PaletteColorCard
                        key={`${section.id}-${color.code}`}
                        collection={collection}
                        sectionId={section.id}
                        code={color.code}
                        imageAlt={color.imageAlt}
                        imageSrc={color.imageSrc}
                        detailImageSrc={color.detailImageSrc}
                    />
                ))}
            </div>
        </div>
    );
}

function PaletteColorCard({
    collection,
    sectionId,
    code,
    imageAlt,
    imageSrc,
    detailImageSrc,
}: {
    collection: PaletteCollection;
    sectionId: string;
    code: string;
    imageAlt: string;
    imageSrc: string;
    detailImageSrc?: string;
}) {
    const isMainWarmSection = collection.id === "warm" && sectionId === "warm";
    const imageInsetClass = isMainWarmSection ? "p-3" : "p-1";

    return (
        <div data-palette-card className="rounded-md border border-[#ead0d4] bg-[#fffaf8] p-2">
            {collection.variant === "double" && detailImageSrc ? (
                <div className="grid grid-cols-2 gap-1.5">
                    <div className="relative aspect-[4/5] overflow-hidden rounded-sm border border-black/5 bg-white">
                        <Image
                            src={imageSrc}
                            alt={`${imageAlt} view 1`}
                            fill
                            sizes="(min-width: 1280px) 12vw, (min-width: 640px) 22vw, 42vw"
                            unoptimized
                            className={`h-full w-full object-contain ${imageInsetClass}`}
                        />
                    </div>
                    <div className="relative aspect-[4/5] overflow-hidden rounded-sm border border-black/5 bg-white">
                        <Image
                            src={detailImageSrc}
                            alt={`${imageAlt} view 2`}
                            fill
                            sizes="(min-width: 1280px) 12vw, (min-width: 640px) 22vw, 42vw"
                            unoptimized
                            className={`h-full w-full object-contain ${imageInsetClass}`}
                        />
                    </div>
                </div>
            ) : (
                <div
                    className={`relative overflow-hidden rounded-sm border border-black/5 ${
                        collection.id === "gradient" ? "aspect-[1/2] bg-transparent" : "aspect-square bg-white"
                    }`}
                >
                    <Image
                        src={imageSrc}
                        alt={imageAlt}
                        fill
                        sizes="(min-width: 1280px) 10vw, (min-width: 640px) 18vw, 28vw"
                        unoptimized
                        className={`h-full w-full ${
                            collection.id === "gradient" ? "object-cover" : `object-contain ${imageInsetClass}`
                        }`}
                    />
                </div>
            )}
            <p className="mt-2 text-center text-xs font-semibold uppercase tracking-[0.12em] text-[#5f5154]">
                {code}
            </p>
        </div>
    );
}
