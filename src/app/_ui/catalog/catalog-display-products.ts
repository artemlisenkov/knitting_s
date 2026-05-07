"use client"

import { toPublicAssetPath } from "@/src/lib/public-asset-path";
import { staticCatalogProductGalleries } from "@/src/app/_ui/catalog/static-catalog-product-galleries";
import type { PublishedCatalogProduct } from "@/src/app/_data/catalog-products";
import type {
    CatalogDisplayProduct,
    CatalogDisplayProductImage,
} from "@/src/app/_ui/catalog/catalog-product-types";
import type { LandingCatalogGroup, LandingCopy } from "@/src/app/_ui/landing/landing-types";

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

export function getGroupDisplayProducts({
    group,
    databaseProducts,
    fallbackProductTitle,
    fallbackProductDescription,
    fallbackProductImageAlt,
}: {
    group: LandingCatalogGroup;
    databaseProducts: PublishedCatalogProduct[];
    fallbackProductTitle: string;
    fallbackProductDescription: string;
    fallbackProductImageAlt: string;
}) {
    return [
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
                    price: product.pricePln === null ? null : `${product.pricePln} pln`,
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
    ] satisfies CatalogDisplayProduct[];
}

export type WelcomeDisplayProduct = CatalogDisplayProduct & {
    kindLabel: string;
};

export function getWelcomeDisplayProducts({
    catalog,
    databaseProducts,
}: {
    catalog: LandingCopy["catalog"];
    databaseProducts: PublishedCatalogProduct[];
}) {
    const categoryLabels = new Map(
        catalog.groups.map((group) => [group.id, catalog.kindLabels[group.id]] as const)
    );

    return catalog.groups.flatMap((group) =>
        getGroupDisplayProducts({
            group,
            databaseProducts,
            fallbackProductTitle: catalog.dynamicProductTitle,
            fallbackProductDescription: catalog.dynamicProductDescription,
            fallbackProductImageAlt: catalog.dynamicProductImageAlt,
        }).map((product) => ({
            ...product,
            kindLabel: categoryLabels.get(group.id) ?? group.title,
        }))
    ) satisfies WelcomeDisplayProduct[];
}
