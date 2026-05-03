import type { Metadata } from "next";
import {getSession} from "@/src/lib/auth";
import {redirect} from "next/navigation";
import {HomePageContents} from "@/src/app/home/_ui/home-page-contents";
import {getQueryClient} from "@/src/trpc/server";
import {dehydrate, HydrationBoundary} from "@tanstack/react-query";
import {ErrorBoundary} from "react-error-boundary";
import {Suspense} from "react";
import { getPublishedCatalogProducts } from "@/src/app/_data/catalog-products";

export const metadata: Metadata = {
    title: "Crochet | Admin",
};

async function HomePage() {
    const session = await getSession();

    if(!session) redirect("/");

    const queryClient = getQueryClient();
    const databaseProducts = await getPublishedCatalogProducts();

    return (
        <HydrationBoundary state={dehydrate(queryClient)}>
            <ErrorBoundary fallback={<div>There was an error</div>}>
                <Suspense fallback={<div>Loading...</div>}>
                    <HomePageContents databaseProducts={databaseProducts} />
                </Suspense>
            </ErrorBoundary>
        </HydrationBoundary>
    );
}

export default HomePage;
