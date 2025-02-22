import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Button } from "./ui/button";

export default function Hero() {
  return (
    <section className="pt-32 pb-16 px-4">
      <div className="container mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center"
        >
          <h1 className="text-4xl md:text-6xl font-bold mb-10 bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary/60">
            Soluções Inteligentes em IA
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto">
            Transforme sua empresa com soluções tecnológicas baseadas em
            Inteligência Artificial
          </p>
          <Button size="lg" asChild>
            <a href="#contact" className="gap-2">
              Comece Agora
              <ArrowRight className="h-5 w-5" />
            </a>
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
