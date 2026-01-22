/* eslint-disable react-hooks/purity */
import { Button } from "@/components/Button";
import {
  ArrowRight,
  Github,
  Linkedin,
  Instagram,
  ChevronDown,
  Download,
} from "lucide-react";
import { AnimatedBorderButton } from "@/components/AnimatedBorderButton";
// import {back} from "@/public/img/hero-bg.jpg"
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
  "Canva"
];

export const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* bg */}
      <div className="absolute inset-0">
        <img
          src="img/hero-bg.jpg"
          alt="Hero image"
          className="w-full h-full object-cover opacity-40"
        />
      </div>
      <div className="absolute inset-0 bg-linear-to-b from-background/20 via-background/80 to-background" />

      {/* green dots */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(30)].map(() => (
          <div
            className="absolute w-1.5 h-1.5 rounded-full opacity-60"
            style={{
              backgroundColor: "#20b2A6",
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animation: `slow-drift ${
                15 + Math.random() * 20
              }s ease-in-out infinite`,
              animationDelay: `${Math.random() * 5}s`,
            }}
          ></div>
        ))}
      </div>

      {/* content  */}
      <div className="container mx-auto px-6 pt-20 pb-12 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* left col  text */}
          <div className="space-y-8">
            <div className="animate-fade-in">
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass text-sm text-primary">
                <span className="w-2 h-2 bg-primary rounded-full animate-pulse" />
                Developer React
              </span>
            </div>

            {/* headline */}

            <div className="space-y-0.5">
              <h1 className="text-3xl md:text-5xl lg:text-4xl font-bold leading-tight animate-fade-in animation-delay-100">
                Crafting{" "}
                <span className="text-primary glow-text">Innovative</span>
                <br />
                and Dynamic
                <br />
                <span className="text-serif italic font-normal text-white">
                  Web Experiences with React
                </span>
              </h1>
              <p className="text-base text-muted-foreground max-w-lg animate-fade-in animation-delay-500">
                I’m a web developer who focuses on clarity, performance, and real-world usability. I build fast, visually refined web applications that solve problems instead of adding complexity.
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
              <AnimatedBorderButton>
                <Download className="w-5 h-5" />
                Download CV
              </AnimatedBorderButton>
            </div>

            {/* social  */}
            <div className="flex gap-4 items-center animate-fade-in animation-delay-100">
              <span className="text-sm text-muted-foreground">Follow:</span>
              {[
                { icon: Github, href: "https://github.com/RojanShrestha1992" },
                { icon: Linkedin, href: "#" },
                { icon: Instagram, href: "https://www.instagram.com/row.jann/" },
              ].map((social, idx) => (
                <a
                target="_blank"
                  key={idx}
                  href={social.href}
                  className="p-2 rounded-full glass hover:bg-primary/10 hover:text-primary transition-all duration-300"
                >
                  {<social.icon className="w-5 h-5" />}
                </a>
              ))}
            </div>
          </div>
          {/* right col img  */}
          <div className="relative animate-fade-in animation-delay-300">
            <div className="relative max-w-xs mx-auto">
              <div className="absolute inset-0 rounded-3xl bg-linear-to-br from-primary/30 via-transparent to-primary/10 blur-xl animate-pulse"></div>
              <div className="relative glass rounded-3xl p-2 glow-border">
                <img
                  src="img/profile-photo-2.png"
                  alt="name"
                  className="w-full h-full aspect-4/5 object-cover rounded-2xl"
                />

                {/* floating badge */}
                <div className="absolute -bottom-4 -right-4 glass rounded-xl px-2.5 py-1.5 animate-float">
                  <div className="flex items-center gap-3">
                    <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse" />
                    <span className="text-sm font-medium">
                      Available for work
                    </span>
                  </div>
                </div>
                {/* stats */}
                <div className="absolute -top-4 -left-4 glass rounded-xl px-2.5 py-1.5 animate-float animation-delay-500">
                  <div className="text-2xl font-bold text-primary">2+</div>
                  <div className="text-xs text-muted-foreground">
                    Years Experience
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
              {[...skills, ...skills,...skills,...skills].map((skill, index) => (
                <div key={index} className="shrink-0 px-6 py-2">
                  <span className="text-xl font-semibold text-muted-foreground/50 hover:text-muted-foreground transition-colors">
                    {skill}
                  </span>
                </div>
              ))}
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
