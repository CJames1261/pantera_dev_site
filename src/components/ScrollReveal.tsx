"use client";

import { useRef, useEffect, useState, type ReactNode } from "react";
import { useReducedMotion } from "../hooks/useReducedMotion";

interface ScrollRevealProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  direction?: "up" | "down" | "left" | "right";
  blur?: boolean;
  scale?: boolean;
}

const offsets: Record<string, string> = {
  up: "translateX(0) translateY(40px)",
  down: "translateX(0) translateY(-40px)",
  left: "translateX(40px) translateY(0)",
  right: "translateX(-40px) translateY(0)",
};

const ease = "cubic-bezier(0.32, 0.72, 0, 1)";

export default function ScrollReveal({
  children,
  className = "",
  delay = 0,
  direction = "up",
  blur = true,
  scale = false,
}: ScrollRevealProps) {
  const ref = useRef<HTMLDivElement>(null);
  const reduced = useReducedMotion();
  const [visible, setVisible] = useState(reduced);

  useEffect(() => {
    if (reduced) {
      setVisible(true);
      return;
    }
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.unobserve(el);
        }
      },
      { rootMargin: "-60px" },
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [reduced]);

  // When reduce-motion is on, render content in its final state with no
  // transforms, no blur, and no transition.
  if (reduced) {
    return (
      <div ref={ref} className={className} style={{ opacity: 1 }}>
        {children}
      </div>
    );
  }

  const hiddenTransform = `${offsets[direction]}${scale ? " scale(0.95)" : ""}`;
  const visibleTransform = `translateX(0) translateY(0)${scale ? " scale(1)" : ""}`;
  const d = `${delay}s`;

  return (
    <div
      ref={ref}
      className={className}
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? visibleTransform : hiddenTransform,
        filter: visible ? "blur(0px)" : blur ? "blur(8px)" : "blur(0px)",
        transition: `opacity 0.8s ${ease} ${d}, transform 0.8s ${ease} ${d}, filter 0.8s ${ease} ${d}`,
      }}
    >
      {children}
    </div>
  );
}
