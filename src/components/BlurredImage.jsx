import { useRef } from "react";
import gsap from "gsap";

/**
 * BlurredImage — shows a warm-toned blurred placeholder, then
 * smoothly reveals the sharp image via GSAP once it finishes loading.
 * Native `loading="lazy"` handles deferral; GSAP handles the aesthetic.
 */
export const BlurredImage = ({ src, alt, className = "", ...props }) => {
  const imgRef = useRef(null);
  const overlayRef = useRef(null);

  const handleLoad = () => {
    if (!imgRef.current || !overlayRef.current) return;
    const tl = gsap.timeline();
    tl.to(imgRef.current, {
      filter: "blur(0px)",
      scale: 1,
      duration: 0.7,
      ease: "power2.out",
    }).to(
      overlayRef.current,
      { opacity: 0, duration: 0.5, ease: "power2.out" },
      0,
    );
  };

  return (
    <div className={`relative overflow-hidden ${className}`}>
      <img
        ref={imgRef}
        src={src}
        alt={alt}
        loading="lazy"
        className="w-full h-full object-cover scale-105"
        style={{ filter: "blur(20px)" }}
        onLoad={handleLoad}
        {...props}
      />
      {/* warm-toned loading overlay */}
      <div
        ref={overlayRef}
        className="absolute inset-0 bg-soft-surface"
        aria-hidden="true"
      />
    </div>
  );
};
