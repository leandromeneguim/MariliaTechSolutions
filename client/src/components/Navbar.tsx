
import { Link } from "wouter"
import { Button } from "@/components/ui/button"
import { ThemeToggle } from "@/components/ThemeToggle"
import { Logo } from "@/components/Logo"

export default function Navbar() {
  return (
    <nav className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-24 items-center">
        <div className="flex items-center gap-6">
          <Logo />
          <h1 className="text-2xl font-bold">
            MARÍLIA TECH
          </h1>
        </div>

        <div className="flex items-center space-x-4">
          <ThemeToggle />
          <Button variant="outline" size="sm" className="font-semibold" asChild>
            <Link href="/login">Login</Link>
          </Button>
        </div>
      </div>
    </nav>
  );
}
