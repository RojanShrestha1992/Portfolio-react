const experiences = [
  {
    period: "2023 - Present",
    title: "Amrit Science Campus, Tribhuvan University",
    description:
      "Currently studying BSc CSIT with hands-on experience in programming, data structures, and web development.",
  },

  {
    period: "2021 - 2023",
    title: "KIST College & SS, Kamalpokhari",
    description:
      "Graduated from KIST College & SS with a GPA of 3.86, reflecting consistency, discipline, and a strong academic background that supports my growth in technology and development.",
  },
];
export const Education = () => {
  return (
    <>
      <section
        id="education"
        className="py-24 bg-[#fbf8f2] relative overflow-hidden"
      >
        <div
          className="absolute top-1/2 left-1/4 w-96
       h-96 bg-primary/5 rounded-full blur-3xl -translate-y-1/2"
        />
        <div className="container mx-auto px-6 relative z-10">
          {/* section header  */}
          <div className="max-w-3xl mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6 animate-fade-in animation-delay-100 text-foreground">
              My
              <span className="font-serif italic font-normal ml-2 text-primary">
                Education
              </span>
            </h2>
            <p className="text-muted-foreground animate-fade-in animation-delay-200">
              Building a strong academic foundation has been key to my growth as
              a technology enthusiast. From excelling in higher secondary
              studies to pursuing a BSc in CSIT, I have continuously focused on
              developing the knowledge and skills necessary for a career in
              software development and technology.
            </p>
          </div>

          {/* timeline  */}
          <div className="relative">
            <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-0.5 bg-linear-to-b from-primary/60 via-primary/25 to-transparent md:-translate-x-1/2" />

            {/* experience  */}
            <div className="space-y-12">
              {experiences.map((exp, idx) => (
                <div
                  key={idx}
                  className="relative grid md:grid-cols-2 gap-8 animate-fade-in"
                  style={{ animationDelay: `${(idx + 1) * 100}ms` }}
                >
                  {/* timeline dot */}
                  <div className="absolute left-0 md:left-1/2 top-0 h-3 w-3 bg-primary rounded-full -translate-x-1/2 ring-4 ring-background z-10">
                    {exp.current && (
                      <span className="absolute inset-0 rounded-full bg-primary animate-ping opacity-75" />
                    )}
                  </div>

                  {/* content  */}
                  <div
                    className={`pl-8 md:pl-0 
                      ${
                        idx % 2 === 0
                          ? "md:pr-16 md:text-right"
                          : "md:col-start-2 md:pl-16"
                      }
                    `}
                  >
                    <div className="card card-hover p-6">
                      <span className="text-sm text-primary font-semibold">
                        {exp.period}
                      </span>
                      <h3 className="text-xl font-semibold mt-2">
                        {exp.title}
                      </h3>
                      <p className="text-muted-foreground text-sm mt-4">
                        {exp.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
