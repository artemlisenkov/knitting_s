import { Button } from "@/src/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/src/components/ui/card";
import { Input } from "@/src/components/ui/input";
import { Label } from "@/src/components/ui/label";
import { Separator } from "@/src/components/ui/separator";
import { FcGoogle } from "react-icons/fc";

export function LoginPage() {
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
          <form className="space-y-3" id="signup-form" data-testid="signup-form">
            <Button variant="outline" className="w-full gap-1" type="button" data-testid="google-signup">
              <FcGoogle className="h-4 w-4" aria-hidden="true" />
              Google
            </Button>
            <div className="flex items-center gap-3" data-testid="signup-separator">
              <Separator className="flex-1" />
              <span className="text-xs text-muted-foreground">OR CONTINUE WITH</span>
              <Separator className="flex-1" />
            </div>
            <div className="space-y-2" data-testid="email-field">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                type="email"
                placeholder="you@example.com"
                autoComplete="email"
                data-testid="email-input"
              />
            </div>
            <div className="space-y-2" data-testid="password-field">
              <Label htmlFor="password">Password</Label>
              <Input id="password" type="password" autoComplete="current-password" data-testid="password-input" />
            </div>
          </form>
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
