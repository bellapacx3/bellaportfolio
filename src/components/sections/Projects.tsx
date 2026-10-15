
import { projects } from "@/lib/data";
import ProjectCard from "@/components/ui/ProjectCard";
import SectionHeading from "@/components/ui/SectionHeading";

export default function Projects() {
  return (
    <section id="projects" className="section-padding section-divider">
      <div className="container-width">
        <SectionHeading
          eyebrow="Selected work"
          title={
            <>
              Digital products built with{" "}
              <span className="accent-text">purpose.</span>
            </>
          }
          description="Explore sample concepts showing how I approach web platforms, business dashboards, and mobile applications."
        />

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <ProjectCard key={project.number} project={project} />
          ))}
        </div>

       
      </div>
    </section>
  );
}
