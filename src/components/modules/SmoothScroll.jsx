"use client";

import React from "react";
import Lenis from "lenis";
import { useEffect, useRef } from "react";

const SmoothScroll = ({ children }) => {
  const scrollRef = useRef(null);

  useEffect(() => {
    const lenis = new Lenis({
      el: scrollRef.current,
      smooth: true,
      duration: 0.5,
      easing: (t) => t * (2 - t),
      wheelMultiplier: 1.2,
    });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, []);

  return <div ref={scrollRef}>{children}</div>;
};

export default SmoothScroll;
