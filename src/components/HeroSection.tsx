import { motion } from "framer-motion";
import HeroGeometricBackground from "./HeroGeometricBackground";

const HeroSection = () => {
  const scrollToWork = () => {
    document.getElementById("work")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative h-svh w-full flex flex-col justify-end p-8 md:p-16 overflow-hidden bg-background">
      <HeroGeometricBackground />

      <div className="relative z-10 max-w-5xl">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.2, 0, 0, 1] }}
          className="text-[clamp(2.5rem,6vw,5.5rem)] leading-[0.9] font-semibold tracking-tighter text-foreground mb-8 whitespace-nowrap"
        >
          Maya Cohen
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.15, ease: [0.2, 0, 0, 1] }}
          className="text-xl md:text-2xl text-muted-foreground max-w-2xl mb-12"
        >
          Product Marketer. Brand Architect. I build the moments people remember.
        </motion.p>
        <motion.button
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          onClick={scrollToWork}
          className="group flex items-center gap-4 text-primary font-medium tracking-widest uppercase text-sm cursor-pointer"
        >
          <span>See My Work</span>
          <div className="h-px w-12 bg-primary transition-all duration-500 group-hover:w-20" />
        </motion.button>
      </div>
    </section>
  );
};

export default HeroSection;
