import { Button } from "@/components/Button";
import { Menu, X } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import gsap from "gsap";

const navLinks = [
  {
    href: "#about",
    label: "About",
  },
  {
    href: "#education",
    label: "Education",
  },
  {
    href: "#projects",
    label: "Projects",
  },
  // {
  //   href: "#testimonials",
  //   label: "Testimonials",
  // },
];

export const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("");
  const headerRef = useRef(null);
  const mobileOpenRef = useRef(false);

  // keep ref in sync so the GSAP callback can read the latest state
  useEffect(() => {
    mobileOpenRef.current = isMobileMenuOpen;
  }, [isMobileMenuOpen]);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 40);
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Smart hide/show: hide while scrolling down, reveal when scrolling up
  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    let lastY = window.scrollY;
    const handleScroll = () => {
      const y = window.scrollY;
      if (mobileOpenRef.current) {
        gsap.to(headerRef.current, {
          yPercent: 0,
          duration: 0.35,
          ease: "power2.out",
          overwrite: "auto",
        });
        return;
      }
      const goingDown = y > lastY;
      lastY = y;
      gsap.to(headerRef.current, {
        yPercent: goingDown && y > 160 ? -110 : 0,
        duration: 0.35,
        ease: "power2.out",
        overwrite: "auto",
      });
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Highlight the section currently in view
  useEffect(() => {
    const ids = navLinks.map((link) => link.href.slice(1));
    const sections = ids
      .map((id) => document.getElementById(id))
      .filter(Boolean);

    if (sections.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { rootMargin: "-45% 0px -50% 0px", threshold: 0 },
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  return (
    <header
      ref={headerRef}
      className={`fixed top-0 left-0 right-0 z-50 outline-none border-none transition-[padding,background-color,border-color] duration-500 ${
        isScrolled ? "glass-strong py-3" : "bg-transparent py-5"
      }`}
    >
      <nav className="container mx-auto px-6 flex items-center justify-between">
        <a
          href="#"
          className="text-2xl font-extrabold tracking-tight font-display hover:text-primary transition-colors"
        >
          RS<span className="text-primary">.</span>
        </a>

        {/* desktop nav  */}
        <div className="hidden md:flex items-center gap-1">
          <div className="glass rounded-full px-2 py-1 flex items-center gap-1">
            {navLinks.map((link) => {
              const isActive = activeSection === link.href.slice(1);
              return (
                <a
                  href={link.href}
                  key={link.href}
                  className={`px-4 py-2 text-sm font-medium rounded-full transition-colors ${
                    isActive
                      ? "bg-soft-accent text-primary"
                      : "text-muted-foreground hover:text-foreground hover:bg-muted"
                  }`}
                >
                  {link.label}
                </a>
              );
            })}
          </div>
        </div>

        {/* cta btn  */}
        <div className="hidden md:block">
          <a href="#contact">
            <Button size="sm">Contact Me</Button>
          </a>
        </div>

        {/* mobile menu  */}
        <button
          className="md:hidden p-2 text-foreground"
          onClick={() => setIsMobileMenuOpen((prev) => !prev)}
          aria-label="Toggle menu"
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {/* mobile nav  */}
      {isMobileMenuOpen && (
        <div className="md:hidden glass-strong animate-fade-in">
          <div className="container mx-auto px-6 py-6 flex flex-col gap-4">
            {navLinks.map((link) => {
              const isActive = activeSection === link.href.slice(1);
              return (
                <a
                  href={link.href}
                  key={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={`text-lg py-2 px-3 rounded-lg transition-colors ${
                    isActive
                      ? "text-primary bg-soft-accent"
                      : "text-muted-foreground hover:text-foreground"
                  }`}
                >
                  {link.label}
                </a>
              );
            })}

            <a href="#contact">
              <Button size="sm" onClick={() => setIsMobileMenuOpen(false)}>
                Contact Me
              </Button>
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
