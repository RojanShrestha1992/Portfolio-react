import { Button } from "@/components/Button";
import {
  ArrowRight,
  Github,
  Linkedin,
  Instagram,
  Download,
} from "lucide-react";
import { AnimatedBorderButton } from "@/components/AnimatedBorderButton";
import { MagneticButton } from "@/components/MagneticButton";
// import pfp from "/img/profile-photo-2.png";
import pfp from "/img/profile.png";
import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger, useGSAP);

const skills = [
  "JavaScript",
  "React",
  "Tailwind CSS",
  "Node",
  "C",
  "Python",
  "C++",
  "SQL",
  "Git",
  "GitHub",
  "Vercel",
  "Photoshop",
  "Canva",
];

export const Hero = () => {
  const sectionRef = useRef(null);

  useGSAP(
    () => {
      if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

      // --- load-in timeline ---
      const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

      tl.fromTo(
        ".hero-badge",
        { opacity: 0, y: 24 },
        { opacity: 1, y: 0, duration: 0.7 },
      )
        .fromTo(
          ".hero-title",
          { opacity: 0, y: 34 },
          { opacity: 1, y: 0, duration: 0.8 },
          "-=0.35",
        )
        .fromTo(
          ".hero-sub",
          { opacity: 0, y: 24 },
          { opacity: 1, y: 0, duration: 0.7 },
          "-=0.45",
        )
        .fromTo(
          ".hero-cta > *",
          { opacity: 0, y: 20 },
          { opacity: 1, y: 0, duration: 0.6, stagger: 0.12 },
          "-=0.4",
        )
        .fromTo(
          ".hero-social",
          { opacity: 0, y: 16 },
          { opacity: 1, y: 0, duration: 0.5 },
          "-=0.35",
        )
        .fromTo(
          ".hero-photo",
          { opacity: 0, y: 40, scale: 0.94 },
          {
            opacity: 1,
            y: 0,
            scale: 1,
            duration: 0.9,
            ease: "back.out(1.3)",
          },
          "-=0.5",
        )
        .fromTo(
          ".hero-skills",
          { opacity: 0 },
          { opacity: 1, duration: 0.8 },
          "-=0.4",
        );

      // --- subtle photo parallax on scroll ---
      gsap.to(".hero-photo-inner", {
        yPercent: 10,
        ease: "none",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top top",
          end: "bottom top",
          scrub: true,
        },
      });

      // --- depth layer parallax (decorative shapes at different speeds) ---
      gsap.to(".hero-depth-1", {
        yPercent: -30,
        ease: "none",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top top",
          end: "bottom top",
          scrub: true,
        },
      });
      gsap.to(".hero-depth-2", {
        yPercent: -50,
        ease: "none",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top top",
          end: "bottom top",
          scrub: true,
        },
      });
      gsap.to(".hero-depth-3", {
        yPercent: -70,
        ease: "none",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top top",
          end: "bottom top",
          scrub: true,
        },
      });
    },
    { scope: sectionRef },
  );

  return (
    <section
      ref={sectionRef}
      id="hero"
      className="relative min-h-screen flex items-center overflow-hidden"
    >
      {/* subtle warm lighting */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(circle at 15% 15%, rgba(199,107,74,0.10), transparent 32%), radial-gradient(circle at 85% 10%, rgba(217,154,61,0.08), transparent 28%), var(--color-background)",
        }}
      />

      {/* --- depth layers (different parallax speeds for dimension) --- */}
      <div className="hero-depth-1 absolute top-[10%] left-[5%] w-64 h-64 rounded-full bg-primary/4 blur-3xl pointer-events-none" />
      <div className="hero-depth-2 absolute top-[20%] right-[8%] w-48 h-48 rounded-full bg-highlight/6 blur-2xl pointer-events-none" />
      <div className="hero-depth-3 absolute bottom-[15%] left-[40%] w-56 h-56 rounded-full bg-primary/3 blur-3xl pointer-events-none" />
      <div className="hero-depth-2 absolute top-[60%] left-[2%] w-32 h-32 rounded-full bg-sage/5 blur-2xl pointer-events-none" />
      <div className="hero-depth-3 absolute top-[8%] right-[25%] w-40 h-40 rounded-full bg-highlight/4 blur-3xl pointer-events-none" />

      {/* content  */}
      <div className="container mx-auto px-6 pt-20 pb-12 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* left col  text */}
          <div className="space-y-8">
            <div className="hero-badge">
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-soft-accent border border-[#f0d7cb] text-sm font-medium text-primary">
                <span className="w-2 h-2 bg-primary rounded-full animate-pulse" />
                Full Stack Developer
              </span>
            </div>

            {/* headline */}

            <div className="space-y-0.5">
              <h1 className="hero-title text-4xl md:text-5xl font-bold leading-[1.1]">
                Crafting <span className="text-primary">Innovative</span>
                <br />
                and <span className="text-primary">Dynamic</span>
                <br />
                <span className="font-serif italic font-normal text-secondary-foreground">
                  Web Experiences with React
                </span>
              </h1>
              <p className="hero-sub text-base text-muted-foreground max-w-lg">
                I'm Rojan Shrestha, a developer focused on building reliable
                backend systems and RESTful APIs. I enjoy designing databases,
                developing secure APIs, and turning real-world problems into
                practical software solutions.
              </p>
            </div>
            {/* cta  */}
            <div className="hero-cta flex flex-wrap gap-4">
              <MagneticButton>
                <a href="#contact">
                  <Button size="lg">
                    Contact Me <ArrowRight className="w-5 h-5" />
                  </Button>
                </a>
              </MagneticButton>

              {/* animated svg btn */}
              <MagneticButton>
                <a
                  href="/cv/Rojan_Shrestha_CV.pdf"
                  download="Rojan_Shrestha_CV.pdf"
                  className="inline-flex"
                >
                  <AnimatedBorderButton>
                    <Download className="w-5 h-5" />
                    Download CV
                  </AnimatedBorderButton>
                </a>
              </MagneticButton>
            </div>

            {/* social  */}
            <div className="hero-social flex gap-4 items-center">
              <span className="text-sm text-muted-foreground">Follow:</span>
              {[
                { icon: Github, href: "https://github.com/RojanShrestha1992" },
                {
                  icon: Linkedin,
                  href: "https://www.linkedin.com/in/rojanshrestha1992/",
                },
                {
                  icon: Instagram,
                  href: "https://www.instagram.com/row.jann/",
                },
              ].map((social, idx) => (
                <MagneticButton key={idx} className="rounded-full">
                  <a
                    target="_blank"
                    href={social.href}
                    aria-label={social.icon.name}
                    className="flex p-2.5 rounded-full border border-[#e7cfc4] bg-surface text-muted-foreground hover:text-primary hover:border-primary/50 hover:-translate-y-0.5 transition-all duration-300"
                  >
                    <social.icon className="w-5 h-5" />
                  </a>
                </MagneticButton>
              ))}
            </div>
          </div>
          {/* right col img  */}
          <div className="hero-photo relative">
            <div className="hero-photo-inner relative max-w-xs mx-auto">
              <div className="absolute inset-0 rounded-3xl bg-primary/10 blur-2xl" />
              <div className="relative bg-surface border border-border rounded-3xl p-2 shadow-[0_16px_40px_rgba(73,58,45,0.10)]">
                <img
                  src={pfp}
                  alt="Rojan Shrestha"
                  className="w-full h-full aspect-4/5 object-cover rounded-2xl"
                />

                {/* floating badge */}
                <div className="absolute -bottom-4 -right-4 glass rounded-xl px-2.5 py-1.5 animate-float">
                  <div className="flex items-center gap-3">
                    <div className="w-3 h-3 bg-sage rounded-full animate-pulse" />
                    <span className="text-sm font-medium">
                      Available for work
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* skills  */}
        <div className="hero-skills mt-4">
          <p className="text-sm text-muted-foreground mb-1 text-center">
            Things I know
          </p>
          <div className="relative overflow-hidden">
            <div className="flex animate-marquee hover:[animation-play-state:paused]">
              {[...skills, ...skills, ...skills, ...skills].map(
                (skill, index) => (
                  <div key={index} className="shrink-0 px-6 py-2">
                    <span className="text-xl font-semibold text-muted-foreground/50 hover:text-muted-foreground transition-colors">
                      {skill}
                    </span>
                  </div>
                ),
              )}
            </div>
          </div>
        </div>
      </div>
      {/* scroll btn  */}
      {/* <div
        className="absolute bottom-1.5 left-1/2 -translate-x-1/2 
      animate-fade-in animation-delay-800"
      >
        <a
          href="#about"
          className="flex flex-col items-center gap-1 text-muted-foreground hover:text-primary transition-colors group"
        >
          <span className="text-xs uppercase tracking-wider">Scroll</span>
          <ChevronDown className="w-4 h-4 animate-bounce" />
        </a>
      </div> */}
    </section>
  );
};
