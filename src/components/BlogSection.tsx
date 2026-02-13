import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { ArrowRight, Clock } from "lucide-react";

const posts = [
  {
    category: "Technology",
    title: "Building Resilient Systems with Modern Architecture",
    excerpt: "Exploring how modern development practices create more maintainable and scalable solutions.",
    date: "Feb 2026",
    readTime: "5 min read",
  },
  {
    category: "Education",
    title: "The Future of Adult Learning in a Digital World",
    excerpt: "How technology is reshaping the way adults learn and develop new skills.",
    date: "Jan 2026",
    readTime: "4 min read",
  },
  {
    category: "Music",
    title: "Where Analog Meets Digital: Sound Design in 2026",
    excerpt: "Bridging traditional musicianship with cutting-edge digital production techniques.",
    date: "Jan 2026",
    readTime: "6 min read",
  },
];

const BlogSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <section id="blog" className="section-padding relative" ref={ref}>
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="flex flex-col md:flex-row md:items-end justify-between mb-16"
        >
          <div>
            <p className="text-primary text-sm tracking-[0.3em] uppercase mb-4 font-sans">Journal</p>
            <h2 className="font-serif text-4xl md:text-5xl font-bold">Latest Thoughts</h2>
          </div>
          <a
            href="#"
            className="mt-4 md:mt-0 text-primary font-sans text-sm tracking-wider uppercase flex items-center gap-2 hover:gap-3 transition-all duration-300"
          >
            View All Posts <ArrowRight size={14} />
          </a>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {posts.map((post, index) => (
            <motion.article
              key={post.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              className="glass-card overflow-hidden group cursor-pointer hover-lift"
            >
              {/* Colored top bar */}
              <div className="h-1 bg-gradient-to-r from-primary/60 to-primary" />

              <div className="p-8">
                <span className="text-primary text-xs font-sans font-semibold tracking-widest uppercase">
                  {post.category}
                </span>

                <h3 className="font-serif text-xl font-bold mt-3 mb-3 group-hover:text-primary transition-colors duration-300 leading-snug">
                  {post.title}
                </h3>

                <p className="text-muted-foreground text-sm leading-relaxed mb-6">
                  {post.excerpt}
                </p>

                <div className="flex items-center justify-between text-xs text-muted-foreground font-sans">
                  <span>{post.date}</span>
                  <span className="flex items-center gap-1">
                    <Clock size={12} />
                    {post.readTime}
                  </span>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BlogSection;
