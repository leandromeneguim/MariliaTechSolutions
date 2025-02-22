import { useState } from "react";
import { Link } from "wouter";
import { Menu } from "lucide-react";
import { Button } from "./ui/button";
import { Sheet, SheetContent, SheetTrigger } from "./ui/sheet";
import { ThemeToggle } from "./ThemeToggle";

const navLinks = [
  { href: "#services", label: "Serviços" },
  { href: "#benefits", label: "Benefícios" },
  { href: "#contact", label: "Contato" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 w-full z-50 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-b border-border">
      <div className="container mx-auto px-4 h-24 flex items-center justify-between">
        <Link href="/">
          <a className="flex items-center gap-2">
            <img 
              src="/images/LOGOMARILIA-BRANCA.png" 
              alt="Marília Tech Logo" 
              className="h-24 w-auto hidden dark:block"
            />
            <img 
              src="/images/LOGOMARILIA-PRETA.png" 
              alt="Marília Tech Logo" 
              className="h-24 w-auto block dark:hidden"
            />
          </a>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-6">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              {link.label}
            </a>
          ))}
          <ThemeToggle />
        </div>

        {/* Mobile Navigation */}
        <Sheet open={isOpen} onOpenChange={setIsOpen}>
          <SheetTrigger asChild className="md:hidden">
            <Button variant="ghost" size="icon">
              <Menu className="h-6 w-6" />
            </Button>
          </SheetTrigger>
          <SheetContent>
            <div className="flex flex-col gap-4 mt-8">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="text-lg font-medium"
                  onClick={() => setIsOpen(false)}
                >
                  {link.label}
                </a>
              ))}
              <div className="pt-4">
                <ThemeToggle />
              </div>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </nav>
  );
}