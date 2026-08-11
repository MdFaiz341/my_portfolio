

"use client";

import { useEffect } from "react";

export default function ScrollToTop() {
  useEffect(() => {
    // Prevent browser from restoring the previous scroll position
    if ("scrollRestoration" in window.history) {
      window.history.scrollRestoration = "manual";
    }

    // Start portfolio at the Hero section
    window.scrollTo(0, 0);
  }, []);

  return null;
}