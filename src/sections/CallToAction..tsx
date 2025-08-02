"use client";

import { motion } from "motion/react";
export default function CallToAction() {
  return (
    <section className="py-24">
      <div className="flex overflow-x-clip p-4">
        <motion.div
          animate={{ x: "-50%" }}
          transition={{ duration: 30, ease: "linear", repeat: Infinity }}
          className="flex flex-none gap-16 text-7xl font-medium"
        >
          {Array.from({ length: 10 }).map((_, i) => (
            <div key={i} className="flex items-center gap-16">
              <span className="text-lime-400">&#10038;</span>
              <span>Try it for free</span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
