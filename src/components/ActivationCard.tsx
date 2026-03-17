import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import type { Project } from "@/data/projects";

const ActivationCard = ({ project }: { project: Project }) => {
  const navigate = useNavigate();

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.6, ease: [0.2, 0, 0, 1] }}
      whileHover={{ y: -8 }}
      className="group cursor-pointer"
      onClick={() => navigate(`/project/${project.id}`)}
    >
      <div className="aspect-[16/9] overflow-hidden mb-6 relative">
        <img
          src={project.image}
          alt={project.title}
          className="object-cover w-full h-full transition-transform duration-700 group-hover:scale-105"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-r from-background/60 via-transparent to-background/60" />
        <div className="absolute inset-0 bg-background/10 group-hover:bg-background/25 transition-colors duration-500" />
      </div>
      <div>
        <span className="label-text mb-2 block">{project.brand}</span>
        <h3 className="text-2xl text-foreground">{project.title}</h3>
        <p className="text-muted-foreground mt-2 text-lg">{project.description}</p>
      </div>
    </motion.div>
  );
};

export default ActivationCard;
