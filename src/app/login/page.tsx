import { Button } from "@/src/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/src/components/ui/card";
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
            Create an account
          </CardTitle>
          <CardDescription data-testid="signup-description">
            Choose a sign up method to get started.
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-3 pt-0">
          <LoginButtons />
        </CardContent>
        <CardFooter>
          <Button className="w-full" type="submit" form="signup-form" data-testid="create-account">
            Create account
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
}

export default LoginPage;
