"use client";

import { motion } from "framer-motion";
import React from "react";
import { AuroraBackground } from "../components/ui/aurora-background";

export default function Home() {
  return (
    <AuroraBackground>
      <motion.div
        initial={{ opacity: 0.0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.3,
          duration: 0.8,
          ease: "easeInOut",
        }}
      >
        <div className="relative flex flex-col gap-4 items-center justify-center px-4">


        <div className="text-3xl md:text-7xl font-bold dark:text-white text-center">
          Escape the fake high, Reach real heights
        </div>
        <div className="font-extralight text-base md:text-4xl dark:text-neutral-200 py-4">
          Hi im Ryan
        </div>
        </div>
      </motion.div>
    </AuroraBackground>
  );
}
