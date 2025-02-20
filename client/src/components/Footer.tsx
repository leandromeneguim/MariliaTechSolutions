import { Link } from "wouter";

export default function Footer() {
  return (
    <footer className="bg-background border-t border-border py-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <Link href="/">
              <a className="text-2xl font-bold text-primary">Marília Tech</a>
            </Link>
            <p className="mt-2 text-muted-foreground">
              Soluções inteligentes em IA para sua empresa
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
              <a href="#contact" className="block text-muted-foreground hover:text-primary">
                Contato
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="font-semibold mb-4">Contato</h3>
            <div className="space-y-2 text-muted-foreground">
              <p>contato@mariliatech.com.br</p>
              <p>Marília, SP</p>
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
