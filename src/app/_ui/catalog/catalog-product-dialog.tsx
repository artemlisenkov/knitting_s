"use client"

import { DialogContent, DialogDescription, DialogTitle } from "@/src/components/ui/dialog";
import { CatalogProductMediaGallery } from "@/src/app/_ui/catalog/catalog-product-media-gallery";
import type { CatalogDisplayProduct } from "@/src/app/_ui/catalog/catalog-product-types";

export function CatalogProductDialog({
    product,
    categoryTitle,
}: {
    product: CatalogDisplayProduct;
    categoryTitle: string;
}) {
    return (
        <DialogContent className="h-[calc(100dvh-1rem)] max-h-[860px] max-w-[min(1180px,calc(100vw-1rem))] gap-0 overflow-hidden rounded-md border border-[#d78d98] bg-[#fffaf8] p-0 text-[#2f2a2a] sm:h-[calc(100dvh-2rem)] sm:max-w-[min(1180px,calc(100vw-2rem))]">
            <div className="flex h-full min-h-0 flex-col lg:grid lg:grid-cols-[minmax(0,1fr)_minmax(320px,0.56fr)]">
                <CatalogProductMediaGallery key={product.id} product={product} layout="desktop" />

                <div className="max-h-[38dvh] min-h-0 overflow-y-auto border-t border-[#ead0d4] p-5 sm:p-7 lg:max-h-none lg:border-l lg:border-t-0 lg:p-8">
                    <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#994d59]">
                        {categoryTitle}
                    </p>
                    <DialogTitle className="mt-4 font-serif text-4xl leading-tight text-[#2c2426] sm:text-5xl">
                        {product.title}
                    </DialogTitle>
                    <DialogDescription className="mt-5 text-base leading-7 text-[#5f5154] sm:text-lg">
                        {product.description}
                    </DialogDescription>
                </div>
            </div>
        </DialogContent>
    );
}
