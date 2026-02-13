import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import {
  GraduationCap,
  Music,
  Radio,
  Scissors,
  Home,
  Target,
  Code,
  ChevronRight,
} from "lucide-react";

const expertise = [
  {
    icon: GraduationCap,
    title: "Education & Adult Learning",
    description: "Curriculum design, facilitation, and transformative learning experiences for diverse adult audiences.",
    skills: ["Instructional Design", "Facilitation", "E-Learning", "Curriculum Development"],
    color: "38 65% 55%",
  },
  {
    icon: Music,
    title: "Music & Performance",
    description: "Multi-instrumentalist and performer bringing creativity and discipline to every stage.",
    skills: ["Performance", "Production", "Composition", "Sound Design"],
    color: "38 65% 55%",
  },
  {
    icon: Radio,
    title: "Amateur (Ham) Radio",
    description: "Licensed operator connecting communities through analog and digital radio communications.",
    skills: ["HF/VHF/UHF", "Digital Modes", "Emergency Comms", "Antenna Design"],
    color: "38 65% 55%",
  },
  {
    icon: Scissors,
    title: "Leather Craft",
    description: "Handcrafted leather goods blending traditional artisan techniques with modern design sensibilities.",
    skills: ["Hand Stitching", "Tooling", "Pattern Making", "Custom Orders"],
    color: "38 65% 55%",
  },
  {
    icon: Home,
    title: "Real Estate",
    description: "Strategic property investment and development with an eye for value and community impact.",
    skills: ["Investment", "Property Analysis", "Development", "Market Strategy"],
    color: "38 65% 55%",
  },
  {
    icon: Target,
    title: "Competitive Shooting (IPSC)",
    description: "Precision, discipline, and performance under pressure — coming soon.",
    skills: ["Precision", "Discipline", "Competition"],
    color: "38 65% 55%",
    placeholder: true,
  },
  {
    icon: Code,
    title: "Technology & Development",
    description: "Full-stack development, system architecture, and leveraging technology for creative solutions.",
    skills: ["Web Development", "System Architecture", "AI/ML", "DevOps"],
    color: "38 65% 55%",
  },
];

const ExpertiseSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

  return (
    <section id="expertise" className="section-padding relative" ref={ref}>
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <p className="text-primary text-sm tracking-[0.3em] uppercase mb-4 font-sans">What I Do</p>
          <h2 className="font-serif text-4xl md:text-5xl font-bold mb-6">Areas of Expertise</h2>
          <p className="text-muted-foreground max-w-xl mx-auto text-lg">
            Seven interconnected disciplines, one cohesive vision.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {expertise.map((item, index) => {
            const Icon = item.icon;
            const isExpanded = expandedIndex === index;
            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                onClick={() => setExpandedIndex(isExpanded ? null : index)}
                className={`glass-card p-8 cursor-pointer hover-lift group relative overflow-hidden ${
                  item.placeholder ? "opacity-60" : ""
                }`}
              >
                {/* Glow accent */}
                <div className="absolute top-0 right-0 w-32 h-32 rounded-full bg-primary/5 -translate-y-1/2 translate-x-1/2 group-hover:bg-primary/10 transition-colors duration-700" />

                <div className="relative z-10">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-5 group-hover:bg-primary/20 transition-colors duration-500">
                    <Icon size={22} className="text-primary" />
                  </div>

                  <h3 className="font-serif text-xl font-bold mb-3 group-hover:text-primary transition-colors duration-300">
                    {item.title}
                  </h3>

                  <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                    {item.description}
                  </p>

                  {/* Skills */}
                  <motion.div
                    initial={false}
                    animate={{ height: isExpanded ? "auto" : 0, opacity: isExpanded ? 1 : 0 }}
                    className="overflow-hidden"
                  >
                    <div className="flex flex-wrap gap-2 pt-4 border-t border-border/50">
                      {item.skills.map((skill) => (
                        <span
                          key={skill}
                          className="px-3 py-1 text-xs font-sans font-medium tracking-wide bg-primary/10 text-primary rounded-full"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </motion.div>

                  <div className="flex items-center gap-1 mt-4 text-primary text-sm font-sans">
                    <span>{isExpanded ? "Less" : "Explore"}</span>
                    <ChevronRight
                      size={14}
                      className={`transition-transform duration-300 ${isExpanded ? "rotate-90" : ""}`}
                    />
                  </div>
                </div>

                {item.placeholder && (
                  <div className="absolute top-4 right-4 px-2 py-0.5 text-[10px] font-sans uppercase tracking-widest bg-primary/10 text-primary rounded-full">
                    Coming Soon
                  </div>
                )}
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ExpertiseSection;
