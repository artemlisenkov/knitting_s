import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/src/components/ui/card";
import {LoginButtons} from "@/src/components/auth/login-buttons";
import {getSession} from "@/src/lib/auth";
import {redirect} from "next/dist/client/components/redirect";

export async function LoginPage() {
  const session = await getSession();

  if(session) redirect("/home");

  return (
    <div className="flex min-h-screen items-center justify-center bg-muted/40 p-6">
      <Card className="w-full max-w-sm gap-4" data-testid="signup-card">
        <CardHeader className="text-center">
          <CardTitle className="text-2xl" data-testid="signup-title">
            Sign In
          </CardTitle>
          <CardDescription data-testid="signup-description">
            First sign in will create an account
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-3 pt-0">
          <LoginButtons />
        </CardContent>
      </Card>
    </div>
  );
}

export default LoginPage;
