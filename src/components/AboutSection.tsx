import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const milestones = [
  { year: "Current", title: "Thrive Academy 🎓 & Algorithmics 💻", description: "Working at Thrive Academy & Algorithmics in Durbanville, empowering students through education and technology." },
  { year: "2023", title: "Trustlink Africa 🔗", description: "Contributed to building digital solutions connecting African businesses and facilitating growth across the continent." },
  { year: "2022", title: "Cyclonic Media 🌪️", description: "Helped create dynamic media experiences and digital content strategies for diverse clients." },
  { year: "2020", title: "Bercliff Estates 🏘️", description: "Supported real estate operations and property management, enhancing client experiences and property value." },
  { year: "2016", title: "Campus of Performing Arts 🎭", description: "Fostered creative development and performance education, nurturing artistic talent and expression." },
];

const AboutSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="section-padding relative overflow-hidden" ref={ref}>
      {/* Section divider */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-20 bg-gradient-to-b from-transparent to-primary/30" />

      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <p className="text-primary text-sm tracking-[0.3em] uppercase mb-4 font-sans">About Me</p>
          <h2 className="font-serif text-4xl md:text-5xl font-bold mb-8">The Journey So Far</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg leading-relaxed">
            I'm a multidisciplinary professional driven by curiosity and a passion for mastery.
            From classrooms to concert stages, from radio waves to real estate — every
            discipline informs and enriches the others.
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-border md:-translate-x-px" />

          <div className="space-y-12">
            {milestones.map((milestone, index) => (
              <motion.div
                key={milestone.year}
                initial={{ opacity: 0, x: index % 2 === 0 ? -40 : 40 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                className={`relative flex items-start gap-8 md:gap-0 ${
                  index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                }`}
              >
                {/* Dot */}
                <div className="absolute left-4 md:left-1/2 w-3 h-3 rounded-full bg-primary -translate-x-1.5 mt-2 glow-gold z-10" />

                {/* Content */}
                <div className={`ml-12 md:ml-0 md:w-1/2 ${index % 2 === 0 ? "md:pr-16 md:text-right" : "md:pl-16"}`}>
                  <span className="text-primary font-sans text-sm font-semibold tracking-wider">{milestone.year}</span>
                  <h3 className="font-serif text-xl font-bold mt-1 mb-2">{milestone.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{milestone.description}</p>
                </div>

                {/* Spacer for other side */}
                <div className="hidden md:block md:w-1/2" />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
