import "server-only";

import { asc, eq } from "drizzle-orm";
import { db } from "@/src/db";
import { catalogProduct, catalogProductImage } from "@/src/db/schema";
import { toPublicAssetPath } from "@/src/lib/public-asset-path";

type CatalogProductSelect = typeof catalogProduct.$inferSelect;
type ProductWithGallery = Pick<
    CatalogProductSelect,
    "id" | "category" | "title" | "description" | "pricePln" | "imagePath" | "imageAlt"
> & {
    galleryImages: Array<{
        id: string;
        imagePath: string;
        imageAlt: string | null;
    }>;
};

export const getPublishedCatalogProducts = async () => {
    const rows = await db
        .select({
            id: catalogProduct.id,
            category: catalogProduct.category,
            title: catalogProduct.title,
            description: catalogProduct.description,
            pricePln: catalogProduct.pricePln,
            imagePath: catalogProduct.imagePath,
            imageAlt: catalogProduct.imageAlt,
            galleryImageId: catalogProductImage.id,
            galleryImagePath: catalogProductImage.imagePath,
            galleryImageAlt: catalogProductImage.imageAlt,
        })
        .from(catalogProduct)
        .leftJoin(catalogProductImage, eq(catalogProductImage.productId, catalogProduct.id))
        .where(eq(catalogProduct.isPublished, true))
        .orderBy(
            asc(catalogProduct.category),
            asc(catalogProduct.sortOrder),
            asc(catalogProductImage.sortOrder)
        );

    const products = new Map<string, ProductWithGallery>();

    for (const row of rows) {
        const product = products.get(row.id) ?? {
            id: row.id,
            category: row.category,
            title: row.title,
            description: row.description,
            pricePln: row.pricePln,
            imagePath: toPublicAssetPath(row.imagePath),
            imageAlt: row.imageAlt,
            galleryImages: [],
        };

        if (!products.has(row.id)) {
            products.set(row.id, product);
        }

        if (row.galleryImageId && row.galleryImagePath) {
            product.galleryImages.push({
                id: row.galleryImageId,
                imagePath: toPublicAssetPath(row.galleryImagePath),
                imageAlt: row.galleryImageAlt,
            });
        }
    }

    return Array.from(products.values());
};

export type PublishedCatalogProduct = Awaited<ReturnType<typeof getPublishedCatalogProducts>>[number];
