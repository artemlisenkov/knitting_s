"use client"

import { useEffect } from "react";
import { ArrowLeftIcon } from "lucide-react";
import { Button } from "@/src/components/ui/button";
import { CatalogProductMediaGallery } from "@/src/app/_ui/catalog/catalog-product-media-gallery";
import { CatalogProductPrice } from "@/src/app/_ui/catalog/catalog-product-price";
import type { CatalogDisplayProduct } from "@/src/app/_ui/catalog/catalog-product-types";

export function CatalogMobileProductPage({
    product,
    categoryTitle,
    onClose,
}: {
    product: CatalogDisplayProduct;
    categoryTitle: string;
    onClose: () => void;
}) {
    useEffect(() => {
        const previousOverflow = document.body.style.overflow;

        document.body.style.overflow = "hidden";

        return () => {
            document.body.style.overflow = previousOverflow;
        };
    }, []);

    return (
        <div className="fixed inset-0 z-50 bg-[#f8eef0]">
            <div className="flex h-full flex-col overflow-y-auto">
                <div className="sticky top-0 z-10 flex items-center gap-3 border-b border-[#ead0d4] bg-[#f8eef0]/95 px-4 py-3 backdrop-blur">
                    <Button
                        type="button"
                        variant="ghost"
                        size="icon-sm"
                        aria-label="Back to catalog"
                        onClick={onClose}
                    >
                        <ArrowLeftIcon className="size-4" />
                    </Button>
                    <div className="min-w-0">
                        <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-[#994d59]">
                            {categoryTitle}
                        </p>
                        <p className="truncate text-sm font-semibold text-[#2c2426]">
                            {product.title}
                        </p>
                    </div>
                </div>

                <div className="px-4 py-4">
                    <div className="mx-auto max-w-md">
                        <div className="rounded-md border border-[#d78d98] bg-white p-3">
                            <CatalogProductMediaGallery
                                key={product.id}
                                product={product}
                                layout="mobile"
                            />
                        </div>

                        <div className="mt-4 rounded-md border border-[#d78d98] bg-[#fffaf8] p-5">
                            <h2 className="font-serif text-4xl leading-tight text-[#2c2426]">
                                {product.title}
                            </h2>
                            {product.price ? (
                                <CatalogProductPrice
                                    price={product.price}
                                />
                            ) : null}
                            <p className="mt-4 text-base leading-7 text-[#5f5154]">
                                {product.description}
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
