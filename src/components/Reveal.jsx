import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger, useGSAP);

/**
 * Reveal — fades/slides its children into view the first time they
 * enter the viewport (GSAP ScrollTrigger scroll-reveal animation).
 */
export const Reveal = ({ children, delay = 0, className = "" }) => {
  const ref = useRef(null);

  useGSAP(
    () => {
      if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

      gsap.fromTo(
        ref.current,
        { clipPath: "inset(100% 0% 0% 0%)", opacity: 0, scale: 0.97 },
        {
          clipPath: "inset(0% 0% 0% 0%)",
          opacity: 1,
          scale: 1,
          duration: 0.9,
          delay: delay / 1000,
          ease: "power3.out",
          scrollTrigger: { trigger: ref.current, start: "top 88%" },
        },
      );
    },
    { scope: ref },
  );

  return (
    <div ref={ref} className={className}>
      {children}
    </div>
  );
};
