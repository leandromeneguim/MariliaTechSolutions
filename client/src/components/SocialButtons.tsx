import { motion } from "framer-motion";
import { Button } from "./ui/button";
import { SiInstagram, SiLinkedin, SiWhatsapp } from "react-icons/si";

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
          href="https://instagram.com"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-background/80 backdrop-blur-sm hover:bg-gradient-to-br from-[#fa7e1e] via-[#d62976] to-[#962fbf]"
        >
          <SiInstagram className="h-5 w-5 text-[#d62976] group-hover:text-white" />
        </a>
      </Button>
      <Button variant="outline" size="icon" asChild>
        <a
          href="https://linkedin.com"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-background/80 backdrop-blur-sm hover:bg-[#0a66c2]"
        >
          <SiLinkedin className="h-5 w-5 text-[#0a66c2] group-hover:text-white" />
        </a>
      </Button>
      <Button variant="outline" size="icon" asChild>
        <a
          href="https://wa.me/seunumero"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-background/80 backdrop-blur-sm hover:bg-[#25d366]"
        >
          <SiWhatsapp className="h-5 w-5 text-[#25d366] group-hover:text-white" />
        </a>
      </Button>
    </motion.div>
  );
}