import { useEffect, useState } from "react";
import { ArrowUp } from "lucide-react";
import gsap from "gsap";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";

gsap.registerPlugin(ScrollToPlugin);

export const BackToTop = () => {
  const [visible, setVisible] = useState(false);
  const [pct, setPct] = useState(0);

  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY;
      setVisible(y > 480);
      const maxScroll =
        document.documentElement.scrollHeight - window.innerHeight;
      setPct(maxScroll > 0 ? Math.round((y / maxScroll) * 100) : 0);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollToTop = () => {
    gsap.to(window, { duration: 0.9, scrollTo: 0, ease: "power2.inOut" });
  };

  return (
    <div
      className={`fixed bottom-6 right-6 z-50 flex items-center gap-3 transition-all duration-300 ${
        visible
          ? "opacity-100 translate-y-0 pointer-events-auto"
          : "opacity-0 translate-y-4 pointer-events-none"
      }`}
    >
      {/* percentage counter */}
      <span className="text-xs font-medium text-muted-foreground tabular-nums bg-surface/90 backdrop-blur-sm border border-border rounded-full px-3 py-1.5 shadow-sm">
        {pct}%
      </span>
      <button
        onClick={scrollToTop}
        aria-label="Back to top"
        className="p-3 rounded-full bg-primary text-primary-foreground shadow-lg shadow-primary/25 transition-all duration-300 hover:bg-primary-hover hover:-translate-y-1"
      >
        <ArrowUp className="w-5 h-5" />
      </button>
    </div>
  );
};
