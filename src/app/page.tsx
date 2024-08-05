import { Button } from "@/components/ui/button";
import {
  LoginLink,
  LogoutLink,
  RegisterLink,
} from "@kinde-oss/kinde-auth-nextjs/components";

export default function Home() {
  return (
    <div>
      <main className="flex min-h-screen flex-col items-center justify-center">
        <Button asChild>
          <LoginLink>Sign in</LoginLink>
        </Button>
        <span className="h-6 w-px bg-gray-200"></span>
        <Button asChild>
          <RegisterLink>Create Account</RegisterLink>
        </Button>
        <span className="h-6 w-px bg-gray-200"></span>
        <Button asChild>
          <LogoutLink>Logout</LogoutLink>
        </Button>
      </main>
    </div>
  );
}
