import { useEffect, useRef } from "react";
import gsap from "gsap";

/**
 * Loader — a warm-toned page overlay that covers the viewport on
 * first load, then peels upward to reveal the portfolio behind it.
 * Respects prefers-reduced-motion by removing the overlay instantly.
 */
export const Loader = () => {
  const overlayRef = useRef(null);

  useEffect(() => {
    const el = overlayRef.current;
    if (!el) return;

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      el.style.display = "none";
      return;
    }

    const tl = gsap.timeline({
      onComplete: () => {
        el.style.display = "none";
      },
    });

    // hold for a beat, then peel up
    tl.to(el, {
      yPercent: -100,
      duration: 0.8,
      delay: 0.3,
      ease: "power3.inOut",
    });
  }, []);

  return (
    <div
      ref={overlayRef}
      className="fixed inset-0 z-[100] flex items-center justify-center"
      style={{ backgroundColor: "var(--color-background)" }}
      aria-hidden="true"
    >
      {/* subtle warm gradient on the loader */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(circle at 50% 50%, rgba(199,107,74,0.08), transparent 60%)",
        }}
      />
      {/* animated RS logo mark */}
      <div className="relative z-10 text-5xl font-extrabold tracking-tight font-display">
        <span className="text-foreground">RS</span>
        <span className="text-primary">.</span>
      </div>
    </div>
  );
};
