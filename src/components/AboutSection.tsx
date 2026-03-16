import { motion } from "framer-motion";
import portrait from "@/assets/portrait.jpg";

const AboutSection = () => (
  <section className="py-32 px-8 md:px-16 grid grid-cols-1 md:grid-cols-2 gap-24 items-center border-t border-border">
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
      className="aspect-[4/5] bg-muted overflow-hidden"
    >
      <img
        src={portrait}
        alt="Portrait"
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
        I build physical worlds for digital-first brands. My work sits at the
        intersection of cultural relevance and operational precision.
      </p>
      <div className="divider mb-8" />
      <div className="grid grid-cols-2 gap-8 text-xs uppercase tracking-widest text-muted-foreground">
        <div>Strategy / Production / Spatial Design</div>
        <div>Global Logistics / Talent / ROI Tracking</div>
      </div>
    </motion.div>
  </section>
);

export default AboutSection;
