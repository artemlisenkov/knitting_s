import {getSession} from "@/src/lib/auth";
import {redirect} from "next/dist/client/components/redirect";
import {HomePageContents} from "@/src/app/home/_ui/home-page-contents";
import {getQueryClient} from "@/src/trpc/server";
import {dehydrate, HydrationBoundary} from "@tanstack/react-query";
import {ErrorBoundary} from "react-error-boundary";
import {Suspense} from "react";

export async function HomePage() {
    const session = await getSession();

    if(!session) redirect("/login");

    const queryClient = getQueryClient();

    return (
        <HydrationBoundary state={dehydrate(queryClient)}>
            <ErrorBoundary fallback={<div>There was an error</div>}>
                <Suspense fallback={<div>Loading...</div>}>
                    <HomePageContents/>
                </Suspense>
            </ErrorBoundary>
        </HydrationBoundary>
    );
}

export default HomePage;