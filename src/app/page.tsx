import {getSession} from "@/src/lib/auth";
import {redirect} from "next/dist/client/components/redirect";
import { LandingPageContents } from "@/src/app/_ui/landing-page-contents";
import {getQueryClient} from "@/src/trpc/server";
import {dehydrate, HydrationBoundary} from "@tanstack/react-query";
import {ErrorBoundary} from "react-error-boundary";
import {Suspense} from "react";

export async function LandingPage() {
    const session = await getSession();

    if(session) redirect("/home");

    const queryClient = getQueryClient();

    return (
        <HydrationBoundary state={dehydrate(queryClient)}>
            <ErrorBoundary fallback={<div>There was an error</div>}>
                <Suspense fallback={<div>Loading...</div>}>
                    <LandingPageContents/>
                </Suspense>
            </ErrorBoundary>
        </HydrationBoundary>
    );
}

export default LandingPage;