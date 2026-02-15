import { motion, useInView, AnimatePresence } from "framer-motion";
import { useRef, useState } from "react";
import {
  GraduationCap,
  Music,
  Radio,
  Scissors,
  Home,
  Code,
  ChevronRight,
  X,
  ExternalLink,
} from "lucide-react";
import { Dialog, DialogContent } from "@/components/ui/dialog";

const expertise = [
  {
    icon: Code,
    title: "Technology & Development",
    description: "Full-stack web development and system optimization focused on performance, automation, and user-centric solutions.",
    skills: ["React", "Node.js", "Angular", "Java Spring Boot", "MySQL", "MongoDB", "AWS", "WordPress", "Automation"],
    color: "38 65% 55%",
    details: {
      longDescription: "With professional experience as a Software Engineer Intern and Junior Developer, I build and maintain responsive, scalable web applications that improve performance and streamline workflows. My work has included developing full-stack platforms using React, Node.js, Angular, Java Spring Boot, and MySQL, as well as automating maintenance processes to reduce manual workload. I focus on clean implementation, practical architecture, and delivering measurable improvements in user experience and operational efficiency.",
      highlights: [
        "Developed responsive web applications using React, Node.js, and MongoDB",
        "Customized enterprise solutions with Angular, Java Spring Boot, and MySQL",
        "Automated website maintenance processes to increase team productivity",
        "Worked with AWS cloud services and improved page load speeds by 20%",
        "Implemented data scraping features for tender platforms",
      ],
      projects: [
        { name: "Full-Stack Startup Platform", desc: "Built and launched a responsive full-stack website for a growing startup" },
        { name: "Enterprise Platform Enhancement", desc: "Enhanced and maintained enterprise digital platforms with new feature integrations" },
      ],
    },
  },
  {
    icon: GraduationCap,
    title: "Education & Adult Learning",
    description: "Experienced educator specializing in curriculum design, administration, and structured academic reporting.",
    skills: ["Curriculum Design", "Classroom Management", "Academic Reporting", "Educational Technology", "Administration"],
    color: "38 65% 55%",
    details: {
      longDescription: "With over a decade of teaching experience across private and performing arts institutions, I combine curriculum development with strong administrative structure. I manage student portfolios, academic reporting cycles, and parent communication systems while integrating digital tools such as Google Workspace and Notion to streamline operations. My background in Adult Learning strengthens my ability to design structured, outcomes-driven educational environments.",
      highlights: [
        "Over 10 years of teaching experience",
        "Managed weekly, quarterly, and annual academic reporting",
        "Organized and maintained structured student portfolio systems",
        "Coordinated live performance events for applied learning",
        "Implemented digital administrative systems for workflow efficiency",
      ],
      projects: [
        { name: "Live Music Events", desc: "Coordinated and facilitated live music events for student performance development" },
        { name: "Academic Tracking System", desc: "Designed structured reporting and portfolio systems to improve academic tracking" },
      ],
    },
  },
  {
    icon: Home,
    title: "Real Estate",
    description: "Client-focused real estate professional experienced in sales, negotiation, and market analysis.",
    skills: ["Property Sales", "Market Research", "Negotiation", "Client Relations", "Transaction Coordination"],
    color: "38 65% 55%",
    details: {
      longDescription: "As a part-time real estate agent, I managed property sales and rentals in a competitive market environment. My responsibilities included conducting market research, evaluating property pricing strategies, negotiating contracts, and coordinating with legal teams to ensure smooth transactions. I prioritize relationship-building, clear communication, and operational efficiency in every deal.",
      highlights: [
        "Facilitated residential property sales and rentals",
        "Conducted market research and competitive pricing analysis",
        "Negotiated contracts and coordinated with legal stakeholders",
        "Delivered personalized client support throughout transaction processes",
      ],
      projects: [
        { name: "Property Transaction Management", desc: "Managed end-to-end residential property transactions" },
        { name: "Client Communication System", desc: "Implemented structured client communication processes to improve deal flow" },
      ],
    },
  },
  {
    icon: Music,
    title: "Music & Performance",
    description: "Trained jazz musician and educator with live performance and event coordination experience.",
    skills: ["Live Performance", "Music Education", "Event Coordination", "Portfolio Development"],
    color: "38 65% 55%",
    details: {
      longDescription: "Holding a Diploma in Jazz Studies, I have combined formal music training with years of teaching and live event coordination. My work includes organizing student performance events, maintaining structured performance portfolios, and integrating practical stage experience into academic instruction. Music has shaped my discipline, creativity, and ability to operate under performance pressure.",
      highlights: [
        "Diploma in Music (Jazz Studies)",
        "Coordinated live music events in Cape Town",
        "Integrated performance-based learning into curriculum delivery",
        "Balanced academic responsibilities with event management",
      ],
      projects: [
        { name: "Student Showcase Events", desc: "Organized and facilitated student showcase events" },
        { name: "Performance Tracking System", desc: "Developed structured performance tracking systems for learners" },
      ],
    },
  },
  {
    icon: Radio,
    title: "Amateur (Ham) Radio",
    description: "Licensed amateur radio operator focused on technical communication and practical systems knowledge.",
    skills: ["HF/VHF/UHF Operations", "Digital Modes", "Antenna Setup", "Radio Protocol"],
    color: "38 65% 55%",
    details: {
      longDescription: "As a licensed amateur radio operator, I explore communication systems beyond conventional networks, strengthening my technical understanding of signal propagation, equipment configuration, and disciplined communication protocols.",
      highlights: [
        "Licensed amateur radio operator",
        "Experience operating across multiple frequency bands",
        "Practical understanding of radio systems and communication discipline",
      ],
      projects: [],
    },
  },
  {
    icon: Scissors,
    title: "Leather Craft",
    description: "Precision-focused leather craftsmanship emphasizing patience, detail, and structural design.",
    skills: ["Hand Stitching", "Pattern Design", "Material Selection", "Custom Builds"],
    color: "38 65% 55%",
    details: {
      longDescription: "Leather craft represents my commitment to precision, patience, and hands-on problem solving. Each piece is carefully constructed with attention to durability and functional design, reinforcing my appreciation for structured process and tangible outcomes.",
      highlights: [
        "Hand-stitched construction techniques",
        "Custom pattern development",
        "Focus on durability and functional design",
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
            Six interconnected disciplines, one cohesive vision.
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
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </section>
  );
};

export default ExpertiseSection;