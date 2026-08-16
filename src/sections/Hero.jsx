import { Button } from "@/components/Button";
import {
  ArrowRight,
  Github,
  Linkedin,
  Instagram,
  Download,
} from "lucide-react";
import { AnimatedBorderButton } from "@/components/AnimatedBorderButton";
// import pfp from "/img/profile-photo-2.png";
import pfp from "/img/profile.png";

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
  return (
    <section
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

      {/* content  */}
      <div className="container mx-auto px-6 pt-20 pb-12 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* left col  text */}
          <div className="space-y-8">
            <div className="animate-fade-in">
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-soft-accent border border-[#f0d7cb] text-sm font-medium text-primary">
                <span className="w-2 h-2 bg-primary rounded-full animate-pulse" />
                Full Stack Developer
              </span>
            </div>

            {/* headline */}

            <div className="space-y-0.5">
              <h1 className="text-4xl md:text-5xl font-bold leading-[1.1] animate-fade-in animation-delay-100">
                Crafting <span className="text-primary">Innovative</span>
                <br />
                and <span className="text-primary">Dynamic</span>
                <br />
                <span className="font-serif italic font-normal text-secondary-foreground">
                  Web Experiences with React
                </span>
              </h1>
              <p className="text-base text-muted-foreground max-w-lg animate-fade-in animation-delay-500">
                I build scalable web applications and RESTful APIs with modern
                technologies. Currently focused on backend development and
                system design.
              </p>
            </div>
            {/* cta  */}
            <div className="flex flex-wrap gap-4 animate-fade-in animation-delay-600">
              <a href="#contact">
                <Button
                  size="lg"
                  className="animate-fade-in animation-delay-700"
                >
                  Contact Me <ArrowRight className="w-5 h-5" />
                </Button>
              </a>

              {/* animated svg btn */}
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
            </div>

            {/* social  */}
            <div className="flex gap-4 items-center animate-fade-in animation-delay-100">
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
                <a
                  target="_blank"
                  key={idx}
                  href={social.href}
                  aria-label={social.icon.name}
                  className="p-2.5 rounded-full border border-[#e7cfc4] bg-surface text-muted-foreground hover:text-primary hover:border-primary/50 hover:-translate-y-0.5 transition-all duration-300"
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>
          {/* right col img  */}
          <div className="relative animate-fade-in animation-delay-300">
            <div className="relative max-w-xs mx-auto">
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
        <div className="mt-4 animate-fade-in animation-delay-600">
          <p className="text-sm text-muted-foreground mb-1 text-center">
            Things I know
          </p>
          <div className="relative overflow-hidden">
            <div className="flex animate-marquee">
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
            4
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
