import {getSession} from "@/src/lib/auth";
import {redirect} from "next/navigation";
import { LandingPageContents } from "@/src/app/_ui/landing/landing-page-contents";
import {getQueryClient} from "@/src/trpc/server";
import {dehydrate, HydrationBoundary} from "@tanstack/react-query";
import {ErrorBoundary} from "react-error-boundary";
import {Suspense} from "react";
import { getPublishedCatalogProducts } from "@/src/app/_data/catalog-products";

async function LandingPage() {
    const session = await getSession();

    if(session) redirect("/home");

    const queryClient = getQueryClient();
    const databaseProducts = await getPublishedCatalogProducts();

    return (
        <HydrationBoundary state={dehydrate(queryClient)}>
            <ErrorBoundary fallback={<div>There was an error</div>}>
                <Suspense fallback={<div>Loading...</div>}>
                    <LandingPageContents databaseProducts={databaseProducts} />
                </Suspense>
            </ErrorBoundary>
        </HydrationBoundary>
    );
}

export default LandingPage;
