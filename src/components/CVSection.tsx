import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { FileDown, Eye } from "lucide-react";

const CVSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <section id="cv" className="section-padding relative" ref={ref}>
      <div className="max-w-3xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <p className="text-primary text-sm tracking-[0.3em] uppercase mb-4 font-sans">Curriculum Vitae</p>
          <h2 className="font-serif text-4xl md:text-5xl font-bold mb-6">Download My CV</h2>
          <p className="text-muted-foreground text-lg mb-12 max-w-xl mx-auto leading-relaxed">
            Get the full picture of my professional experience, skills, and achievements in a beautifully formatted document.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button className="group px-8 py-4 bg-primary text-primary-foreground font-sans font-semibold text-sm tracking-wider uppercase rounded-full hover:shadow-[0_0_30px_-5px_hsl(38_65%_55%/0.4)] transition-all duration-500 flex items-center gap-3">
              <FileDown size={18} className="group-hover:animate-bounce" />
              Download CV
            </button>
            <button className="group px-8 py-4 border border-border text-foreground font-sans font-semibold text-sm tracking-wider uppercase rounded-full hover:border-primary/50 transition-all duration-500 flex items-center gap-3">
              <Eye size={18} className="group-hover:text-primary transition-colors" />
              Preview CV
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CVSection;
