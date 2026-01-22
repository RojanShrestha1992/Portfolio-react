import { ChevronLeft, ChevronRight, Quote } from "lucide-react";
import { useState } from "react";

const testimonials = [
  {
  quote:
    "Rojan consistently delivers clean, efficient code and turns complex problems into simple solutions. His dedication and skill are impressive.",
  author: "Sarah Chen",
  role: "CTO, Tech Innovators Inc.",
  avatar:
    "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop",
},
{
  quote:
    "Working with Rojan transformed our project timeline. He provided high-quality work ahead of schedule and exceeded expectations.",
  author: "Michael Rodriguez",
  role: "Product Manager, Digital Solutions",
  avatar:
    "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop",
},
{
  quote:
    "Rojan's expertise in React and modern frontend development allowed us to rebuild our interface smoothly and efficiently.",
  author: "Emily Watson",
  role: "Engineering Lead, StartUp Labs",
  avatar:
    "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop",
},
{
  quote:
    "Rojan is not only technically gifted but also a fantastic collaborator. His presence improves team productivity and morale.",
  author: "David Kim",
  role: "CEO, Innovation Hub",
  avatar:
    "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop",
},

];

export const Testimonials = () => {
  const [activeIdx, setActiveIdx] = useState(0);
  const next = () => {
    setActiveIdx((prev) => (prev + 1) % testimonials.length);
  };
  const previous = () => {
    setActiveIdx(
      (prev) => (prev - 1 + testimonials.length) % testimonials.length
    );
  };

  return (
    <>
      <section id="testimonials" className="py-20 relative overflow-hidden">
        <div
          className="absolute top-1/2 left-1/2 w-800px h-800px bg-primary/5
        rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"
        />
        <div
          className="container mx-auto 
      px-6 relative z-10"
        >
          {/* Section Header */}
          <div
            className="text-center max-w-3xl 
        mx-auto mb-16"
          >
            <span
              className="text-secondary-foreground 
          text-sm font-medium tracking-wider 
          uppercase animate-fade-in"
            >
              What People Say
            </span>
            <h2
              className="text-4xl md:text-5xl 
          font-bold mt-4 mb-6 animate-fade-in 
          animation-delay-100 text-secondary-foreground"
            >
              Kind words from{" "}
              <span
                className="font-serif italic 
            font-normal text-white"
              >
                amazing people.
              </span>
            </h2>
          </div>

          {/* Testimonial Carousel */}
          <div className="max-w-4xl mx-auto">
            <div className="relative w-full h-full">
              <div className="glass p-8 rounded-3xl md:p-12 glow-border animate-fade-in animation-delay-200">
                {/* main testi  */}
                <div className="absolute -top-4 left-8 w-12 h-12 rounded-full bg-primary flex items-center justify-center">
                  <Quote className="w-6 h-6 text-primary-foreground" />
                </div>
                <blockquote className="text-xl md:text-2xl font-medium leading-relaxed mb-8 pt-4">
                  "{testimonials[activeIdx].quote}"
                </blockquote>

                <div className="flex items-center gap-4">
                  <img
                    className="w-14 h-14 rounded-full object-cover ring-2 ring-primary/20"
                    src={testimonials[activeIdx].avatar}
                    alt={testimonials[activeIdx].author}
                  />
                  <div>
                    <div className="font-semibold">
                      {testimonials[activeIdx].author}
                    </div>
                    <div className="text-sm text-muted-foreground">
                      {testimonials[activeIdx].role}
                    </div>
                  </div>
                </div>
              </div>
              {/* testi switch */}
              <div className="flex items-center justify-center gap-4 mt-8">
                <button className="p-3 rounded-full glass hover:bg-primary/10 hover:text-primary transition-all" onClick={previous}>
                  <ChevronLeft />
                </button>
                <div className="flex gap-2">
                  {testimonials.map((_, idx) => (
                    <button onClick={() => setActiveIdx(idx)}
                      className={`w-2 h-2 rounded-full transition-all duration-300 ${
                        idx === activeIdx
                          ? "w-8 bg-primary"
                          : "bg-muted-foreground/30 hover: bg-muted-foreground/50"
                      }`}
                    />
                  ))}
                </div>
                <button onClick={next} className="p-3 rounded-full glass hover:bg-primary/10 hover:text-primary transition-all">
                  <ChevronRight />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
