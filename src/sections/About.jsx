import { Code2, Lightbulb, Rocket, Users } from "lucide-react";

const highlights = [
  {
    icon: Code2,
    title: "Thoughtful Architecture",
    desctiption:
      "Applications structured for scalability, readability, and long-term growth.",
  },
  {
    icon: Rocket,

    title: "Performance First",
    desctiption:
      "Every interaction optimized for speed, smooth animations, and responsiveness.",
  },
  {
    icon: Lightbulb,
    title: "Practical Solutions",
    desctiption:
      "I prioritize solutions that work in production - not just in theory.",
  },
  {
    icon: Users,
    title: "Design Awareness",
    desctiption:
      "Strong attention to spacing, hierarchy, accessibility, and interaction design.",
  },
];
export const About = () => {
  return (
    <>
      <section id="about" className="py-32 relative overflow-hidden">
        <div className="container mx-auto px-6 relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* left col  */}
            <div className="space-y-8">
              <div className="animate-fade-in">
                <span className="text-secondary-foreground text-sm font-medium uppercase tracking-wider">
                  About Me
                </span>
              </div>

              <h2 className="text-4xl md:text-5xl font-bold leading-thght animate-fade-in animation-delay-100 text-secondary-foreground">
                Code with purpose.
                <span className="font-serif italic font-normal text-white">
                  {" "}
                  Design with intent.
                </span>
              </h2>

              <div className="space-y-4 text-muted-foreground animate-fade-in animation-delay-200">
                <p>
                  I enjoy building products where design and engineering work
                  together seamlessly. My approach is simple: write clean code,
                  respect the user’s time, and keep things maintainable for the
                  long run.
                </p>
                <p>
                  I’m especially interested in modern frontend architectures, UI
                  systems, and performance-driven development. Whether working
                  solo or in a team, I focus on shipping reliable and meaningful
                  features.
                </p>
              </div>

              <div className="glass rounded-2xl p-6 glow-border animate-fade-in animation-delay-300">
                <p className="text-lg font-medium  italic text-foreground">
                  I’m Rojan Shrestha, a passionate and dedicated BSc CSIT
                  student with a strong foundation in software development, web
                  technologies, and problem-solving. I enjoy building projects
                  that blend creativity with functionality and am always eager
                  to learn new skills and take on exciting challenges in
                  technology.
                </p>
              </div>
            </div>

            {/* right col */}
            <div className="grid sm:grid-cols-2 gap-6">
              {highlights.map((item, idx) => (
                <div
                  key={idx}
                  className="glass p-6 rounded-2xl animate-fade-in "
                  style={{ animationDelay: `${(idx + 1) * 100}ms` }}
                >
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 hover:bg-primary/20">
                    <item.icon className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
                  <p className="text-sm text-muted-foreground">
                    {item.desctiption}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
      ;
    </>
  );
};
