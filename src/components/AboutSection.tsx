import { motion } from "framer-motion";
import portrait from "@/assets/portrait.jpg";

const AboutSection = () => (
  <section id="about" className="py-32 px-8 md:px-16 grid grid-cols-1 md:grid-cols-2 gap-24 items-center border-t border-border">
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
      className="aspect-[4/5] bg-muted overflow-hidden relative flex items-center justify-center"
    >
      {/* TODO: Replace portrait.jpg with professional headshot — INSERT HEADSHOT HERE */}
      <img
        src={portrait}
        alt="Professional headshot"
        className="grayscale contrast-125 object-cover w-full h-full"
      />
    </motion.div>
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, delay: 0.1 }}
    >
      <h2 className="label-text mb-8">About</h2>
      <p className="text-3xl text-foreground leading-tight mb-8">
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
