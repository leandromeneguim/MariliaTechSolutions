import { motion } from "framer-motion";
import { Sparkles, Clock, TrendingUp, Shield } from "lucide-react";

const benefits = [
  {
    title: "Eficiência Aprimorada",
    description: "Reduza tempo e custos com processos automatizados",
    icon: Clock,
  },
  {
    title: "Decisões Inteligentes",
    description: "Insights baseados em dados para melhores resultados",
    icon: Sparkles,
  },
  {
    title: "Crescimento Escalável",
    description: "Soluções que crescem com seu negócio",
    icon: TrendingUp,
  },
  {
    title: "Segurança Avançada",
    description: "Proteção de dados e conformidade garantida",
    icon: Shield,
  },
];

export default function Benefits() {
  return (
    <section id="benefits" className="py-16 px-4">
      <div className="container mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold mb-4">Benefícios da IA</h2>
          <p className="text-muted-foreground">
            Descubra como a Inteligência Artificial pode transformar seu negócio
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {benefits.map((benefit, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="text-center"
            >
              <div className="mb-4 inline-flex p-3 rounded-full bg-primary/10">
                <benefit.icon className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2">{benefit.title}</h3>
              <p className="text-muted-foreground">{benefit.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
