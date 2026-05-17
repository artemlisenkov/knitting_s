import type { Metadata } from "next";
import {getSession} from "@/src/lib/auth";
import {redirect} from "next/navigation";
import {HomePageContents} from "@/src/app/home/_ui/home-page-contents";
import { getPublishedCatalogProducts } from "@/src/app/_data/catalog-products";

export const metadata: Metadata = {
    title: "Crochet | Admin",
};

async function HomePage() {
    const session = await getSession();

    if(!session) redirect("/");

    const databaseProducts = await getPublishedCatalogProducts();

    return <HomePageContents databaseProducts={databaseProducts} />;
}

export default HomePage;
