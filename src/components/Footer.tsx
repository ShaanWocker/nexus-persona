const Footer = () => {
  return (
    <footer className="border-t border-border/50 py-10 px-6 md:px-12">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="text-sm text-muted-foreground font-sans">
          © {new Date().getFullYear()} — All rights reserved.
        </p>
        <p className="text-sm text-muted-foreground font-sans">
          Crafted with precision & passion.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
