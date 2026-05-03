"use client"

import Image from "next/image";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useState, type RefObject } from "react";
import { Button, buttonVariants } from "@/src/components/ui/button";
import { Dialog } from "@/src/components/ui/dialog";
import { toPublicAssetPath } from "@/src/lib/public-asset-path";
import { cn } from "@/src/lib/utils";
import { CatalogMobileProductPage } from "@/src/app/_ui/catalog/catalog-mobile-product-page";
import { CatalogProductDialog } from "@/src/app/_ui/catalog/catalog-product-dialog";
import type { PublishedCatalogProduct } from "@/src/app/_data/catalog-products";
import type { CatalogDisplayProduct, CatalogDisplayProductImage } from "@/src/app/_ui/catalog/catalog-product-types";
import type { LandingCatalogGroup, LandingCopy } from "@/src/app/_ui/landing/landing-types";
import { useIsMobile } from "@/src/hooks/use-mobile";

type StaticCatalogProductId = LandingCatalogGroup["products"][number]["id"];

const staticCatalogProductGalleries: Record<StaticCatalogProductId, string[]> = {
    "cardigan-cloudy": [
        "/catalog/cardigans/unisex/cardigan-unisex.jpg",
        "/catalog/cardigans/unisex/cardigan-unisex-front-alt.jpg",
        "/catalog/cardigans/unisex/cardigan-unisex-side.jpg",
        "/catalog/cardigans/unisex/cardigan-unisex-back.jpg",
    ],
    "cardigan-sunflower": [
        "/catalog/cardigans/sunflower/cardigan-sunflower.jpg",
        "/catalog/cardigans/sunflower/cardigan-sunflower-side.jpg",
        "/catalog/cardigans/sunflower/cardigan-sunflower-back-alt.jpg",
        "/catalog/cardigans/sunflower/cardigan-sunflower-back.jpg",
    ],
    "top-zebra": [
        "/catalog/tops/zebra/top-zebra.jpg",
        "/catalog/tops/zebra/top-zebra-alt.jpg",
        "/catalog/tops/zebra/top-zebra-back.jpg",
    ],
    "top-browny": [
        "/catalog/tops/browny/top-browny.jpg",
        "/catalog/tops/browny/top-browny-side.jpg",
        "/catalog/tops/browny/top-browny-back.jpg",
    ],
    "top-gradient": [
        "/catalog/tops/gradient/top-gradient.jpg",
        "/catalog/tops/gradient/top-gradient-alt.jpg",
        "/catalog/tops/gradient/top-gradient-back.jpg",
        "/catalog/tops/gradient/top-gradient-back-alt.jpg",
        "/catalog/tops/gradient/top-gradient-side.jpg",
        "/catalog/tops/gradient/top-gradient-side-alt.jpg",
    ],
    "top-flower": [
        "/catalog/tops/flower/top-flower.jpg",
        "/catalog/tops/flower/top-flower-front-alt.jpg",
        "/catalog/tops/flower/top-flower-back.jpg",
    ],
};

const catalogPageSize = 4;

const createProductGallery = (
    primaryImage: CatalogDisplayProductImage,
    extraImages: CatalogDisplayProductImage[] = []
) => {
    const imagePaths = new Set<string>();

    return [primaryImage, ...extraImages].filter((image) => {
        if (imagePaths.has(image.src)) return false;

        imagePaths.add(image.src);
        return true;
    });
};

