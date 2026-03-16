import { motion } from "framer-motion";

const ContactSection = () => (
  <footer className="py-32 px-8 md:px-16 text-center border-t border-border">
    <motion.h2
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
      className="text-5xl md:text-7xl font-semibold text-foreground mb-12 tracking-tighter"
    >
      Let's build.
    </motion.h2>
    <div className="flex justify-center gap-12">
      <a
        href="mailto:hello@example.com"
        className="text-primary uppercase tracking-widest text-sm hover:line-through transition-all"
      >
        Email
      </a>
      <a
        href="#"
        className="text-primary uppercase tracking-widest text-sm hover:line-through transition-all"
      >
        LinkedIn
      </a>
    </div>
  </footer>
);

export default ContactSection;
