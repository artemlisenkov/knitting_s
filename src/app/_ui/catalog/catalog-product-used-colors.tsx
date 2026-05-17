"use client"

import Image from "next/image";
import type { CatalogDisplayProductUsedColor } from "@/src/app/_ui/catalog/catalog-product-types";

export function CatalogProductUsedColors({
    colors,
    label,
}: {
    colors?: CatalogDisplayProductUsedColor[];
    label: string;
}) {
    if (!colors || colors.length === 0) {
        return null;
    }

    return (
        <div>
            <p className="text-xs font-semibold uppercase tracking-[0.12em] text-[#994d59]">
                {label}
            </p>
            <div className="mt-3 flex flex-wrap gap-3">
                {colors.map((color) => (
                    <div key={color.code} className="w-20 rounded-md border border-[#ead0d4] bg-[#fffaf8] p-2.5">
                        <div className="relative aspect-square overflow-hidden rounded-sm border border-black/5 bg-white">
                            <Image
                                src={color.imageSrc}
                                alt={color.imageAlt}
                                fill
                                sizes="80px"
                                quality={50}
                                loading="lazy"
                                className="h-full w-full object-cover"
                            />
                        </div>
                        <p className="mt-2 text-center text-xs font-semibold uppercase tracking-[0.12em] text-[#5f5154]">
                            {color.code}
                        </p>
                    </div>
                ))}
            </div>
        </div>
    );
}
