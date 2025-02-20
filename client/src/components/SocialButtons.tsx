import { motion } from "framer-motion";
import { Button } from "./ui/button";
import { Facebook, Instagram, Linkedin } from "lucide-react";

export default function SocialButtons() {
  return (
    <motion.div
      initial={{ opacity: 0, x: 100 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5 }}
      className="fixed right-4 top-1/2 -translate-y-1/2 z-50 flex flex-col gap-2"
    >
      <Button variant="outline" size="icon" asChild>
        <a
          href="https://facebook.com"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-background/80 backdrop-blur-sm"
        >
          <Facebook className="h-5 w-5" />
        </a>
      </Button>
      <Button variant="outline" size="icon" asChild>
        <a
          href="https://instagram.com"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-background/80 backdrop-blur-sm"
        >
          <Instagram className="h-5 w-5" />
        </a>
      </Button>
      <Button variant="outline" size="icon" asChild>
        <a
          href="https://linkedin.com"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-background/80 backdrop-blur-sm"
        >
          <Linkedin className="h-5 w-5" />
        </a>
      </Button>
    </motion.div>
  );
}
