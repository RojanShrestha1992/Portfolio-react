import { ArrowUpRight, Github } from "lucide-react";
import { AnimatedBorderButton } from "@/components/AnimatedBorderButton";
import { BlurredImage } from "@/components/BlurredImage";
import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger, useGSAP);

// Tags rendered with a warmer terracotta tint (backend technologies)
const backendTags = [
  "Node.js",
  "Express",
  "MongoDB",
  "SQL",
  "MySQL",
  "PostgreSQL",
];

const projects = [
  {
    title: "StudyMitra",
    description:
      "A gamified study tracker that transforms studying into an engaging experience with Pomodoro timer, XP, levels, badges, streaks, and global leaderboards.",
    image: "projects/studymitra.png",
    tags: ["React", "Node.js", "Express", "MongoDB", "Zustand", "Tailwind CSS"],
    link: "https://study-tracker-ten-tau.vercel.app/",
    github: "https://github.com/RojanShrestha1992/study-tracker",
  },
  {
    title: "Blog App",
    description:
      "A full-stack MERN blogging platform with posts, comments, upvotes, and user profiles, featuring a modern responsive UI.",
    image: "projects/blog.png",
    tags: ["React", "Node.js", "Express", "MongoDB", "Tailwind CSS"],
    link: "https://blog-app-mocha-nine.vercel.app/",
    github: "https://github.com/RojanShrestha1992/blog-app",
  },
  {
    title: "E-commerce Website",
    description:
      "Dynamic e-commerce experience with intuitive navigation and interactive product features",
    image: "projects/e-com.png",
    tags: ["React", "Tailwind CSS"],
    link: "https://e-commerce-wheat-six-13.vercel.app/",
    github: "https://github.com/RojanShrestha1992/e-commerce-app",
  },
  {
    title: "Live Sports Streaming App",
    description:
      "A live sports streaming app built with React, providing real-time updates and seamless streaming of various sports events.",
    image: "projects/live.png",
    tags: ["React", "Tailwind CSS"],
    link: "https://live-sports-app-lac.vercel.app/",
    github: "https://github.com/RojanShrestha1992/live-sports-app",
  },

  {
    title: "Weather App",
    description:
      "Real-time weather insights with location search and dynamic updates.",
    image: "projects/weather.png",
    tags: ["React", "CSS"],
    link: "https://weather-app-react-seven-sigma.vercel.app/",
    github: "https://github.com/RojanShrestha1992/weather-app-react",
  },
  {
    title: "Recipe App",
    description:
      "Discover and explore delicious recipes with an intuitive search and clean interface.",
    image: "projects/recipe.png",
    tags: ["React", "Tailwind CSS"],
    link: "https://recipe-app-self-six.vercel.app/",
    github: "https://github.com/RojanShrestha1992/Recipe-app",
  },
];

