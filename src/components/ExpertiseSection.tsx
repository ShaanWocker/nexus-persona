import { motion, useInView, AnimatePresence } from "framer-motion";
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
  X,
  ExternalLink,
  Image as ImageIcon,
  Play,
} from "lucide-react";
import { Dialog, DialogContent } from "@/components/ui/dialog";

const expertise = [
  {
    icon: Code,
    title: "Technology & Development",
    description: "Full-stack development, system architecture, and leveraging technology for creative solutions.",
    skills: ["Web Development", "System Architecture", "AI/ML", "DevOps"],
    color: "38 65% 55%",
    details: {
      longDescription: "Technology is the thread that weaves all my disciplines together. I build robust, scalable systems that solve real problems — from full-stack web applications to AI-powered tools. My approach emphasizes clean architecture, user-centric design, and leveraging the latest innovations.",
      highlights: [
        "Full-stack web development with modern frameworks",
        "System architecture and cloud infrastructure",
        "AI/ML integration and automation",
        "DevOps practices and CI/CD pipelines",
      ],
      projects: [
        { name: "Portfolio Platform", desc: "This very website — a showcase of modern web development with React, Tailwind, and Framer Motion." },
        { name: "AI-Powered Tools", desc: "Custom tools leveraging machine learning for content generation and data analysis." },
      ],
    },
  },
  {
    icon: GraduationCap,
    title: "Education & Adult Learning",
    description: "Curriculum design, facilitation, and transformative learning experiences for diverse adult audiences.",
    skills: ["Instructional Design", "Facilitation", "E-Learning", "Curriculum Development"],
    color: "38 65% 55%",
    details: {
      longDescription: "With years of experience in adult education, I specialize in creating immersive learning environments that transform how professionals acquire and apply new knowledge. My approach combines evidence-based instructional design with cutting-edge technology to deliver memorable, impactful educational experiences.",
      highlights: [
        "Designed and delivered 50+ corporate training programs",
        "Developed e-learning platforms serving 5,000+ learners",
        "Specialized in experiential and competency-based learning",
        "Published research on adult learning methodologies",
      ],
      projects: [
        { name: "Digital Learning Platform", desc: "Built a comprehensive LMS for corporate training with adaptive learning paths." },
        { name: "Workshop Series: Future Skills", desc: "A 12-part workshop series preparing professionals for the digital economy." },
      ],
    },
  },
  {
    icon: Home,
    title: "Real Estate",
    description: "Strategic property investment and development with an eye for value and community impact.",
    skills: ["Investment", "Property Analysis", "Development", "Market Strategy"],
    color: "38 65% 55%",
    details: {
      longDescription: "My real estate practice focuses on identifying undervalued opportunities and developing properties that enhance communities. I combine analytical market research with creative vision to maximize both financial returns and positive community impact.",
      highlights: [
        "Portfolio development across residential and commercial",
        "Market analysis and investment strategy",
        "Property renovation and value-add development",
        "Community-focused development approach",
      ],
      projects: [
        { name: "Residential Portfolio", desc: "Strategic acquisition and renovation of residential properties for long-term value." },
        { name: "Community Development", desc: "Mixed-use development projects focused on neighborhood revitalization." },
      ],
    },
  },
  {
    icon: Music,
    title: "Music & Performance",
    description: "Multi-instrumentalist and performer bringing creativity and discipline to every stage.",
    skills: ["Performance", "Production", "Composition", "Sound Design"],
    color: "38 65% 55%",
    details: {
      longDescription: "Music has been a lifelong passion that extends into professional performance and production. I bring a deep understanding of both analog warmth and digital precision, performing across genres and collaborating with artists to bring creative visions to life.",
      highlights: [
        "Multi-instrumentalist: guitar, keys, bass, and percussion",
        "Home studio production with professional-grade output",
        "Live performance experience across multiple genres",
        "Sound design for multimedia and interactive projects",
      ],
      projects: [
        { name: "Studio Sessions", desc: "Original compositions blending electronic and acoustic elements." },
        { name: "Live Performance Reel", desc: "Curated collection of live performances and collaborations." },
      ],
    },
  },
  {
    icon: Radio,
    title: "Amateur (Ham) Radio",
    description: "Licensed operator connecting communities through analog and digital radio communications.",
    skills: ["HF/VHF/UHF", "Digital Modes", "Emergency Comms", "Antenna Design"],
    color: "38 65% 55%",
    details: {
      longDescription: "As a licensed amateur radio operator, I explore the fascinating intersection of electronics, communication, and community service. From building custom antennas to providing emergency communications support, ham radio is where technology meets real-world impact.",
      highlights: [
        "Licensed amateur radio operator with advanced privileges",
        "Active in emergency communications networks",
        "Custom antenna design and construction",
        "Digital mode operations including FT8, DMR, and D-STAR",
      ],
      projects: [
        { name: "Emergency Comms Network", desc: "Helped establish a regional emergency communication network for disaster preparedness." },
        { name: "Custom Antenna Builds", desc: "Designed and built several high-performance antennas for HF and VHF bands." },
      ],
    },
  },
  {
    icon: Scissors,
    title: "Leather Craft",
    description: "Handcrafted leather goods blending traditional artisan techniques with modern design sensibilities.",
    skills: ["Hand Stitching", "Tooling", "Pattern Making", "Custom Orders"],
    color: "38 65% 55%",
    details: {
      longDescription: "Leather craft represents my connection to traditional artisanship. Every piece is meticulously handcrafted, combining time-honored techniques with contemporary design. From wallets to bags, each creation tells a story of patience, precision, and pride.",
      highlights: [
        "Specializing in hand-stitched, full-grain leather goods",
        "Custom tooling and embossing designs",
        "Pattern development for unique, functional pieces",
        "Commissions and bespoke orders welcome",
      ],
      projects: [
        { name: "Heritage Collection", desc: "A line of everyday carry items featuring traditional saddle-stitch construction." },
        { name: "Custom Commissions", desc: "Bespoke leather goods tailored to individual client specifications." },
      ],
    },
  },
  {
    icon: Target,
    title: "Competitive Shooting (IPSC)",
    description: "Precision, discipline, and performance under pressure — coming soon.",
    skills: ["Precision", "Discipline", "Competition"],
    color: "38 65% 55%",
    placeholder: true,
    details: {
      longDescription: "Competitive shooting through IPSC (International Practical Shooting Confederation) represents the ultimate test of precision, speed, and composure. This section is coming soon as I begin my competitive journey.",
      highlights: [
        "Training in practical shooting disciplines",
        "Focus on safety, precision, and mental discipline",
        "Equipment setup and optimization",
      ],
      projects: [],
    },
  },
];

const ExpertiseSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  const selected = selectedIndex !== null ? expertise[selectedIndex] : null;

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
            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                onClick={() => setSelectedIndex(index)}
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

                  <div className="flex flex-wrap gap-2 mb-4">
                    {item.skills.slice(0, 3).map((skill) => (
                      <span
                        key={skill}
                        className="px-2 py-0.5 text-[10px] font-sans font-medium tracking-wide bg-primary/10 text-primary rounded-full"
                      >
                        {skill}
                      </span>
                    ))}
                    {item.skills.length > 3 && (
                      <span className="px-2 py-0.5 text-[10px] font-sans font-medium tracking-wide bg-muted text-muted-foreground rounded-full">
                        +{item.skills.length - 3}
                      </span>
                    )}
                  </div>

                  <div className="flex items-center gap-1 text-primary text-sm font-sans">
                    <span>View Details</span>
                    <ChevronRight size={14} className="group-hover:translate-x-1 transition-transform duration-300" />
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

      {/* Detail Modal */}
      <Dialog open={selectedIndex !== null} onOpenChange={() => setSelectedIndex(null)}>
        <DialogContent className="max-w-3xl max-h-[85vh] overflow-y-auto bg-card border-border/50 p-0">
          {selected && (
            <div>
              {/* Header with gradient */}
              <div className="relative p-8 pb-6 bg-gradient-to-br from-primary/10 via-primary/5 to-transparent">
                <div className="flex items-start gap-5">
                  <div className="w-14 h-14 rounded-2xl bg-primary/20 flex items-center justify-center shrink-0">
                    <selected.icon size={28} className="text-primary" />
                  </div>
                  <div>
                    <h3 className="font-serif text-2xl md:text-3xl font-bold mb-2">{selected.title}</h3>
                    <div className="flex flex-wrap gap-2">
                      {selected.skills.map((skill) => (
                        <span
                          key={skill}
                          className="px-3 py-1 text-xs font-sans font-medium tracking-wide bg-primary/10 text-primary rounded-full"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Body */}
              <div className="p-8 pt-4 space-y-8">
                <p className="text-muted-foreground leading-relaxed text-base">
                  {selected.details.longDescription}
                </p>

                {/* Image gallery placeholder */}
                <div>
                  <h4 className="font-serif text-lg font-semibold mb-4 flex items-center gap-2">
                    <ImageIcon size={18} className="text-primary" />
                    Gallery
                  </h4>
                  <div className="grid grid-cols-3 gap-3">
                    {[1, 2, 3].map((i) => (
                      <div
                        key={i}
                        className="aspect-[4/3] rounded-xl bg-muted/50 border border-border/30 flex items-center justify-center group/img cursor-pointer hover:border-primary/30 transition-colors"
                      >
                        <div className="text-center">
                          <ImageIcon size={24} className="mx-auto text-muted-foreground/40 group-hover/img:text-primary/50 transition-colors" />
                          <span className="text-[10px] text-muted-foreground/40 mt-1 block">Image {i}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Highlights */}
                <div>
                  <h4 className="font-serif text-lg font-semibold mb-4">Key Highlights</h4>
                  <ul className="space-y-3">
                    {selected.details.highlights.map((h, i) => (
                      <li key={i} className="flex items-start gap-3 text-sm text-muted-foreground">
                        <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 shrink-0" />
                        {h}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Projects */}
                {selected.details.projects.length > 0 && (
                  <div>
                    <h4 className="font-serif text-lg font-semibold mb-4">Featured Projects</h4>
                    <div className="space-y-4">
                      {selected.details.projects.map((project, i) => (
                        <div
                          key={i}
                          className="glass-card p-5 rounded-xl group/proj cursor-pointer hover:border-primary/30 transition-colors"
                        >
                          <div className="flex items-center justify-between mb-2">
                            <h5 className="font-sans font-semibold text-sm group-hover/proj:text-primary transition-colors">
                              {project.name}
                            </h5>
                            <ExternalLink size={14} className="text-muted-foreground/40 group-hover/proj:text-primary transition-colors" />
                          </div>
                          <p className="text-muted-foreground text-xs leading-relaxed">{project.desc}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* Video placeholder */}
                <div>
                  <h4 className="font-serif text-lg font-semibold mb-4 flex items-center gap-2">
                    <Play size={18} className="text-primary" />
                    Video
                  </h4>
                  <div className="aspect-video rounded-xl bg-muted/50 border border-border/30 flex items-center justify-center cursor-pointer hover:border-primary/30 transition-colors group/vid">
                    <div className="text-center">
                      <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-2 group-hover/vid:bg-primary/20 transition-colors">
                        <Play size={24} className="text-primary ml-1" />
                      </div>
                      <span className="text-xs text-muted-foreground/50">Video coming soon</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </section>
  );
};

export default ExpertiseSection;
