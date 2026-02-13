import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { ArrowRight, Clock, X, Tag, ChevronLeft } from "lucide-react";
import { Dialog, DialogContent } from "@/components/ui/dialog";

const posts = [
  {
    category: "Technology",
    title: "Building Resilient Systems with Modern Architecture",
    excerpt: "Exploring how modern development practices create more maintainable and scalable solutions.",
    date: "Feb 2026",
    readTime: "5 min read",
    content: `In today's rapidly evolving tech landscape, building resilient systems isn't just a best practice — it's a necessity. Modern architecture patterns like microservices, event-driven design, and serverless computing have fundamentally changed how we approach system design.

**The Case for Resilience**

Traditional monolithic architectures served us well for decades, but as systems grow in complexity and user expectations increase, we need approaches that can adapt, scale, and recover gracefully from failures.

**Key Principles**

1. **Design for Failure** — Every component should assume other components can fail. Circuit breakers, retries with exponential backoff, and graceful degradation are essential patterns.

2. **Embrace Observability** — You can't fix what you can't see. Structured logging, distributed tracing, and comprehensive metrics form the three pillars of observability.

3. **Automate Everything** — From testing to deployment to scaling, automation reduces human error and increases consistency.

4. **Start Simple** — The best architecture is the simplest one that meets your current needs while leaving room to evolve.

The journey to resilient systems is ongoing, but the principles remain constant: plan for failure, observe relentlessly, and iterate continuously.`,
    tags: ["Architecture", "DevOps", "Best Practices"],
  },
  {
    category: "Education",
    title: "The Future of Adult Learning in a Digital World",
    excerpt: "How technology is reshaping the way adults learn and develop new skills.",
    date: "Jan 2026",
    readTime: "4 min read",
    content: `The landscape of adult education is undergoing a seismic shift. Traditional classroom-based learning is giving way to hybrid models that leverage technology to create more personalized, accessible, and effective learning experiences.

**The Changing Learner**

Today's adult learners are fundamentally different from those of even a decade ago. They expect on-demand access, personalized pathways, and immediate applicability of what they learn.

**Technology as an Enabler**

- **Adaptive Learning Platforms** adjust difficulty and content based on individual performance and learning style.
- **Microlearning** delivers content in bite-sized chunks that fit into busy schedules.
- **Virtual Reality** creates immersive scenarios for experiential learning without real-world risk.
- **AI-Powered Coaching** provides personalized feedback and guidance at scale.

**The Human Element**

Despite all the technological advances, the most impactful learning still happens through human connection. The best digital learning experiences augment rather than replace the mentor-student relationship.

The future of adult learning isn't about choosing between technology and tradition — it's about thoughtfully combining both to create transformative experiences.`,
    tags: ["Education", "E-Learning", "Innovation"],
  },
  {
    category: "Music",
    title: "Where Analog Meets Digital: Sound Design in 2026",
    excerpt: "Bridging traditional musicianship with cutting-edge digital production techniques.",
    date: "Jan 2026",
    readTime: "6 min read",
    content: `There's a beautiful tension in modern music production between the warmth of analog sound and the precision of digital tools. In 2026, the most compelling productions are those that bridge both worlds intentionally.

**The Analog Renaissance**

Despite having access to incredibly powerful digital tools, there's been a notable return to analog equipment. Tape saturation, tube warmth, and the happy accidents of hardware synthesizers bring a character that's difficult to replicate digitally.

**Digital Precision**

On the other hand, digital tools offer:
- **Unlimited Undo** — Experiment fearlessly
- **Perfect Recall** — Return to any session state instantly
- **Collaboration** — Work with artists anywhere in the world
- **AI-Assisted Mixing** — Get professional-quality starting points in seconds

**The Sweet Spot**

The magic happens when you use each approach for what it does best. Record through analog preamps for character. Edit and arrange digitally for precision. Mix through a hybrid chain that combines the best of both worlds.

**My Approach**

In my studio, every signal passes through at least one piece of analog equipment before final processing. This philosophy extends to live performance too — even when using digital instruments, I always incorporate some element of physical, tactile interaction.

Sound design in 2026 isn't about analog vs. digital. It's about understanding and leveraging the strengths of each to create something truly unique.`,
    tags: ["Music", "Production", "Sound Design"],
  },
];

const BlogSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });
  const [selectedPost, setSelectedPost] = useState<typeof posts[0] | null>(null);

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
              onClick={() => setSelectedPost(post)}
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

                <div className="mt-4 pt-4 border-t border-border/30 flex items-center gap-1 text-primary text-sm font-sans">
                  <span>Read Article</span>
                  <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform duration-300" />
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>

      {/* Blog Post Modal */}
      <Dialog open={selectedPost !== null} onOpenChange={() => setSelectedPost(null)}>
        <DialogContent className="max-w-2xl max-h-[85vh] overflow-y-auto bg-card border-border/50 p-0">
          {selectedPost && (
            <div>
              {/* Header */}
              <div className="p-8 pb-0">
                <div className="flex items-center gap-3 mb-4">
                  <span className="px-3 py-1 text-xs font-sans font-semibold tracking-widest uppercase bg-primary/10 text-primary rounded-full">
                    {selectedPost.category}
                  </span>
                  <span className="text-xs text-muted-foreground flex items-center gap-1">
                    <Clock size={12} />
                    {selectedPost.readTime}
                  </span>
                </div>

                <h2 className="font-serif text-2xl md:text-3xl font-bold mb-2 leading-tight">
                  {selectedPost.title}
                </h2>

                <p className="text-muted-foreground text-sm mb-6">{selectedPost.date}</p>
              </div>

              {/* Content */}
              <div className="px-8 pb-8">
                <div className="prose prose-sm prose-invert max-w-none">
                  {selectedPost.content.split("\n\n").map((paragraph, i) => {
                    if (paragraph.startsWith("**") && paragraph.endsWith("**")) {
                      return (
                        <h3 key={i} className="font-serif text-lg font-semibold mt-6 mb-3 text-foreground">
                          {paragraph.replace(/\*\*/g, "")}
                        </h3>
                      );
                    }
                    if (paragraph.startsWith("- ")) {
                      return (
                        <ul key={i} className="space-y-2 my-4">
                          {paragraph.split("\n").map((line, j) => (
                            <li key={j} className="flex items-start gap-2 text-sm text-muted-foreground leading-relaxed">
                              <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 shrink-0" />
                              <span dangerouslySetInnerHTML={{ __html: line.replace(/^- /, "").replace(/\*\*(.*?)\*\*/g, "<strong class='text-foreground'>$1</strong>") }} />
                            </li>
                          ))}
                        </ul>
                      );
                    }
                    if (paragraph.match(/^\d\./)) {
                      return (
                        <ol key={i} className="space-y-3 my-4">
                          {paragraph.split("\n").map((line, j) => (
                            <li key={j} className="text-sm text-muted-foreground leading-relaxed">
                              <span dangerouslySetInnerHTML={{ __html: line.replace(/^\d+\.\s*/, "").replace(/\*\*(.*?)\*\*/g, "<strong class='text-foreground'>$1</strong>") }} />
                            </li>
                          ))}
                        </ol>
                      );
                    }
                    return (
                      <p key={i} className="text-sm text-muted-foreground leading-relaxed mb-4">
                        <span dangerouslySetInnerHTML={{ __html: paragraph.replace(/\*\*(.*?)\*\*/g, "<strong class='text-foreground'>$1</strong>") }} />
                      </p>
                    );
                  })}
                </div>

                {/* Tags */}
                <div className="mt-8 pt-6 border-t border-border/30">
                  <div className="flex items-center gap-2 flex-wrap">
                    <Tag size={14} className="text-muted-foreground/50" />
                    {selectedPost.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-3 py-1 text-xs font-sans font-medium tracking-wide bg-muted text-muted-foreground rounded-full"
                      >
                        {tag}
                      </span>
                    ))}
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

export default BlogSection;
