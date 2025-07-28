"use client";

import Image from "next/image";
import Button from "@/components/Button";
import Pointer from "@/components/Pointer";
import designExample1Image from "@/assets/Images/Design-Ex-1.png";
import designExample2Image from "@/assets/Images/Design-Ex-2.png";
import { motion, useAnimate } from "motion/react";
import { useEffect } from "react";
import cursorYouImage from "@/assets/Images/cursor-you.svg";

export default function Hero() {
  const [leftDesignScope, leftDesignAnimate] = useAnimate();
  const [leftPointerScope, leftPointerAnimate] = useAnimate();
  const [rightDesignScope, rightDesignAnimate] = useAnimate();
  const [rightPointerScope, rightPointerAnimate] = useAnimate();

  useEffect(() => {
    leftDesignAnimate([
      [leftDesignScope.current, { opacity: 1 }, { duration: 0.5 }],
      [leftDesignScope.current, { y: 0, x: 0 }, { duration: 0.5 }],
    ]);

    leftPointerAnimate([
      [leftPointerScope.current, { opacity: 1 }, { duration: 0.5 }],
      [leftPointerScope.current, { y: 0, x: -100 }, { duration: 0.5 }],
      [
        leftPointerScope.current,
        { x: 0, y: [0, 16, 0] },
        { duration: 0.5, ease: "easeInOut" },
      ],
    ]);

    rightDesignAnimate([
      [rightDesignScope.current, { opacity: 1 }, { duration: 0.5, delay: 1.5 }],
      [rightDesignScope.current, { x: 0, y: 0 }, { duration: 0.5 }],
    ]);

    rightPointerAnimate([
      [
        rightPointerScope.current,
        { opacity: 1 },
        { duration: 0.5, delay: 1.5 },
      ],
      [rightPointerScope.current, { x: 175, y: 0 }, { duration: 0.5 }],
      [
        rightPointerScope.current,
        { x: 0, y: [0, 20, 0] },
        { duration: 0.5, ease: "easeInOut" },
      ],
    ]);
  }, []);

  return (
    <section
      className="flex items-center justify-center overflow-x-clip py-24"
      style={{ cursor: `url(${cursorYouImage.src}), auto` }}
    >
      <div className="relative container">
        <motion.div
          ref={leftDesignScope}
          initial={{ opacity: 0, y: 100, x: -100 }}
          drag
          className="custom:block absolute top-16 -left-28 hidden"
        >
          <Image
            src={designExample1Image}
            alt="Design-Ex-1 image"
            className="h-[500px] w-full"
            draggable="false"
          />
        </motion.div>
        <motion.div
          ref={leftPointerScope}
          initial={{ opacity: 0, y: 100, x: -200 }}
          className="custom:block absolute top-96 left-72 hidden"
        >
          <Pointer name="Leonardo" />
        </motion.div>
        <motion.div
          ref={rightDesignScope}
          initial={{ opacity: 0, x: 100, y: 100 }}
          drag
          className="custom:block absolute -top-16 -right-28 hidden"
        >
          <Image
            src={designExample2Image}
            alt="Design-Ex-2 image"
            className="h-[500px] w-full"
            draggable="false"
          />
        </motion.div>
        <motion.div
          ref={rightPointerScope}
          initial={{ opacity: 0, x: 275, y: 100 }}
          className="custom:block absolute -top-4 right-90 hidden"
        >
          <Pointer name="Sakshi" color="blue" />
        </motion.div>
        <div className="flex justify-center">
          <div className="inline-flex rounded-full bg-gradient-to-r from-purple-400 to-pink-400 px-3 py-1 font-semibold text-neutral-950">
            ✨ $7.5M Seed round raised
          </div>
        </div>
        <h1 className="mx-auto mt-6 max-w-5xl text-center text-6xl font-medium md:text-7xl lg:text-8xl">
          Impactful Design, Created effortlessly
        </h1>
        <p className="mx-auto mt-8 max-w-2xl text-center text-xl text-white/50">
          Design without distractions. Fusion blends power and simplicity,
          helping you stay focused, fast, and fully in flow.
        </p>
        <form className="mx-auto mt-8 flex max-w-lg rounded-full border border-white/15 p-2">
          <input
            type="email"
            placeholder="Enter Your email"
            className="w-full bg-transparent px-4 outline-none md:flex-1"
          />
          <Button
            type="submit"
            variant="primary"
            className="whitespace-nowrap"
            size="sm"
          >
            Sign Up
          </Button>
        </form>
      </div>
    </section>
  );
}
