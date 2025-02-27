import { Link } from "wouter";
import { ArrowRight } from "lucide-react";
import { Button } from "./ui/button";

export default function Footer() {
  return (
    <footer className="bg-background border-t border-border py-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <Link href="/">
              <a className="text-2xl font-bold text-primary">MARÍL<span className="text-red-600">IA</span> TECH</a>
            </Link>
            <p className="mt-2 text-muted-foreground">
              Soluções inteligentes em <span className="text-red-600">IA</span> para sua empresa
            </p>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Links Rápidos</h3>
            <div className="space-y-2">
              <a href="#services" className="block text-muted-foreground hover:text-primary">
                Serviços
              </a>
              <a href="#benefits" className="block text-muted-foreground hover:text-primary">
                Benefícios
              </a>
            </div>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Contato</h3>
            <div className="space-y-2 text-muted-foreground">
              <p>marilia.tech.ia@gmail.com</p>
              <div className="pt-3">
                <Button size="sm" asChild className="bg-green-600 hover:bg-green-700 w-full md:w-auto">
                  <a 
                    href="https://wa.me/5500000000000" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="gap-2"
                  >
                    Fale com nossos Agentes
                    <ArrowRight className="h-4 w-4" />
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-border text-center text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} Marília Tech. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
}