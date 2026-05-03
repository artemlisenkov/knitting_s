"use client"

import { LandingPageContents } from "@/src/app/_ui/landing/landing-page-contents";
import type { PublishedCatalogProduct } from "@/src/app/_data/catalog-products";

export const HomePageContents = ({
    databaseProducts,
}: {
    databaseProducts: PublishedCatalogProduct[];
}) => {
    return <LandingPageContents isAdminView databaseProducts={databaseProducts} />;
}
