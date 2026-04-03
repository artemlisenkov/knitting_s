import Link from "next/link";
import { Button } from "@/src/components/ui/button";
import {getSession} from "@/src/lib/auth";
import {redirect} from "next/dist/client/components/redirect";

export async function LandingPage() {
    const session = await getSession();

    if(session) redirect("/home");

  return (
      <div className="flex flex-col min-h-screen items-center justify-center bg-muted/40 p-6">
        This is the Landing page.
          <Link href="/login">
              <Button>
                  Login
              </Button>

          </Link>
      </div>
  )
}

export default LandingPage;