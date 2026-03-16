import { useParams, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { projects } from "@/data/projects";
import { ArrowLeft } from "lucide-react";

const ProjectDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const project = projects.find((p) => p.id === id);

  if (!project) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center text-foreground">
        Project not found.
      </div>
    );
  }

  return (
    <main className="bg-background min-h-screen">
      {/* Header image */}
      <div className="relative h-[60vh] w-full overflow-hidden">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent" />
        <button
          onClick={() => navigate("/")}
          className="absolute top-8 left-8 z-10 flex items-center gap-3 text-primary uppercase tracking-widest text-sm cursor-pointer hover:gap-4 transition-all"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Back</span>
        </button>
      </div>

      {/* Content */}
      <div className="px-8 md:px-16 py-16 max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.2, 0, 0, 1] }}
        >
          <span className="label-text mb-4 block">{project.brand}</span>
          <h1 className="text-5xl md:text-7xl font-semibold text-foreground tracking-tighter mb-4">
            {project.title}
          </h1>
          <p className="text-xl text-muted-foreground mb-16 max-w-2xl">
            {project.description}
          </p>
        </motion.div>

        {/* Sections */}
        <div className="space-y-16">
          {[
            { label: "Context", content: project.context },
            { label: "My Role", content: project.role },
            { label: "Impact", content: project.impact },
          ].map((section) => (
            <motion.div
              key={section.label}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="border-t border-border pt-8"
            >
              <h2 className="label-text mb-6">{section.label}</h2>
              <p className="text-lg text-foreground/80 leading-relaxed max-w-3xl">
                {section.content}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Gallery */}
        <div className="mt-24">
          <h2 className="label-text mb-8">Gallery</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {project.gallery.map((img, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="aspect-[16/9] overflow-hidden bg-muted"
              >
                <img
                  src={img}
                  alt={`${project.title} gallery ${i + 1}`}
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Back to work */}
      <div className="px-8 md:px-16 py-16 border-t border-border">
        <button
          onClick={() => navigate("/")}
          className="group flex items-center gap-4 text-primary font-medium tracking-widest uppercase text-sm cursor-pointer"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>All Projects</span>
          <div className="h-px w-12 bg-primary transition-all duration-500 group-hover:w-20" />
        </button>
      </div>
    </main>
  );
};

export default ProjectDetail;
