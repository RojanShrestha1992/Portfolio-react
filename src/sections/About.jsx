import { Code2, Lightbulb, Rocket, Users, Database } from "lucide-react";

const highlights = [
  {
    icon: Code2,
    title: "Thoughtful Architecture",
    desctiption:
      "Applications structured for scalability, readability, and long-term growth.",
  },
  {
    icon: Database,
    title: "Database Design",
    desctiption:
      "Designing optimized and normalized databases for complex systems.",
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
      <section
        id="about"
        className="py-28 bg-soft-surface relative overflow-hidden"
      >
        <div className="container mx-auto px-6 relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* left col  */}
            <div className="space-y-8">
              <div className="animate-fade-in">
                <span className="text-secondary-foreground text-sm font-semibold uppercase tracking-wider">
                  About Me
                </span>
              </div>

              <h2 className="text-4xl md:text-5xl font-bold leading-tight animate-fade-in animation-delay-100 text-foreground">
                Code with purpose.
                <span className="font-serif italic font-normal text-primary">
                  {" "}
                  Design with intent.
                </span>
              </h2>

              <div className="space-y-4 text-muted-foreground animate-fade-in animation-delay-200">
                <p>
                  I'm a CSIT student who loves building real-world applications
                  that solve problems and create value. I enjoy turning ideas
                  into clean, efficient and scalable solutions.
                </p>
              </div>

              <div className="card p-6 animate-fade-in animation-delay-300">
                <p className="text-lg font-medium italic text-foreground">
                  I specialize in building secure backend systems, designing
                  databases and creating seamless user experiences. I'm always
                  learning and exploring new technologies to level up my skills.
                </p>
              </div>
            </div>

            {/* right col */}
            <div className="grid sm:grid-cols-2 gap-6">
              {highlights.map((item, idx) => (
                <div
                  key={idx}
                  className="card card-hover p-6 animate-fade-in"
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
    </>
  );
};
