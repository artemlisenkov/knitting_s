import type { Metadata } from "next";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/src/components/ui/card";
import {LoginButtons} from "@/src/components/auth/login-buttons";
import {getSession} from "@/src/lib/auth";
import {redirect} from "next/navigation";

export const metadata: Metadata = {
  title: "Crochet | Login",
};

async function LoginPage() {
  const session = await getSession();

  if(session) redirect("/home");

  return (
    <main className="flex min-h-screen items-center justify-center bg-[#f8eef0] p-6 text-[#2f2a2a]">
      <Card className="w-full max-w-sm gap-5 rounded-md border-[#ead0d4] bg-white/65 py-7 shadow-[12px_12px_0_rgba(176,91,102,0.14)] ring-[#ead0d4]">
        <CardHeader className="text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#b05b66]">
            Crochet Makes
          </p>
          <CardTitle className="text-2xl text-[#2c2426]">
            Admin sign in
          </CardTitle>
          <CardDescription className="text-[#6a5b5f]">
            Private access for managing handmade clothing and photos.
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-3 pt-0">
          <LoginButtons />
        </CardContent>
      </Card>
    </main>
  );
}

export default LoginPage;
