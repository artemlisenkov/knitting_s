"use client"

import { cn } from "@/src/lib/utils";

const catalogDiscountPln = 20;

const getCurrentPriceValue = (price: string) => {
    const matchedValue = price.match(/\d+/);

    return matchedValue ? Number.parseInt(matchedValue[0], 10) : null;
};

const getOriginalPriceLabel = (price: string) => {
    const currentPriceValue = getCurrentPriceValue(price);

    if (currentPriceValue === null) return null;

    const originalPriceValue = currentPriceValue + catalogDiscountPln;

    return `${originalPriceValue} pln`;
};

export function CatalogProductPrice({
    price,
    compact = false,
}: {
    price: string;
    compact?: boolean;
}) {
    const originalPriceLabel = getOriginalPriceLabel(price);

    return (
        <div className="mt-1 flex flex-wrap items-center gap-x-2 gap-y-1">
            <span
                className={cn(
                    "font-semibold uppercase tracking-[0.08em] text-[#7f3542]",
                    compact ? "text-sm sm:text-[15px]" : "text-lg sm:text-xl"
                )}
            >
                {price}
            </span>

            {originalPriceLabel ? (
                <span
                    className={cn(
                        "text-[#857d80] line-through",
                        compact ? "text-xs sm:text-sm" : "text-sm sm:text-base"
                    )}
                >
                    {originalPriceLabel}
                </span>
            ) : null}
        </div>
    );
}
