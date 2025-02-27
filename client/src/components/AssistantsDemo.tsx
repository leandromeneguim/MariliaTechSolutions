import { motion } from "framer-motion";
import { Card } from "./ui/card";
import { Button } from "./ui/button";
import { SiWhatsapp } from "react-icons/si";
import chatbot from "../assets/atendimento01.png";
import chatbot2 from "../assets/atendimento02.png";

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
          <h2 className="text-3xl font-bold mb-4">
            Diversos tipos de assistentes e automações
          </h2>
          <p className="text-muted-foreground">
            Experimente o poder da IA em tempo real
          </p>
        </motion.div>
        {/* Área de Imagens */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          <div className="flex justify-center">
            <Card className="bg-transparent shadow-none p-0 inline-flex w-auto">
              <img
                src={chatbot}
                alt="Chatbot Interface"
                className="h-112 w-auto"
              />
            </Card>
          </div>
          <div className="flex justify-center">
            <Card className="bg-transparent shadow-none p-0 inline-flex w-auto">
              <img
                src={chatbot2}
                alt="WhatsApp Chatbot"
                className="h-112 w-auto"
              />
            </Card>
          </div>
        </div>
        {/* Seção Marília Assistant */}
      </div>
    </section>
  );
}