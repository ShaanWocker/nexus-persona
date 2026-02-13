import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import {
  Mail,
  Send,
  Linkedin,
  Github,
  Instagram,
  Facebook,
  Twitter,
  Calendar,
  ExternalLink,
} from "lucide-react";

const socialLinks = [
  { icon: Linkedin, label: "LinkedIn", href: "#" },
  { icon: Github, label: "GitHub", href: "#" },
  { icon: Instagram, label: "Instagram", href: "#" },
  { icon: Facebook, label: "Facebook", href: "#" },
  { icon: Twitter, label: "X (Twitter)", href: "#" },
];

const ContactSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: Implement form submission
  };

  return (
    <section id="contact" className="section-padding relative" ref={ref}>
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <p className="text-primary text-sm tracking-[0.3em] uppercase mb-4 font-sans">Get in Touch</p>
          <h2 className="font-serif text-4xl md:text-5xl font-bold mb-6">Let's Connect</h2>
          <p className="text-muted-foreground max-w-xl mx-auto text-lg">
            Whether it's a collaboration, a project, or just a conversation — I'd love to hear from you.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16">
          {/* Contact Form */}
          <motion.form
            onSubmit={handleSubmit}
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-6"
          >
            <div>
              <label className="block text-sm font-sans font-medium text-muted-foreground mb-2 tracking-wider uppercase">
                Name
              </label>
              <input
                type="text"
                required
                maxLength={100}
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="w-full px-5 py-4 bg-card/60 border border-border/50 rounded-xl text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/20 transition-all duration-300"
                placeholder="Your full name"
              />
            </div>
            <div>
              <label className="block text-sm font-sans font-medium text-muted-foreground mb-2 tracking-wider uppercase">
                Email
              </label>
              <input
                type="email"
                required
                maxLength={255}
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="w-full px-5 py-4 bg-card/60 border border-border/50 rounded-xl text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/20 transition-all duration-300"
                placeholder="your@email.com"
              />
            </div>
            <div>
              <label className="block text-sm font-sans font-medium text-muted-foreground mb-2 tracking-wider uppercase">
                Message
              </label>
              <textarea
                required
                maxLength={1000}
                rows={5}
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                className="w-full px-5 py-4 bg-card/60 border border-border/50 rounded-xl text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/20 transition-all duration-300 resize-none"
                placeholder="Tell me about your project or idea..."
              />
            </div>
            <button
              type="submit"
              className="group w-full px-8 py-4 bg-primary text-primary-foreground font-sans font-semibold text-sm tracking-wider uppercase rounded-full hover:shadow-[0_0_30px_-5px_hsl(38_65%_55%/0.4)] transition-all duration-500 flex items-center justify-center gap-3"
            >
              Send Message
              <Send size={16} className="group-hover:translate-x-1 transition-transform" />
            </button>
          </motion.form>

          {/* Right side: social + booking */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="space-y-10"
          >
            {/* Direct email */}
            <a
              href="mailto:hello@example.com"
              className="glass-card p-6 flex items-center gap-4 hover-lift group"
            >
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                <Mail size={20} className="text-primary" />
              </div>
              <div>
                <p className="font-sans text-sm text-muted-foreground">Email me directly</p>
                <p className="font-sans font-medium text-foreground group-hover:text-primary transition-colors">
                  hello@example.com
                </p>
              </div>
            </a>

            {/* Book a call */}
            <a
              href="#"
              className="glass-card p-6 flex items-center gap-4 hover-lift group"
            >
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                <Calendar size={20} className="text-primary" />
              </div>
              <div>
                <p className="font-sans text-sm text-muted-foreground">Schedule a meeting</p>
                <p className="font-sans font-medium text-foreground group-hover:text-primary transition-colors flex items-center gap-1">
                  Book a Call via Calendly <ExternalLink size={12} />
                </p>
              </div>
            </a>

            {/* Social links */}
            <div>
              <p className="text-sm font-sans font-medium text-muted-foreground tracking-wider uppercase mb-5">
                Find me online
              </p>
              <div className="flex flex-wrap gap-3">
                {socialLinks.map((social) => {
                  const Icon = social.icon;
                  return (
                    <a
                      key={social.label}
                      href={social.href}
                      aria-label={social.label}
                      className="w-12 h-12 rounded-xl bg-card/60 border border-border/50 flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary/30 hover:bg-primary/5 transition-all duration-300"
                    >
                      <Icon size={18} />
                    </a>
                  );
                })}
              </div>
            </div>

            {/* Radio links */}
            <div>
              <p className="text-sm font-sans font-medium text-muted-foreground tracking-wider uppercase mb-4">
                Radio Networks
              </p>
              <div className="flex flex-wrap gap-3">
                {["Zello", "EchoLink", "AllStar Link"].map((name) => (
                  <a
                    key={name}
                    href="#"
                    className="px-4 py-2 text-xs font-sans font-medium tracking-wider uppercase bg-card/60 border border-border/50 rounded-full text-muted-foreground hover:text-primary hover:border-primary/30 transition-all duration-300"
                  >
                    {name}
                  </a>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
