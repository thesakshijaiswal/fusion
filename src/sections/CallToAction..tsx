"use client";

import { AnimationPlaybackControls, motion, useAnimate } from "motion/react";
import { useEffect, useRef, useState } from "react";

export default function CallToAction() {
  const [isHovered, setIsHovered] = useState(false);
  const animation = useRef<AnimationPlaybackControls>(null);
  const [scope, animate] = useAnimate();
  useEffect(() => {
    animation.current = animate(
      scope.current,
      { x: "-50%" },
      { duration: 30, ease: "linear", repeat: Infinity },
    );
  }, []);

  useEffect(() => {
    if (animation.current) {
      if (isHovered) {
        animation.current.speed = 0.5;
      } else {
        animation.current.speed = 1;
      }
    }
  }, [isHovered]);
  return (
    <section className="py-24">
      <div className="flex overflow-x-clip p-4">
        <motion.div
          ref={scope}
          animate={{ x: "-50%" }}
          transition={{ duration: 30, ease: "linear", repeat: Infinity }}
          className="group flex flex-none cursor-pointer gap-16 pr-16 text-7xl font-medium"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          {Array.from({ length: 10 }).map((_, i) => (
            <div key={i} className="flex items-center gap-16">
              <span className="text-lime-400">&#10038;</span>
              <span className="group-hover:text-lime-400">Try it for free</span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
