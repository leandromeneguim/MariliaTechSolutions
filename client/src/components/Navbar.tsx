import { Link } from "wouter"
import { Button } from "@/components/ui/button"
import { ThemeToggle } from "@/components/ThemeToggle"
import { Logo } from "@/components/Logo"

export default function Navbar() {
  return (
    <nav className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-24 items-center justify-between px-4">
        <div>
          <Logo />
        </div>

        <h1 className="text-4xl font-bold absolute left-1/2 -translate-x-1/2">
          MAR<span className="text-red-600">Í</span>L<span className="text-red-600">IA</span> TECH
        </h1>

        <div className="flex items-center gap-4">
          <ThemeToggle />
          <Button variant="outline" size="sm" className="font-semibold" asChild>
            <Link href="/login">Login</Link>
          </Button>
        </div>
      </div>
    </nav>
  );
}