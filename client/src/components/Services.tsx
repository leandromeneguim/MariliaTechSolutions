import { motion } from "framer-motion";
import { Bot, Cog, Database, Globe, LineChart, Terminal } from "lucide-react";
import { Card, CardHeader, CardTitle, CardContent } from "./ui/card";

const services = [
  {
    title: "Assistentes de IA e Chatbots",
    description: "Automatize o atendimento com assistentes inteligentes 24/7",
    icon: Bot,
  },
  {
    title: "Agentes Autônomos de IA",
    description: "Sistemas inteligentes que executam tarefas complexas automaticamente",
    icon: Cog,
  },
  {
    title: "Automatização de Tarefas",
    description: "Otimize processos e reduza custos operacionais",
    icon: Terminal,
  },
  {
    title: "Análise de Dados",
    description: "Insights valiosos através de análise avançada de dados",
    icon: LineChart,
  },
  {
    title: "Criação de Sites",
    description: "Websites modernos e responsivos com tecnologias avançadas",
    icon: Globe,
  },
  {
    title: "Desenvolvimento de Softwares",
    description: "Soluções personalizadas para sua empresa",
    icon: Database,
  },
];

export default function Services() {
  return (
    <section id="services" className="py-16 px-4 bg-muted/50">
      <div className="container mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold mb-4">Nossos Serviços</h2>
          <p className="text-muted-foreground">
            Soluções tecnológicas para impulsionar seu negócio
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <Card className="h-full">
                <CardHeader>
                  <service.icon className="h-8 w-8 text-primary mb-2" />
                  <CardTitle>{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{service.description}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
