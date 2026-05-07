"use client"

import { ChevronDownIcon } from "lucide-react";
import Image from "next/image";
import { useLayoutEffect, useRef, useState } from "react";
import type { LandingCopy } from "@/src/app/_ui/landing/landing-types";
import { Button } from "@/src/components/ui/button";

export function PaletteSection({
    palette,
}: {
    palette: LandingCopy["palette"];
}) {
    const gridRef = useRef<HTMLDivElement | null>(null);
    const [isExpanded, setIsExpanded] = useState(false);
    const [fullHeight, setFullHeight] = useState(0);
    const [collapsedHeight, setCollapsedHeight] = useState<number | null>(null);
    const [cardHeight, setCardHeight] = useState(0);

    useLayoutEffect(() => {
        const grid = gridRef.current;

        if (!grid) {
            return;
        }

        const updateHeights = () => {
            const items = Array.from(grid.children) as HTMLElement[];
            const nextFullHeight = grid.scrollHeight;

            setFullHeight(nextFullHeight);

            if (items.length === 0) {
                setCollapsedHeight(null);
                return;
            }

            const gridStyles = window.getComputedStyle(grid);
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
    }, [palette.colors.length]);

    const canExpand = collapsedHeight !== null && fullHeight - collapsedHeight > 8;
    const visibleHeight = isExpanded || !canExpand ? fullHeight : collapsedHeight;

    return (
        <section id="palette" className="scroll-mt-0 border-y border-[#ead0d4] bg-white/50 px-4 py-12 sm:px-6">
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
                    <div
                        className="relative overflow-hidden transition-[max-height] duration-500 ease-in-out"
                        style={{ maxHeight: `${visibleHeight}px` }}
                    >
                        <div ref={gridRef} className="grid grid-cols-3 gap-3 sm:grid-cols-4 xl:grid-cols-5">
                            {palette.colors.map((color) => (
                                <div
                                    key={color.code}
                                    className="rounded-md border border-[#ead0d4] bg-[#fffaf8] p-2"
                                >
                                    <div className="relative aspect-square overflow-hidden rounded-sm border border-black/5 bg-white">
                                        <Image
                                            src={color.imageSrc}
                                            alt={color.imageAlt}
                                            fill
                                            sizes="(min-width: 1280px) 10vw, (min-width: 640px) 18vw, 28vw"
                                            unoptimized
                                            className="h-full w-full object-contain p-1"
                                        />
                                    </div>
                                    <p className="mt-2 text-center text-xs font-semibold uppercase tracking-[0.12em] text-[#5f5154]">
                                        {color.code}
                                    </p>
                                </div>
                            ))}
                        </div>

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
                                onClick={() => setIsExpanded((currentState) => !currentState)}
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