export const Projects = () => {
  const sectionRef = useRef(null);

  useGSAP(
    () => {
      if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

      // --- card stagger reveal on scroll ---
      gsap.utils.toArray(".project-card").forEach((card) => {
        gsap.fromTo(
          card,
          { opacity: 0, y: 40 },
          {
            opacity: 1,
            y: 0,
            duration: 0.7,
            ease: "power3.out",
            scrollTrigger: { trigger: card, start: "top 88%" },
          },
        );
      });

      // --- image parallax (scrubbed) ---
      gsap.utils.toArray(".project-img-wrap").forEach((wrap) => {
        const img = wrap.querySelector("img");
        if (!img) return;
        gsap.fromTo(
          img,
          { yPercent: -10, scale: 1.2 },
          {
            yPercent: 10,
            scale: 1.2,
            ease: "none",
            scrollTrigger: {
              trigger: wrap,
              start: "top bottom",
              end: "bottom top",
              scrub: true,
            },
          },
        );
      });
    },
    { scope: sectionRef },
  );

  return (
    <>
      <section
        id="projects"
        ref={sectionRef}
        className="py-20 relative overflow-hidden"
      >
        <div className="absolute top-1/4 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 left-0 w-64 h-64 bg-highlight/5 rounded-full blur-3xl" />
        <div className="container mx-auto px-6 relative z-10">
          {/* sec heeader  */}
          <div className="text-center mx-auto max-w-3xl mb-16 ">
            <span className="text-secondary-foreground text-sm font-semibold tracking-wider uppercase animate-fade-in">
              Featured Work
            </span>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 mt-4 animate-fade-in animation-delay-200 text-foreground">
              Projects that
              <span className="font-serif italic font-normal text-primary">
                {" "}
                make an impact.
              </span>
            </h2>
            <p className="text-muted-foreground animate-fade-in animation-delay-200">
              Here are some of the projects I've worked on recently. Each
              project showcases my skills and dedication to creating
              high-quality solutions.
            </p>
          </div>

          {/* projects grid  */}
          <div className="grid md:grid-cols-3 gap-8">
            {projects.map((project, idx) => (
              <div
                key={idx}
                className="project-card group card card-hover rounded-2xl overflow-hidden"
                style={{ perspective: 1000 }}
                onMouseMove={(e) => {
                  const card = e.currentTarget;
                  const rect = card.getBoundingClientRect();
                  const x = (e.clientX - rect.left) / rect.width - 0.5;
                  const y = (e.clientY - rect.top) / rect.height - 0.5;
                  gsap.to(card, {
                    rotateY: x * 8,
                    rotateX: -y * 8,
                    duration: 0.3,
                    ease: "power2.out",
                    transformPerspective: 1000,
                  });
                }}
                onMouseLeave={(e) => {
                  gsap.to(e.currentTarget, {
                    rotateY: 0,
                    rotateX: 0,
                    duration: 0.5,
                    ease: "elastic.out(1, 0.5)",
                  });
                }}
              >
                {/* image */}
                <div className="project-img-wrap relative overflow-hidden aspect-video">
                  <BlurredImage
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full group-hover:brightness-110 transition-[filter] duration-500"
                  />
                  <div className="absolute inset-0 bg-linear-to-t from-surface/90 via-surface/30 to-transparent" />

                  {/* live badge */}
                  <div className="absolute top-3 left-3 flex items-center gap-1.5 rounded-full bg-surface/90 backdrop-blur px-2.5 py-1 border border-border">
                    <span className="w-1.5 h-1.5 bg-sage rounded-full" />
                    <span className="text-xs font-medium text-sage">Live</span>
                  </div>

                  {/* overlay link  */}
                  <div className="absolute inset-0 flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100 transition-all duration-300">
                    <a
                      href={project.link}
                      target="_black"
                      className="p-3 rounded-full glass hover:bg-primary hover:text-primary-foreground transition-all"
                    >
                      <ArrowUpRight className="w-5 h-5" />
                    </a>

                    <a
                      href={project.github}
                      target="_black"
                      className="p-3 rounded-full glass hover:bg-primary hover:text-primary-foreground transition-all"
                    >
                      <Github className="w-5 h-5" />
                    </a>
                  </div>
                </div>
                {/* content  */}
                <div className="p-6 space-y-4">
                  <div className="flex items-start justify-between">
                    <h3 className="text-xl font-semibold group-hover:text-primary transition-colors">
                      {project.title}
                    </h3>
                    <ArrowUpRight className="w-5 h-5 text-muted-foreground group-hover:text-primary group-hover:translate-x-1 group-hover:-translate-y-1 transition-all" />
                  </div>
                  <p className="text-muted-foreground text-sm">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag, tagIdx) => (
                      <span
                        key={tagIdx}
                        className={`px-4 py-1.5 rounded-full text-xs font-medium border transition-all duration-300 ${
                          backendTags.includes(tag)
                            ? "tag-backend hover:border-primary/40"
                            : "tag hover:border-primary/40 hover:text-primary"
                        }`}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* view all cta  */}
          <div className="text-center mt-12 animate-fade-in animation-delay-500">
            <a target="_blank" href="https://github.com/RojanShrestha1992">
              <AnimatedBorderButton>
                View All Projects
                <ArrowUpRight className="w-5 h-5" />
              </AnimatedBorderButton>
            </a>
          </div>
        </div>
      </section>
    </>
  );
};
