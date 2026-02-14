import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { ArrowRight, Clock, Tag } from "lucide-react";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { posts } from "@/data/posts";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const Blog = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });
  const [selectedPost, setSelectedPost] = useState<typeof posts[0] | null>(null);

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 px-6 md:px-12">
        <div className="max-w-7xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <p className="text-primary text-sm tracking-[0.3em] uppercase mb-4 font-sans">Journal</p>
            <h1 className="font-serif text-5xl md:text-6xl font-bold mb-6">All Posts</h1>
            <p className="text-muted-foreground max-w-2xl mx-auto text-lg leading-relaxed">
              Insights on technology, education, music, and the creative intersections that drive innovation.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="section-padding relative" ref={ref}>
        <div className="max-w-7xl mx-auto">
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
      </section>

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

      <Footer />
    </div>
  );
};

export default Blog;
