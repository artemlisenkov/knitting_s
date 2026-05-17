import type { static_products } from "@/public/catalog/catalog.types";
import type { CatalogDisplayProductUsedColor } from "@/src/app/_ui/catalog/catalog-product-types";
import { toPublicAssetPath } from "@/src/lib/public-asset-path";

const createBabyCottonColor = (code: string): CatalogDisplayProductUsedColor => ({
    code,
    imageSrc: toPublicAssetPath(`/palette/baby-cotton/baby-cotton-${code}.jpg`),
    imageAlt: `Baby Cotton ${code} yarn`,
});

export const staticCatalogProductUsedColors: Record<static_products, CatalogDisplayProductUsedColor[]> = {
    "cardigan-cloudy": [
        createBabyCottonColor("3432"),
        createBabyCottonColor("3423"),
    ],
    "cardigan-sunflower": [],
    "top-zebra": [
        createBabyCottonColor("3438"),
        createBabyCottonColor("3411"),
    ],
    "top-gradient": [],
    "top-flower": [
        createBabyCottonColor("3440"),
        createBabyCottonColor("3420"),
        createBabyCottonColor("3422"),
    ],
    "top-browny": [
        createBabyCottonColor("3454"),
    ],
};
