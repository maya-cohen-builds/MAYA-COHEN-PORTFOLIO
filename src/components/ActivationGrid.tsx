import { useState } from "react";
import { projects, filterTags } from "@/data/projects";
import ActivationCard from "./ActivationCard";

const ActivationGrid = () => {
  const [activeTag, setActiveTag] = useState<string>("All");

  const filtered = activeTag === "All"
    ? projects
    : projects.filter((p) => p.tag === activeTag);

  return (
    <section id="work" className="py-24 px-8 md:px-16 bg-background">
      <div className="flex flex-wrap gap-8 mb-16 border-b border-border pb-4">
        {filterTags.map((tag) => (
          <button
            key={tag}
            onClick={() => setActiveTag(tag)}
            className={`text-xs uppercase tracking-[0.2em] transition-colors cursor-pointer ${
              activeTag === tag
                ? "text-primary border-b-2 border-primary pb-1"
                : "text-muted-foreground hover:text-foreground"
            }`}
          >
            {tag}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        {filtered.map((project) => (
          <ActivationCard key={project.id} project={project} />
        ))}
      </div>
    </section>
  );
};

export default ActivationGrid;
