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
      <div className={`overflow-hidden mb-6 relative ${project.id === "pipex-virtual-launch" ? "aspect-[16/9] bg-muted" : ""}`}>
        <img
          src={project.image}
          alt={project.title}
          className={`w-full transition-transform duration-700 group-hover:scale-105 ${
            project.id === "pipex-virtual-launch"
              ? "object-cover h-full"
              : "object-cover h-full aspect-[16/9]"
          }`}
          loading="lazy"
        />
        {project.id === "pipex-virtual-launch" ? (
          <div className="absolute inset-0 bg-background/20 group-hover:bg-background/40 transition-colors duration-500" />
        ) : (
          <>
            {/* Top-to-bottom gradient */}
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background/60 to-background" />
            {/* Left edge fade */}
            <div className="absolute inset-0 bg-gradient-to-r from-background via-transparent to-transparent w-1/3" />
            {/* Right edge fade */}
            <div className="absolute inset-0 bg-gradient-to-l from-background via-transparent to-transparent left-2/3" />
          </>
        )}
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
