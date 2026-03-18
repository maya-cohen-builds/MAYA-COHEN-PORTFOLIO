import { motion } from "framer-motion";
import headshot from "@/assets/headshot.png";

const AboutSection = () =>
<section id="about" className="py-32 px-8 md:px-16 grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-20 items-center border-t border-border">
    <motion.div
    initial={{ opacity: 0 }}
    whileInView={{ opacity: 1 }}
    viewport={{ once: true }}
    transition={{ duration: 0.8 }}
    className="flex items-center justify-center">
    
      <div className="relative w-64 h-64 md:w-80 md:h-80">
        {/* Subtle radial gradient backdrop for studio depth */}
        <div
        className="absolute inset-0 rounded-full"
        style={{
          background: 'radial-gradient(circle, hsl(0 0% 16%) 0%, transparent 70%)'
        }} />
      
        {/* Headshot with lighting overlay */}
        <div className="relative w-full h-full rounded-full overflow-hidden">
          <img
          src={headshot}
          alt="Maya Cohen professional headshot"
          className="w-full h-full object-cover grayscale contrast-125 scale-150" />
        
          {/* Key light from upper left */}
          <div
          className="absolute inset-0 rounded-full pointer-events-none"
          style={{
            background: 'linear-gradient(135deg, rgba(255,255,255,0.08) 0%, transparent 50%, rgba(0,0,0,0.15) 100%)'
          }} />
        
        </div>
      </div>
    </motion.div>
    <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.8, delay: 0.1 }}>
    
      <h2 className="label-text mb-8">About</h2>
      <p className="text-lg text-foreground leading-relaxed mb-8">Growing up in a family of engineers, I actually broke into Hollywood then naturally gravitated to the technology behind the scenes. From launching a cloud-native pipeline at DreamWorks to managing Emmy campaign press for HBO Barry to architecting the GTM motion behind a NYT bestselling memoir, my work lives at the intersection of product launch and rich, memorable storytelling. USC Marshall MBA. Based in Los Angeles. Building the room where it happens.

    </p>
      <div className="divider mb-8" />
      <div className="text-xs uppercase tracking-widest text-muted-foreground font-normal space-y-2">
        <div className="text-base">PRODUCT MARKETING / BRAND ACTIVATIONS / LIVE PRODUCT EXPERIENCES / PARTNERSHIPS</div>
      </div>
    </motion.div>
  </section>;

export default AboutSection;