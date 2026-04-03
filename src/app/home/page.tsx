import {SignOutButton} from "@/src/components/auth/signout-button";
import {getSession} from "@/src/lib/auth";
import {redirect} from "next/dist/client/components/redirect";

export async function HomePage() {
    const session = await getSession();

    if(!session) redirect("/login");

    return (
        <div className="flex flex-col min-h-screen items-center justify-center bg-muted/40 p-6">
            This is the home page.
            <SignOutButton />
        </div>
    );
}

export default HomePage;