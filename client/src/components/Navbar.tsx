import { Link } from "wouter"
import { Button } from "@/components/ui/button"
import { ThemeToggle } from "@/components/ThemeToggle"
import { Logo } from "@/components/Logo"

export default function Navbar() {
  return (
    <nav className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-24 items-center justify-between px-4">
        <div className="md:block">
          <Logo />
        </div>

        <h1 className="text-2xl md:text-4xl font-bold md:absolute md:left-1/2 md:-translate-x-1/2 hidden md:block">
          MARÍL<span className="text-red-600">IA</span> TECH
        </h1>

        {/* Versão mobile do título */}
        <h1 className="text-xl font-bold md:hidden">
          MARÍL<span className="text-red-600">IA</span> TECH
        </h1>

        <div className="flex items-center gap-2 md:gap-4">
          <ThemeToggle />
          <Button variant="outline" size="sm" className="font-semibold text-sm md:text-base" asChild>
            <Link href="/login">Login</Link>
          </Button>
        </div>
      </div>
    </nav>
  );
}