export function CatalogSection({
    catalog,
    catalogRef,
    databaseProducts,
    isCatalogVisible,
    isAdminView,
}: {
    catalog: LandingCopy["catalog"];
    catalogRef: RefObject<HTMLElement | null>;
    databaseProducts: PublishedCatalogProduct[];
    isCatalogVisible: boolean;
    isAdminView: boolean;
}) {
    return (
        <section ref={catalogRef} id="catalog" className="scroll-mt-16 px-4 pt-10 pb-14 sm:px-6">
            <div className="mx-auto max-w-6xl">
                <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#994d59]">
                    {catalog.eyebrow}
                </p>
                <h2 className="mt-3 max-w-2xl text-3xl font-semibold text-[#2c2426]">
                    {catalog.title}
                </h2>

                <div className="mt-10 space-y-14">
                    {catalog.groups.map((group) => (
                        <CatalogProductGroup
                            key={group.id}
                            group={group}
                            databaseProducts={databaseProducts}
                            fallbackProductTitle={catalog.dynamicProductTitle}
                            fallbackProductDescription={catalog.dynamicProductDescription}
                            fallbackProductImageAlt={catalog.dynamicProductImageAlt}
                            emptyText={catalog.emptyText}
                            isVisible={isCatalogVisible}
                            isAdminView={isAdminView}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
}

function CatalogProductGroup({
    group,
    databaseProducts,
    fallbackProductTitle,
    fallbackProductDescription,
    fallbackProductImageAlt,
    emptyText,
    isVisible,
    isAdminView,
}: {
    group: LandingCatalogGroup;
    databaseProducts: PublishedCatalogProduct[];
    fallbackProductTitle: string;
    fallbackProductDescription: string;
    fallbackProductImageAlt: string;
    emptyText: string;
    isVisible: boolean;
    isAdminView: boolean;
}) {
    const isMobile = useIsMobile();
    const router = useRouter();
    const pathname = usePathname();
    const searchParams = useSearchParams();
    const [page, setPage] = useState(0);
    const [selectedProductId, setSelectedProductId] = useState<string | null>(null);
    const products: CatalogDisplayProduct[] = [
        ...group.products.map((product) => {
            const galleryImages = staticCatalogProductGalleries[product.id].map((src, index) => ({
                id: `${product.id}-${index}`,
                src: toPublicAssetPath(src),
                alt: product.imageAlt,
            }));
            const imageSrc = galleryImages[0].src;

            return {
                ...product,
                imageSrc,
                galleryImages: createProductGallery(galleryImages[0], galleryImages.slice(1)),
            };
        }),
        ...databaseProducts
            .filter((product) => product.category === group.id)
            .map((product) => {
                const imageAlt = product.imageAlt ?? product.title ?? fallbackProductImageAlt;

                return {
                    id: product.id,
                    title: product.title ?? fallbackProductTitle,
                    description: product.description ?? fallbackProductDescription,
                    imageAlt,
                    imageSrc: toPublicAssetPath(product.imagePath),
                    galleryImages: createProductGallery(
                        {
                            id: `${product.id}-primary`,
                            src: toPublicAssetPath(product.imagePath),
                            alt: imageAlt,
                        },
                        product.galleryImages.map((image) => ({
                            id: image.id,
                            src: toPublicAssetPath(image.imagePath),
                            alt: image.imageAlt ?? imageAlt,
                        }))
                    ),
                };
            }),
    ];
    const mobileSelectedProductId = searchParams.get("product");
    const mobileSelectedProduct = isMobile
        ? products.find((product) => product.id === mobileSelectedProductId) ?? null
        : null;
    const selectedProduct = products.find((product) => product.id === selectedProductId) ?? null;
    const pageCount = Math.max(1, Math.ceil(products.length / catalogPageSize));
    const pageProducts = products.slice(page * catalogPageSize, (page + 1) * catalogPageSize);

    const showNextPage = () => setPage((currentPage) => (currentPage + 1) % pageCount);
    const createProductHref = (productId: string) => {
        const params = new URLSearchParams(searchParams.toString());

        params.set("product", productId);

        const query = params.toString();

        return query ? `${pathname}?${query}` : pathname;
    };
    const openProduct = (productId: string) => {
        if (isMobile) {
            router.push(createProductHref(productId), { scroll: false });
            return;
        }

        setSelectedProductId(productId);
    };
    const closeMobileProductPage = () => {
        if (!mobileSelectedProductId) return;

        if (window.history.length > 1) {
            router.back();
            return;
        }

        const params = new URLSearchParams(searchParams.toString());

        params.delete("product");

        const query = params.toString();

        router.replace(query ? `${pathname}?${query}` : pathname, { scroll: false });
    };

    return (
        <section aria-label={group.title}>
            <div className="mb-5 flex items-end justify-between gap-4">
                <div className="flex items-center gap-3">
                    <h3 className="font-serif text-3xl leading-none text-[#2c2426] sm:text-4xl">
                        {group.title}
                    </h3>
                    {isAdminView ? (
                        <AdminCategoryAddButton categoryTitle={group.title} />
                    ) : null}
                </div>
                {pageCount > 1 ? (
                    <p className="text-sm font-medium text-[#994d59]">
                        {page + 1} / {pageCount}
                    </p>
                ) : null}
            </div>

            {products.length > 0 ? (
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
                                <button
                                    type="button"
                                    className="group block w-full min-w-0 rounded-md text-left outline-none focus-visible:ring-2 focus-visible:ring-[#994d59] focus-visible:ring-offset-4 focus-visible:ring-offset-[#f8eef0]"
                                    aria-label={`Open ${product.title}`}
                                    onClick={() => openProduct(product.id)}
                                >
                                    <div className="overflow-hidden rounded-md border border-[#d78d98] bg-[#fffaf8] p-1.5 shadow-none transition-all duration-200 group-hover:-translate-y-1 sm:group-hover:shadow-md sm:p-2 lg:shadow-[8px_8px_0_rgba(176,91,102,0.12)]">
                                        <div className="relative aspect-3/4 overflow-hidden rounded-md bg-white">
                                            <Image
                                                src={product.imageSrc}
                                                alt={product.imageAlt}
                                                fill
                                                sizes="(min-width: 1024px) 25vw, 50vw"
                                                unoptimized
                                                className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-[1.03]"
                                            />
                                        </div>
                                    </div>
                                    <span className="mt-3 block text-base font-semibold text-[#2c2426] sm:mt-4 sm:text-lg">
                                        {product.title}
                                    </span>
                                    <span className="mt-1.5 block text-xs leading-5 text-[#6a5b5f] sm:mt-2 sm:text-sm sm:leading-6">
                                        {product.description}
                                    </span>
                                </button>
                            </article>
                        ))}
                    </div>

                    {!isMobile ? (
                        <Dialog
                            open={selectedProduct !== null}
                            onOpenChange={(isOpen) => {
                                if (!isOpen) setSelectedProductId(null);
                            }}
                        >
                            {selectedProduct ? (
                                <CatalogProductDialog
                                    key={selectedProduct.id}
                                    product={selectedProduct}
                                    categoryTitle={group.title}
                                />
                            ) : null}
                        </Dialog>
                    ) : null}

                    {mobileSelectedProduct ? (
                        <CatalogMobileProductPage
                            key={mobileSelectedProduct.id}
                            product={mobileSelectedProduct}
                            categoryTitle={group.title}
                            onClose={closeMobileProductPage}
                        />
                    ) : null}

                    {pageCount > 1 ? (
                        <Button
                            type="button"
                            size="icon"
                            className="absolute right-0 top-1/2 size-12 -translate-y-1/2 rounded-full bg-[#b05b66] text-white sm:shadow-md hover:bg-[#994d59]"
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
                <div className="grid grid-cols-2 gap-4 lg:grid-cols-4">
                    <p className="col-span-2 border-l-2 border-[#d88c98] pl-4 text-base leading-7 text-[#6a5b5f] lg:col-span-4">
                        {emptyText}
                    </p>
                </div>
            )}
        </section>
    );
}

function AdminCategoryAddButton({
    categoryTitle,
}: {
    categoryTitle: string;
}) {
    return (
        <button
            type="button"
            className={cn(
                buttonVariants({ variant: "outline", size: "sm" }),
                "h-8 rounded-full border-[#ead0d4]/70 bg-white/45 px-3 text-xs font-semibold uppercase tracking-[0.08em] text-[#4d3b3f] sm:shadow-sm hover:bg-white/65 hover:text-[#994d59] sm:hover:shadow-sm"
            )}
            aria-label={`Add product photo to ${categoryTitle}`}
        >
            Add
        </button>
    );
}
