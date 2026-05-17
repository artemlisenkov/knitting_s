import { LandingPageContents } from "@/src/app/_ui/landing/landing-page-contents";
import { getCachedPublishedCatalogProducts } from "@/src/app/_data/catalog-products";

export const dynamic = "force-dynamic";

async function LandingPage() {
    const databaseProducts = await getCachedPublishedCatalogProducts();

    return <LandingPageContents databaseProducts={databaseProducts} />;
}

export default LandingPage;
