"use client"

import Image from "next/image";
import { useState } from "react";
import { ChevronLeftIcon, ChevronRightIcon } from "lucide-react";
import { Button } from "@/src/components/ui/button";
import { DialogContent, DialogDescription, DialogTitle } from "@/src/components/ui/dialog";
import { cn } from "@/src/lib/utils";
import type { CatalogDisplayProduct } from "@/src/app/_ui/catalog-product-types";

export function CatalogProductDialog({
    product,
    categoryTitle,
}: {
    product: CatalogDisplayProduct;
    categoryTitle: string;
}) {
    const [selectedImageIndex, setSelectedImageIndex] = useState(0);
    const selectedImage = product.galleryImages[selectedImageIndex] ?? product.galleryImages[0];
    const hasMultipleImages = product.galleryImages.length > 1;

    const showPreviousImage = () => {
        setSelectedImageIndex((currentIndex) => (
            currentIndex === 0 ? product.galleryImages.length - 1 : currentIndex - 1
        ));
    };

    const showNextImage = () => {
        setSelectedImageIndex((currentIndex) => (
            currentIndex + 1 >= product.galleryImages.length ? 0 : currentIndex + 1
        ));
    };

    return (
        <DialogContent className="h-[calc(100dvh-1rem)] max-h-[860px] max-w-[min(1180px,calc(100vw-1rem))] gap-0 overflow-hidden rounded-md border border-[#d78d98] bg-[#fffaf8] p-0 text-[#2f2a2a] sm:h-[calc(100dvh-2rem)] sm:max-w-[min(1180px,calc(100vw-2rem))]">
            <div className="flex h-full min-h-0 flex-col lg:grid lg:grid-cols-[minmax(0,1fr)_minmax(320px,0.56fr)]">
                <div className="flex min-h-0 flex-1 flex-col gap-3 bg-white p-3 sm:p-4 lg:grid lg:grid-cols-[4.5rem_minmax(0,1fr)]">
                    <div className="relative min-h-[280px] flex-1 overflow-hidden rounded-md bg-[#f8eef0] lg:order-2 lg:min-h-0">
                        {selectedImage ? (
                            <Image
                                src={selectedImage.src}
                                alt={selectedImage.alt}
                                fill
                                sizes="(min-width: 1024px) 720px, 100vw"
                                unoptimized
                                className="h-full w-full object-cover"
                            />
                        ) : null}

                        {hasMultipleImages ? (
                            <>
                                <Button
                                    type="button"
                                    size="icon"
                                    className="absolute left-3 top-1/2 size-10 -translate-y-1/2 rounded-full bg-white/85 text-[#2c2426] shadow-md hover:bg-white hover:text-[#994d59]"
                                    aria-label={`Previous ${product.title} image`}
                                    onClick={showPreviousImage}
                                >
                                    <ChevronLeftIcon />
                                </Button>
                                <Button
                                    type="button"
                                    size="icon"
                                    className="absolute right-3 top-1/2 size-10 -translate-y-1/2 rounded-full bg-white/85 text-[#2c2426] shadow-md hover:bg-white hover:text-[#994d59]"
                                    aria-label={`Next ${product.title} image`}
                                    onClick={showNextImage}
                                >
                                    <ChevronRightIcon />
                                </Button>
                            </>
                        ) : null}
                    </div>

                    <div className="flex h-20 shrink-0 gap-2 overflow-x-auto pb-1 lg:order-1 lg:h-full lg:flex-col lg:overflow-x-hidden lg:overflow-y-auto lg:pb-0 lg:pr-1">
                        {product.galleryImages.map((image, index) => (
                            <button
                                key={image.id}
                                type="button"
                                className={cn(
                                    "relative h-20 w-16 shrink-0 overflow-hidden rounded-md border bg-white outline-none transition-all focus-visible:ring-2 focus-visible:ring-[#994d59] lg:h-24 lg:w-full",
                                    selectedImageIndex === index
                                        ? "border-[#994d59] ring-2 ring-[#994d59]/25"
                                        : "border-[#ead0d4] hover:border-[#d88c98]"
                                )}
                                aria-label={`Show ${product.title} image ${index + 1}`}
                                aria-pressed={selectedImageIndex === index}
                                onClick={() => setSelectedImageIndex(index)}
                            >
                                <Image
                                    src={image.src}
                                    alt={image.alt}
                                    fill
                                    sizes="72px"
                                    unoptimized
                                    className="h-full w-full object-cover"
                                />
                            </button>
                        ))}
                    </div>
                </div>

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
