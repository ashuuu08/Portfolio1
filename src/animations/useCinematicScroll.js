import { useEffect, useRef } from "react";

/**
 * Helper to safely retrieve GSAP and ScrollTrigger whether loaded
 * via window CDN, module import, or fallback.
 */
export function getGsap() {
  if (typeof window !== "undefined" && window.gsap) {
    if (window.ScrollTrigger && !window.__gsapRegistered) {
      window.gsap.registerPlugin(window.ScrollTrigger);
      window.__gsapRegistered = true;
    }
    return {
      gsap: window.gsap,
      ScrollTrigger: window.ScrollTrigger || null,
    };
  }
  return { gsap: null, ScrollTrigger: null };
}

/**
 * Custom hook to execute GSAP animations inside a safe context
 * with responsive matchMedia, reduced-motion awareness, and automatic cleanup.
 *
 * @param {Function} setupAnimations - Callback (self, isDesktop) => void
 * @param {Array} dependencies - React effect dependencies
 */
export function useCinematicScroll(setupAnimations, dependencies = []) {
  const containerRef = useRef(null);

  useEffect(() => {
    const { gsap, ScrollTrigger } = getGsap();
    if (!gsap || !containerRef.current) return;

    // Check prefers-reduced-motion
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReducedMotion) {
      // Keep static styling without heavy scroll transforms
      return;
    }

    // Pass containerRef.current as scope, and use the parameter self (not uninitialized outer variable)
    const ctx = gsap.context((self) => {
      if (typeof gsap.matchMedia === "function") {
        const mm = gsap.matchMedia();

        // Desktop: Full cinematic experience (> 1024px)
        mm.add("(min-width: 1024px)", () => {
          setupAnimations(self, true);
        });

        // Mobile / Tablet: Simplified scroll experience (<= 1023px)
        mm.add("(max-width: 1023px)", () => {
          setupAnimations(self, false);
        });
      } else {
        const isDesktop = window.innerWidth >= 1024;
        setupAnimations(self, isDesktop);
      }
    }, containerRef.current);

    // Refresh ScrollTrigger once DOM layout stabilizes
    const timer = setTimeout(() => {
      if (ScrollTrigger) {
        ScrollTrigger.refresh();
      }
    }, 200);

    return () => {
      clearTimeout(timer);
      if (ctx && typeof ctx.revert === "function") {
        ctx.revert(); // Full cleanup of GSAP timeline and scroll triggers
      }
    };
  }, dependencies);

  return containerRef;
}
