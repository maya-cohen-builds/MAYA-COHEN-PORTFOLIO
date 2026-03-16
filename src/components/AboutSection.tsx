import { motion } from "framer-motion";
import headshot from "@/assets/headshot.png";

const AboutSection = () => (
  <section id="about" className="py-32 px-8 md:px-16 grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-20 items-center border-t border-border">
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
      className="flex items-center justify-center"
    >
      {/* TODO: Replace headshot.png with your real professional headshot */}
      <img
        src={headshot}
        alt="Maya Cohen professional headshot"
        className="rounded-full object-cover w-64 h-64 md:w-80 md:h-80 grayscale contrast-125"
      />
    </motion.div>
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, delay: 0.1 }}
    >
      <h2 className="label-text mb-8">About</h2>
      <p className="text-lg text-foreground leading-relaxed mb-8">
        I build the brand moments that make technical products feel human and cultural moments feel strategic. From launching a cloud-native pipeline at DreamWorks to managing Emmy campaign press for HBO Barry to architecting the GTM motion behind a NYT bestselling memoir, my work lives at the intersection of enterprise technology and the kind of storytelling that actually moves people. USC Marshall MBA. Based in Los Angeles. Always in the room where it happens.
      </p>
      <div className="divider mb-8" />
      <div className="grid grid-cols-2 gap-8 text-xs uppercase tracking-widest text-muted-foreground">
        <div>Strategy / Production / Brand</div>
        <div>Enterprise Tech / Talent / GTM</div>
      </div>
    </motion.div>
  </section>
);

export default AboutSection;
