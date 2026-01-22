import { ArrowUpRight, Github } from "lucide-react";
import { AnimatedBorderButton } from "@/components/AnimatedBorderButton";
const projects = [
  {
    title: "E-commerce Website",
    description: "Dynamic e-commerce experience with intuitive navigation and interactive product features",
    image: "projects/e-com.png",
    tags: ["React", "Tailwind CSS"],
    link: "https://e-commerce-wheat-six-13.vercel.app/",
    github: "https://github.com/RojanShrestha1992/e-commerce-app",
  },
  {
    title: "Weather App",
    description: "Real-time weather insights with location search and dynamic updates.",
    image: "projects/weather.png",
    tags: ["React", "CSS"],
    link: "https://weather-app-react-seven-sigma.vercel.app/",
    github: "https://github.com/RojanShrestha1992/weather-app-react",
  },
  {
    title: "Recipe App",
    description: "Discover and explore delicious recipes with an intuitive search and clean interface.",
    image: "projects/recipe.png",
    tags: ["React", "Tailwind CSS"],
    link: "https://recipe-app-self-six.vercel.app/",
    github: "https://github.com/RojanShrestha1992/Recipe-app",
  },
  {
    title: "Quiz App",
    description: "Challenge your knowledge with a fun and interactive quiz experience.",
    image: "projects/ult.png",
    tags: ["React"],
    link: "https://ult-quiz.vercel.app/",
    github: "https://github.com/RojanShrestha1992/UltQuiz",
  },
];

export const Projects = () => {
  return (
    <>
      <section id="projects" className="py-20 relative overflow-hidden">
        <div className="absolute top-1/4 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 left-0 w-64 h-64 bg-highlight/5 rounded-full blur-3xl" />
        <div className="container mx-auto px-6 relative z-10">
          {/* sec heeader  */}
          <div className="text-center mx-auto max-w-3xl mb-16 ">
            <span className="text-secondary-foreground text-sm font-medium tracking-tight animate-fade-in">
              Featured Work 
            </span>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 mt-4 animate-fade-in animation-delay-200 text-secondary-foreground ">
              Projects that
              <span className="font-serif italic font-normal text-white">
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
          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project, idx) => (
              <div
                key={idx}
                className="group glass rounded-2xl overflow-hidden animate-fade-in md:row-span-1"
                style={{ animationDelay: `${(idx + 1) * 100}ms` }}
              >
                {/* image */}
                <div className="relative overflow-hidden aspect-video">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-linear-to-t from-card via-card/50 to-transparent opacity-60" />

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
                    <ArrowUpRight className="w-5 h-5 text-muted-foreground group-hover:text-primary hroup-hover:translate-x-1 group-hover:-translate-y-1 transiton-all" />
                  </div>
                  <p className="text-muted-foreground text-sm">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag, tagIdx) => (
                      <span key={tagIdx} className="px-4 py-1.5 rounded-full bg-surface text-xs font-medium border border-border/50 text-muted-foreground hover:border-primary/50 hover:text-primary transition-all duration-300">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>

           {/* view all cta  */}
           <div  className="text-center mt-12 animate-fade-in animation-delay-500">
            <a target="_blank" href="https://github.com/RojanShrestha1992">
           <AnimatedBorderButton >
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
