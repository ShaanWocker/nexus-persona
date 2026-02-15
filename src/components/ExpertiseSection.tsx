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
      longDescription: "I bring hands-on experience from Software Engineer Intern and Junior Developer roles, where I built and maintained full-stack applications using React, Node.js, Angular, Java Spring Boot, MySQL, and MongoDB. My work has centered on improving system performance—including a 20% increase in page load speeds—and automating repetitive maintenance tasks to free up engineering time. I've deployed solutions on AWS infrastructure and developed data scraping tools for tender platforms. My approach prioritizes clean architecture, measurable outcomes, and sustainable workflows that scale with organizational needs.",
      highlights: [
        "Built full-stack web applications with React, Node.js, and MongoDB from concept to deployment",
        "Developed enterprise solutions using Angular, Java Spring Boot, and MySQL with production-level reliability",
        "Automated website maintenance workflows, reducing manual intervention and increasing team capacity",
        "Improved page load performance by 20% through optimization and AWS cloud infrastructure integration",
        "Implemented custom data scraping features for government tender platforms to streamline procurement workflows",
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
      longDescription: "With over a decade of teaching experience across private and performing arts institutions, I combine formal training in Adult Education with real-world curriculum design and administrative oversight. I hold a Higher Diploma in Adult Education and a Diploma in Jazz Studies, both of which inform my structured, outcomes-driven approach to learning environments. My responsibilities have included designing weekly, quarterly, and annual reporting systems, maintaining student portfolio databases, and coordinating live performance events that bridge theory and practice. I integrate digital tools like Google Workspace and Notion to build scalable, maintainable educational systems that support both learners and administrators.",
      highlights: [
        "Over 10 years of teaching experience across private education and performing arts institutions",
        "Designed and implemented structured academic reporting cycles—weekly, quarterly, and annual—with portfolio tracking",
        "Built digital administrative systems using Google Workspace and Notion to streamline operations and reporting",
        "Coordinated live student performance events, integrating applied learning into structured curriculum delivery",
        "Hold a Higher Diploma in Adult Education and Diploma in Jazz Studies, grounding pedagogy in both theory and practice",
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
      longDescription: "As a part-time real estate agent, I managed residential property transactions from initial consultation through closing, operating in a competitive market that required responsiveness and precision. My work involved conducting market research, evaluating pricing strategies, negotiating terms with buyers and sellers, and coordinating with legal teams to ensure compliance and smooth execution. I built structured communication workflows to maintain clarity across all stakeholders and reduce transaction friction. This role strengthened my ability to operate under pressure, manage competing priorities, and deliver results within tight timelines.",
      highlights: [
        "Managed end-to-end residential property sales and rentals in a competitive market environment",
        "Conducted market research and competitive analysis to inform pricing strategies and negotiation positioning",
        "Negotiated contracts and coordinated with legal stakeholders to ensure compliant, timely closings",
        "Designed structured client communication workflows to improve transparency and reduce transactional delays",
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
      longDescription: "I hold a Diploma in Jazz Studies and have combined formal music training with years of teaching and live performance coordination. My work in music education has included organizing student showcases, maintaining structured performance portfolios, and integrating stage experience into curriculum planning. Performing live has reinforced my ability to operate under pressure, adapt in real time, and maintain focus in high-stakes environments. Music has shaped my approach to discipline, iterative practice, and the importance of process over outcome—principles I carry into every area of my work.",
      highlights: [
        "Hold a Diploma in Jazz Studies with years of experience as both performer and educator",
        "Coordinated live music events and student showcases in Cape Town, managing logistics and participant preparation",
        "Integrated performance-based learning into structured academic instruction, bridging theory and application",
        "Developed portfolio tracking systems for student performance development and progress reporting",
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
      longDescription: "As a licensed amateur radio operator, I engage with communication systems that operate outside conventional digital infrastructure, strengthening my technical understanding of signal propagation, antenna configuration, and radio protocol. I have experience operating across HF, VHF, and UHF bands, and I work within disciplined communication frameworks that prioritize clarity and efficiency. This hobby deepens my appreciation for resilient, decentralized systems and reinforces the value of technical rigor in unpredictable environments.",
      highlights: [
        "Licensed amateur radio operator with hands-on experience across HF, VHF, and UHF frequency bands",
        "Practical understanding of signal propagation, antenna setup, and equipment configuration",
        "Operate within structured radio protocols that emphasize clarity, discipline, and efficiency under constraints",
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
      longDescription: "Leather craft represents my commitment to precision, patience, and tangible problem-solving. Each project requires hand-stitched construction, custom pattern development, and careful material selection—all of which demand attention to durability, function, and structural integrity. Working with leather has reinforced my appreciation for iterative refinement, process discipline, and the value of making decisions that withstand long-term use. It is a counterbalance to digital work and a reminder that craft, at its core, is about designing systems that endure.",
      highlights: [
        "Hand-stitched construction techniques with focus on durability and functional integrity",
        "Custom pattern development informed by material properties and intended use cases",
        "Process-driven approach emphasizing iterative refinement and long-term structural design",
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

      <Dialog open={selectedIndex !== null} onOpenChange={() => setSelectedIndex(null)}>
        <DialogContent className="max-w-3xl max-h-[85vh] overflow-y-auto bg-card border-border/50 p-0">
          {selected && (
            <div>
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

              <div className="p-8 pt-4 space-y-8">
                <p className="text-muted-foreground leading-relaxed text-base">
                  {selected.details.longDescription}
                </p>

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
