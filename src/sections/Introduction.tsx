"use client";

import Tag from "@/components/Tag";
import { useScroll, useTransform } from "motion/react";
import { useEffect, useRef, useState } from "react";
import { twMerge } from "tailwind-merge";

const text =
  "You're racing to create outstanding work, yet conventional design tools hinder your progress with their excessive complexity and steep learning curves.";
const words = text.split(" ");

export default function Introduction() {
  const scrollTarget = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: scrollTarget,
    offset: ["start end", "end end"],
  });
  const [currentWord, setCurrentWord] = useState(0);
  const wordIndex = useTransform(scrollYProgress, [0, 1], [0, words.length]);
  useEffect(() => {
    wordIndex.on("change", (latest) => setCurrentWord(latest));
  }, [wordIndex]);
  return (
    <section className="flex justify-center py-28 lg:py-40">
      <div className="container">
        <div className="sticky top-28">
          <div className="flex justify-center">
            <Tag>Introducing Fusion</Tag>
          </div>
          <div className="mt-10 text-center text-4xl font-medium md:text-6xl lg:text-7xl">
            <span>Your creative process deserves better.</span>{" "}
            <span>
              {words.map((word, wordIndex) => (
                <span
                  className={twMerge(
                    "text-white/35 transition duration-500",
                    wordIndex < currentWord && "text-white",
                  )}
                  key={wordIndex}
                >{`${word} `}</span>
              ))}
            </span>
            <span className="block text-lime-400">
              That&apos;s why we built Fusion.
            </span>
          </div>
        </div>
        <div className="h-[150vh]" ref={scrollTarget}></div>
      </div>
    </section>
  );
}
