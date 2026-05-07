"use client"

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { ChevronLeftIcon, ChevronRightIcon, XIcon } from "lucide-react";
import { Button } from "@/src/components/ui/button";
import { cn } from "@/src/lib/utils";
import type { CatalogDisplayProduct } from "@/src/app/_ui/catalog/catalog-product-types";

export function CatalogProductMediaGallery({
    product,
    layout,
}: {
    product: CatalogDisplayProduct;
    layout: "desktop" | "mobile";
}) {
    const [selectedImageIndex, setSelectedImageIndex] = useState(0);
    const [isImageViewerOpen, setIsImageViewerOpen] = useState(false);
    const swipeStartRef = useRef<{ x: number; y: number } | null>(null);
    const lightboxSwipeStartRef = useRef<{ x: number; y: number } | null>(null);
    const selectedImage = product.galleryImages[selectedImageIndex] ?? product.galleryImages[0];
    const hasMultipleImages = product.galleryImages.length > 1;

    useEffect(() => {
        if (!isImageViewerOpen) {
            return;
        }

        const previousOverflow = document.body.style.overflow;

        document.body.style.overflow = "hidden";

        return () => {
            document.body.style.overflow = previousOverflow;
        };
    }, [isImageViewerOpen]);

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
    const startSwipe = (
        event: React.TouchEvent,
        ref: React.MutableRefObject<{ x: number; y: number } | null>
    ) => {
        const touch = event.touches[0];

        if (!touch) return;

        ref.current = { x: touch.clientX, y: touch.clientY };
    };
    const finishSwipe = ({
        event,
        ref,
        allowDismiss = false,
    }: {
        event: React.TouchEvent;
        ref: React.MutableRefObject<{ x: number; y: number } | null>;
        allowDismiss?: boolean;
    }) => {
        const start = ref.current;
        const touch = event.changedTouches[0];

        ref.current = null;

        if (!start || !touch) return;

        const deltaX = touch.clientX - start.x;
        const deltaY = touch.clientY - start.y;
        const absDeltaX = Math.abs(deltaX);
        const absDeltaY = Math.abs(deltaY);

        if (allowDismiss && deltaY > 90 && absDeltaY > absDeltaX) {
            setIsImageViewerOpen(false);
            return;
        }

        if (!hasMultipleImages) return;

        if (absDeltaX < 50 || absDeltaX <= absDeltaY) return;

        if (deltaX > 0 && start.x <= 24) {
            return;
        }

        if (deltaX > 0) {
            showPreviousImage();
            return;
        }

        showNextImage();
    };
    const openImageViewer = () => {
        if (layout !== "mobile" || !selectedImage) return;

        setIsImageViewerOpen(true);
    };

    const thumbnails = product.galleryImages.map((image, index) => (
        <button
            key={image.id}
            type="button"
            className={cn(
                "relative shrink-0 overflow-hidden rounded-md border bg-white outline-none transition-all focus-visible:ring-2 focus-visible:ring-[#994d59]",
                layout === "desktop" ? "h-20 w-full sm:h-24" : "aspect-[3/4] h-24 w-20",
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
                sizes={layout === "desktop" ? "72px" : "80px"}
                quality={50}
                loading="lazy"
                className="h-full w-full object-cover"
            />
            <span
                className={cn(
                    "absolute inset-0 bg-black/30 transition-opacity",
                    selectedImageIndex === index ? "opacity-0" : "opacity-100"
                )}
                aria-hidden="true"
            />
        </button>
    ));

    const mainImage = (
        <div
            className={cn(
                "group/photo relative overflow-hidden rounded-md bg-[#f8eef0]",
                layout === "desktop" ? "order-2 min-h-[280px] lg:min-h-0" : "aspect-[4/5]"
            )}
            role={layout === "mobile" ? "button" : undefined}
            tabIndex={layout === "mobile" ? 0 : undefined}
            onClick={layout === "mobile" ? openImageViewer : undefined}
            onKeyDown={layout === "mobile"
                ? (event) => {
                    if (event.key === "Enter" || event.key === " ") {
                        event.preventDefault();
                        openImageViewer();
                    }
                }
                : undefined}
            onTouchStart={layout === "mobile" ? (event) => startSwipe(event, swipeStartRef) : undefined}
            onTouchEnd={layout === "mobile"
                ? (event) => finishSwipe({ event, ref: swipeStartRef })
                : undefined}
        >
            {selectedImage ? (
                <Image
                    src={selectedImage.src}
                    alt={selectedImage.alt}
                    fill
                    sizes={layout === "desktop" ? "(min-width: 1024px) 720px, 100vw" : "100vw"}
                    quality={72}
                    loading="eager"
                    fetchPriority="high"
                    className="h-full w-full object-cover"
                />
            ) : null}

            {hasMultipleImages ? (
                <>
                    <Button
                        type="button"
                        variant="ghost"
                        className={cn(
                            "absolute inset-y-0 left-0 h-full w-14 !translate-y-0 justify-start rounded-none bg-transparent px-2 text-white transition-opacity duration-150 hover:bg-transparent",
                            layout === "desktop"
                                ? "opacity-100 focus-visible:opacity-100 sm:opacity-0 sm:group-hover/photo:opacity-100"
                                : "opacity-100"
                        )}
                        aria-label={`Previous ${product.title} image`}
                        onClick={(event) => {
                            event.stopPropagation();
                            showPreviousImage();
                        }}
                    >
                        <span className="flex size-10 items-center justify-center rounded-full bg-[#4a4a4a]/35 backdrop-blur-sm transition-colors group-hover/button:bg-[#4a4a4a]/45 sm:shadow-sm">
                            <ChevronLeftIcon />
                        </span>
                    </Button>
                    <Button
                        type="button"
                        variant="ghost"
                        className={cn(
                            "absolute inset-y-0 right-0 h-full w-14 !translate-y-0 justify-end rounded-none bg-transparent px-2 text-white transition-opacity duration-150 hover:bg-transparent",
                            layout === "desktop"
                                ? "opacity-100 focus-visible:opacity-100 sm:opacity-0 sm:group-hover/photo:opacity-100"
                                : "opacity-100"
                        )}
                        aria-label={`Next ${product.title} image`}
                        onClick={(event) => {
                            event.stopPropagation();
                            showNextImage();
                        }}
                    >
                        <span className="flex size-10 items-center justify-center rounded-full bg-[#4a4a4a]/35 backdrop-blur-sm transition-colors group-hover/button:bg-[#4a4a4a]/45 sm:shadow-sm">
                            <ChevronRightIcon />
                        </span>
                    </Button>
                </>
            ) : null}
        </div>
    );

    if (layout === "mobile") {
        return (
            <div>
                {mainImage}
                {hasMultipleImages ? (
                    <div className="mt-3 overflow-x-auto pb-1 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
                        <div className="flex gap-2 pr-2">
                            {thumbnails}
                        </div>
                    </div>
                ) : null}

                {isImageViewerOpen && selectedImage ? (
                    <div
                        className="fixed inset-0 z-[70] bg-black/95"
                        role="dialog"
                        aria-modal="true"
                    >
                        <Button
                            type="button"
                            variant="ghost"
                            size="icon"
                            className="absolute right-4 top-4 z-10 rounded-full bg-white/10 text-white hover:bg-white/18 hover:text-white"
                            aria-label="Close image"
                            onClick={() => setIsImageViewerOpen(false)}
                        >
                            <XIcon className="size-5" />
                        </Button>

                        <div
                            className="flex h-full items-center justify-center p-4"
                            onTouchStart={(event) => startSwipe(event, lightboxSwipeStartRef)}
                            onTouchEnd={(event) => finishSwipe({
                                event,
                                ref: lightboxSwipeStartRef,
                                allowDismiss: true,
                            })}
                        >
                            <div className="relative h-full w-full max-w-4xl">
                                <Image
                                    src={selectedImage.src}
                                    alt={selectedImage.alt}
                                    fill
                                    sizes="100vw"
                                    quality={82}
                                    loading="eager"
                                    fetchPriority="high"
                                    className="h-full w-full object-contain"
                                />
                            </div>
                        </div>
                    </div>
                ) : null}
            </div>
        );
    }

    return (
        <div className="grid min-h-0 flex-1 grid-cols-[4.25rem_minmax(0,1fr)] gap-3 bg-white p-3 sm:grid-cols-[5rem_minmax(0,1fr)] sm:p-4 lg:grid-cols-[4.5rem_minmax(0,1fr)]">
            {mainImage}

            <div className="order-1 flex min-h-0 flex-col gap-2 overflow-y-auto pr-1">
                {thumbnails}
            </div>
        </div>
    );
}
