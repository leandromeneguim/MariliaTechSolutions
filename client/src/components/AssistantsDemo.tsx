import { motion } from "framer-motion";
import { Card } from "./ui/card";
import { Button } from "./ui/button";
import { SiWhatsapp } from "react-icons/si";

export default function AssistantsDemo() {
  return (
    <section id="contact" className="py-16 px-4 bg-muted/50">
      <div className="container mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold mb-4">Diversos tipos de assistentes e automações</h2>
          <p className="text-muted-foreground">
            Experimente o poder da IA em tempo real
          </p>
        </motion.div>

        {/* Área de Imagens */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          <Card className="aspect-video bg-muted overflow-hidden">
            <img 
              src="/image_1740242489565.png" 
              alt="Chatbot Interface"
              className="w-full h-full object-cover"
            />
          </Card>
          <Card className="aspect-video bg-muted overflow-hidden">
            <img 
              src="/image_1740243046512.png" 
              alt="WhatsApp Chatbot"
              className="w-full h-full object-cover"
            />
          </Card>
        </div>

        {/* Seção Marília Assistant */}
        <div className="mt-16 text-center">
          <h3 className="text-2xl font-bold mb-6">Fale com Nossa Assistente Marília</h3>
          <div className="flex flex-col md:flex-row gap-8 justify-center items-center">
            <Button size="lg" variant="default" className="w-full md:w-auto">
              Iniciar Chat com Marília
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="w-full md:w-auto gap-2 hover:bg-[#25d366] hover:text-white"
              asChild
            >
              <a
                href="https://wa.me/seunumero"
                target="_blank"
                rel="noopener noreferrer"
              >
                <SiWhatsapp className="h-5 w-5" />
                Falar via WhatsApp
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
