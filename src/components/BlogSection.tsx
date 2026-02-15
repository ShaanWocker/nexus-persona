import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { ArrowRight, Clock, X, Tag, ChevronLeft, Share2, Twitter, Linkedin, Facebook, Link as LinkIcon } from "lucide-react";
import { Link } from "react-router-dom";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { posts } from "@/data/posts";
import { generateSlug } from "@/utils/slugify";

type SocialPlatform = 'twitter' | 'linkedin' | 'facebook';

const BlogSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });
  const [selectedPost, setSelectedPost] = useState<typeof posts[0] | null>(null);
  const [copySuccess, setCopySuccess] = useState(false);

  // Handle copy link to clipboard
  const handleCopyLink = () => {
    if (selectedPost) {
      const slug = generateSlug(selectedPost.title);
      const url = `${window.location.origin}/blog#${slug}`;
      navigator.clipboard.writeText(url)
        .then(() => {
          setCopySuccess(true);
          setTimeout(() => setCopySuccess(false), 2000);
        })
        .catch((err) => {
          console.error('Failed to copy link:', err);
        });
    }
  };

  // Handle social media sharing
  const handleShare = (platform: SocialPlatform) => {
    if (!selectedPost) return;
    
    const slug = generateSlug(selectedPost.title);
    const url = `${window.location.origin}/blog#${slug}`;
    const text = selectedPost.title;
    
    let shareUrl = '';
    
    switch (platform) {
      case 'twitter':
        shareUrl = `https://twitter.com/intent/tweet?text=${encodeURIComponent(text)}&url=${encodeURIComponent(url)}`;
        break;
      case 'linkedin':
        shareUrl = `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(url)}`;
        break;
      case 'facebook':
        shareUrl = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`;
        break;
    }
    
    if (shareUrl) {
      window.open(shareUrl, '_blank', 'width=600,height=400');
    }
  };

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
          <Link
            to="/blog"
            className="mt-4 md:mt-0 text-primary font-sans text-sm tracking-wider uppercase flex items-center gap-2 hover:gap-3 transition-all duration-300"
          >
            View All Posts <ArrowRight size={14} />
          </Link>
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
        <DialogContent className="max-w-4xl max-h-[85vh] overflow-y-auto bg-card border-border/50 p-0">
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

                {/* Share Buttons */}
                <div className="flex items-center gap-2 pb-6 border-b border-border/30">
                  <span className="text-xs text-muted-foreground font-sans flex items-center gap-2">
                    <Share2 size={14} />
                    Share:
                  </span>
                  <button
                    onClick={() => handleShare('twitter')}
                    className="w-8 h-8 rounded-full bg-muted hover:bg-primary/20 flex items-center justify-center transition-colors duration-300 group"
                    aria-label="Share on Twitter"
                  >
                    <Twitter size={14} className="text-muted-foreground group-hover:text-primary transition-colors" />
                  </button>
                  <button
                    onClick={() => handleShare('linkedin')}
                    className="w-8 h-8 rounded-full bg-muted hover:bg-primary/20 flex items-center justify-center transition-colors duration-300 group"
                    aria-label="Share on LinkedIn"
                  >
                    <Linkedin size={14} className="text-muted-foreground group-hover:text-primary transition-colors" />
                  </button>
                  <button
                    onClick={() => handleShare('facebook')}
                    className="w-8 h-8 rounded-full bg-muted hover:bg-primary/20 flex items-center justify-center transition-colors duration-300 group"
                    aria-label="Share on Facebook"
                  >
                    <Facebook size={14} className="text-muted-foreground group-hover:text-primary transition-colors" />
                  </button>
                  <button
                    onClick={handleCopyLink}
                    className="w-8 h-8 rounded-full bg-muted hover:bg-primary/20 flex items-center justify-center transition-colors duration-300 group relative"
                    aria-label="Copy link"
                  >
                    <LinkIcon size={14} className="text-muted-foreground group-hover:text-primary transition-colors" />
                    {copySuccess && (
                      <span className="absolute -top-8 left-1/2 -translate-x-1/2 px-2 py-1 text-xs bg-primary text-primary-foreground rounded whitespace-nowrap">
                        Copied!
                      </span>
                    )}
                  </button>
                </div>
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
