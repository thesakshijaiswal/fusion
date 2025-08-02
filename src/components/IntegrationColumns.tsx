"use client";

import Image from "next/image";
import { twMerge } from "tailwind-merge";
import { type IntegrationsType } from "@/sections/Integration";
import { motion } from "motion/react";
import { Fragment } from "react";

export default function IntegrationColumns(props: {
  integrations: IntegrationsType;
  className?: string;
  reverse?: boolean;
}) {
  const { integrations, className, reverse } = props;
  return (
    <motion.div
      initial={{
        y: reverse ? "-50%" : 0,
      }}
      animate={{
        y: reverse ? 0 : "-50%",
      }}
      transition={{
        duration: 15,
        repeat: Infinity,
        ease: "linear",
      }}
      className={twMerge("flex flex-col gap-4 pb-4", className)}
    >
      {Array.from({ length: 2 }).map((_, i) => (
        <Fragment key={i}>
          {integrations.map((integration) => (
            <div
              key={integration.name}
              className="rounded-3xl border border-white/20 bg-neutral-800 p-6"
            >
              <div className="flex justify-center">
                <div className="h-24 w-24 rounded-3xl bg-white p-4">
                  <Image src={integration.icon} alt={integration.name} />
                </div>
              </div>
              <h3 className="mt-6 text-center text-3xl">{integration.name}</h3>
              <p className="mt-2 text-center text-white/50">
                {integration.Description}
              </p>
            </div>
          ))}
        </Fragment>
      ))}
    </motion.div>
  );
}
