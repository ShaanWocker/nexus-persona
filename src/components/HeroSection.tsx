import { motion } from "framer-motion";
import { ArrowDown, FileDown, Calendar } from "lucide-react";
import { Link } from "react-router-dom";
import heroBg from "@/assets/hero-bg.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0">
        <img
          src={heroBg}
          alt=""
          className="w-full h-full object-cover opacity-60"
          loading="eager"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/40 via-background/70 to-background" />
      </div>

      {/* Ambient particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 rounded-full bg-primary/30"
            style={{
              left: `${15 + i * 15}%`,
              top: `${20 + (i % 3) * 25}%`,
            }}
            animate={{
              y: [0, -30, 0],
              opacity: [0.2, 0.6, 0.2],
            }}
            transition={{
              duration: 4 + i,
              repeat: Infinity,
              ease: "easeInOut",
              delay: i * 0.5,
            }}
          />
        ))}
      </div>

      {/* Content */}
      <div className="relative z-10 text-center max-w-4xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
        >
          <p className="text-primary font-sans text-sm tracking-[0.3em] uppercase mb-6">
            Welcome to my world
          </p>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="font-serif text-5xl md:text-7xl lg:text-8xl font-bold leading-tight mb-6"
        >
          <span className="text-foreground">Educator.</span>{" "}
          <span className="text-gradient-gold">Musician.</span>
          <br />
          <span className="text-foreground">Technologist.</span>{" "}
          <span className="text-gradient-gold">Creator.</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.7 }}
          className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-12 leading-relaxed"
        >
          A multidisciplinary professional bridging education, music, technology, and craftsmanship
          — building meaningful connections across every domain.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.9 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <Link
            to="/mywork"
            className="px-8 py-4 bg-primary text-primary-foreground font-sans font-semibold text-sm tracking-wider uppercase rounded-full hover:shadow-[0_0_30px_-5px_hsl(38_65%_55%/0.4)] transition-all duration-500"
          >
            View My Work
          </Link>
          <a
            href="#cv"
            className="group px-8 py-4 border border-border text-foreground font-sans font-semibold text-sm tracking-wider uppercase rounded-full hover:border-primary/50 transition-all duration-500 flex items-center gap-2"
          >
            <FileDown size={16} className="group-hover:text-primary transition-colors" />
            Download CV
          </a>
          <a
            href="#contact"
            className="group px-8 py-4 border border-border text-foreground font-sans font-semibold text-sm tracking-wider uppercase rounded-full hover:border-primary/50 transition-all duration-500 flex items-center gap-2"
          >
            <Calendar size={16} className="group-hover:text-primary transition-colors" />
            Book a Call
          </a>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-10 left-1/2 -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <ArrowDown size={20} className="text-muted-foreground" />
      </motion.div>
    </section>
  );
};

export default HeroSection;
