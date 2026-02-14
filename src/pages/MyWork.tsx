import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { ExternalLink } from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const projects = [
  {
    title: "Startup Platform",
    description: "Full-stack web application built with React, Node.js, MongoDB",
    technologies: ["React", "Node.js", "MongoDB"],
    url: "#", // Placeholder - user will add real URLs later
  },
  {
    title: "Enterprise Portal",
    description: "Angular, Java Spring Boot, MySQL enterprise solution",
    technologies: ["Angular", "Java Spring Boot", "MySQL"],
    url: "#", // Placeholder - user will add real URLs later
  },
  {
    title: "Tender Automation",
    description: "Data scraping and automation tool",
    technologies: ["Python", "Automation", "Data Scraping"],
    url: "#", // Placeholder - user will add real URLs later
  },
  {
    title: "Performance Website",
    description: "WordPress site optimized for speed (20% improvement)",
    technologies: ["WordPress", "Performance", "Optimization"],
    url: "#", // Placeholder - user will add real URLs later
  },
  {
    title: "Admin Dashboard",
    description: "Custom reporting and analytics platform",
    technologies: ["React", "Analytics", "Dashboard"],
    url: "#", // Placeholder - user will add real URLs later
  },
];

const MyWork = () => {
  const heroRef = useRef(null);
  const projectsRef = useRef(null);
  const isHeroInView = useInView(heroRef, { once: true, margin: "-50px" });
  const isProjectsInView = useInView(projectsRef, { once: true, margin: "-50px" });

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navigation />

      {/* Hero Section */}
      <section className="section-padding pt-32 md:pt-40" ref={heroRef}>
        <div className="max-w-7xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={isHeroInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <p className="text-primary text-sm tracking-[0.3em] uppercase mb-4 font-sans">
              Portfolio
            </p>
            <h1 className="font-serif text-4xl md:text-6xl lg:text-7xl font-bold mb-6">
              My Work
            </h1>
            <p className="text-muted-foreground text-lg md:text-xl max-w-3xl mx-auto leading-relaxed">
              A showcase of projects spanning full-stack development, enterprise solutions, and automation.
              Each project represents a commitment to quality, performance, and user experience.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="section-padding" ref={projectsRef}>
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project, index) => (
              <motion.a
                key={project.title}
                href={project.url}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 30 }}
                animate={isProjectsInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="glass-card p-6 cursor-pointer hover-lift group relative overflow-hidden block"
              >
                {/* Glow accent */}
                <div className="absolute top-0 right-0 w-32 h-32 rounded-full bg-primary/5 -translate-y-1/2 translate-x-1/2 group-hover:bg-primary/10 transition-colors duration-700" />

                <div className="relative z-10">
                  {/* Project Title */}
                  <div className="flex items-start justify-between mb-3">
                    <h3 className="font-serif text-xl font-bold group-hover:text-primary transition-colors duration-300">
                      {project.title}
                    </h3>
                    <ExternalLink 
                      size={18} 
                      className="text-muted-foreground group-hover:text-primary transition-colors duration-300 shrink-0 ml-2" 
                    />
                  </div>

                  {/* Description */}
                  <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                    {project.description}
                  </p>

                  {/* Technology Tags */}
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 text-xs font-sans font-medium tracking-wide bg-primary/10 text-primary rounded-full"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.a>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default MyWork;
