import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import {
  Mail,
  Send,
  Linkedin,
  Github,
  Instagram,
  Twitter,
  Calendar,
  ExternalLink,
  Radio,
  QrCode,
  Copy,
} from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

const socialLinks = [
  { icon: Linkedin, label: "LinkedIn", href: "https://www.linkedin.com/in/shaanwocker/" },
  { icon: Github, label: "GitHub", href: "https://github.com/ShaanWocker" },
  { icon: Instagram, label: "Instagram", href: "https://www.instagram.com/wockershaan?igsh=MTdhaWV5eGxzNmUzeg==" },
  // { icon: Facebook, label: "Facebook", href: "#" },
  { icon: Twitter, label: "X (Twitter)", href: "https://x.com/fixmeoneofthose" },
];

const ContactSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'success' | 'error' | null>(null);
  const [showZelloQR, setShowZelloQR] = useState(false);
  const [copied, setCopied] = useState<string | null>(null);

  const copyToClipboard = async (text: string, label: string) => {
    try {
      await navigator.clipboard.writeText(text);
      setCopied(label);
      setTimeout(() => setCopied(null), 2000);
    } catch (error) {
      console.error('Failed to copy to clipboard:', error);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      const endpoint = import.meta.env.VITE_FORMSPREE_ENDPOINT;
      if (!endpoint) {
        // Fallback to mailto if no endpoint is configured
        const subject = `Contact Form: ${formData.name}`;
        const body = `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`;
        window.location.href = `mailto:ShaanWocker@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
        setIsSubmitting(false);
        return;
      }

      const response = await fetch(endpoint, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });
      
      if (response.ok) {
        setSubmitStatus('success');
        setFormData({ name: '', email: '', message: '' });
      } else {
        setSubmitStatus('error');
      }
    } catch (error) {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
      setTimeout(() => setSubmitStatus(null), 5000);
    }
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
              disabled={isSubmitting}
              aria-busy={isSubmitting}
              className="group w-full px-8 py-4 bg-primary text-primary-foreground font-sans font-semibold text-sm tracking-wider uppercase rounded-full hover:shadow-[0_0_30px_-5px_hsl(38_65%_55%/0.4)] transition-all duration-500 flex items-center justify-center gap-3 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isSubmitting ? 'Sending...' : 'Send Message'}
              <Send size={16} className="group-hover:translate-x-1 transition-transform" />
            </button>
            {submitStatus === 'success' && (
              <p className="text-green-500 text-sm text-center">Message sent successfully!</p>
            )}
            {submitStatus === 'error' && (
              <p className="text-red-500 text-sm text-center">Failed to send. Please try again.</p>
            )}
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
              href="mailto:ShaanWocker@gmail.com"
              className="glass-card p-6 flex items-center gap-4 hover-lift group"
            >
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                <Mail size={20} className="text-primary" />
              </div>
              <div>
                <p className="font-sans text-sm text-muted-foreground">Email me directly</p>
                <p className="font-sans font-medium text-foreground group-hover:text-primary transition-colors">
                  ShaanWocker@gmail.com
                </p>
              </div>
            </a>

            {/* Book a call */}
            <a
              href="https://calendly.com/shaanwocker/30min"
              target="_blank"
              rel="noopener noreferrer"
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

            {/* Ham Radio Networks */}
            <div>
              <p className="text-sm font-sans font-medium text-muted-foreground tracking-wider uppercase mb-4">
                Ham Radio Networks
              </p>
              <div className="space-y-3">
                {/* Zello QR Code Button */}
                <button
                  onClick={() => setShowZelloQR(true)}
                  className="glass-card p-4 flex items-center gap-3 hover-lift group w-full text-left"
                >
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors flex-shrink-0">
                    <QrCode size={18} className="text-primary" />
                  </div>
                  <div className="flex-1">
                    <p className="font-sans text-sm font-medium text-foreground group-hover:text-primary transition-colors">
                      Zello QR Code
                    </p>
                    <p className="font-sans text-xs text-muted-foreground">
                      Scan to connect
                    </p>
                  </div>
                </button>

                {/* EchoLink */}
                <div className="glass-card p-4 space-y-2">
                  <div className="flex items-center gap-3 mb-2">
                    <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <Radio size={18} className="text-primary" />
                    </div>
                    <div className="flex-1">
                      <p className="font-sans text-sm font-medium text-foreground">
                        EchoLink
                      </p>
                      <p className="font-sans text-xs text-muted-foreground">
                        Callsign: ZS1SCW
                      </p>
                    </div>
                  </div>
                  <div className="flex gap-2">
                    <button
                      onClick={() => copyToClipboard("329789", "echolink1")}
                      className="flex-1 px-3 py-2 text-xs font-sans font-medium bg-card/60 border border-border/50 rounded-lg text-muted-foreground hover:text-primary hover:border-primary/30 transition-all duration-300 flex items-center justify-between gap-2"
                    >
                      <span>Node: 329789</span>
                      <Copy size={12} />
                    </button>
                    <button
                      onClick={() => copyToClipboard("357921", "echolink2")}
                      className="flex-1 px-3 py-2 text-xs font-sans font-medium bg-card/60 border border-border/50 rounded-lg text-muted-foreground hover:text-primary hover:border-primary/30 transition-all duration-300 flex items-center justify-between gap-2"
                    >
                      <span>Node: 357921</span>
                      <Copy size={12} />
                    </button>
                  </div>
                  {(copied === "echolink1" || copied === "echolink2") && (
                    <p className="text-xs text-green-500 text-center">Copied!</p>
                  )}
                </div>

                {/* AllStar Node */}
                <div className="glass-card p-4">
                  <div className="flex items-center gap-3 mb-2">
                    <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <Radio size={18} className="text-primary" />
                    </div>
                    <div className="flex-1">
                      <p className="font-sans text-sm font-medium text-foreground">
                        AllStar Link
                      </p>
                    </div>
                  </div>
                  <button
                    onClick={() => copyToClipboard("64118", "allstar")}
                    className="w-full px-3 py-2 text-xs font-sans font-medium bg-card/60 border border-border/50 rounded-lg text-muted-foreground hover:text-primary hover:border-primary/30 transition-all duration-300 flex items-center justify-between gap-2"
                  >
                    <span>Node: 64118</span>
                    <Copy size={12} />
                  </button>
                  {copied === "allstar" && (
                    <p className="text-xs text-green-500 text-center mt-2">Copied!</p>
                  )}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Zello QR Code Modal */}
      <Dialog open={showZelloQR} onOpenChange={setShowZelloQR}>
        <DialogContent className="max-w-md">
          <DialogHeader>
            <DialogTitle className="text-center text-2xl">Connect on Zello</DialogTitle>
            <DialogDescription className="text-center">
              Scan this QR code to add me on Zello
            </DialogDescription>
          </DialogHeader>
          <div className="flex justify-center py-4">
            <img
              src="/images/zello-qr.svg"
              alt="Zello QR Code"
              className="w-full max-w-sm rounded-lg"
            />
          </div>
        </DialogContent>
      </Dialog>
    </section>
  );
};

export default ContactSection;
