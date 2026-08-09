"use client";

import type { ReactNode, MouseEvent } from "react";

interface SpotlightCardProps {
  children: ReactNode;
  className?: string;
}

export function SpotlightCard({
  children,
  className = "",
}: SpotlightCardProps) {
  const handleMouseMove = (event: MouseEvent<HTMLDivElement>) => {
    const card = event.currentTarget;

    const rect = card.getBoundingClientRect();

    const x = event.clientX - rect.left;
    const y = event.clientY - rect.top;

    card.style.setProperty("--mouse-x", `${x}px`);
    card.style.setProperty("--mouse-y", `${y}px`);
  };

  return (
    <div
      className={`spotlight-card ${className}`}
      onMouseMove={handleMouseMove}
    >
      <div className="spotlight-glow" />

      <div className="relative z-10 h-full">
        {children}
      </div>
    </div>
  );
}