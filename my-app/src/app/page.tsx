"use client";

import { motion } from "framer-motion";
import React from "react";
import { AuroraBackground } from "../components/ui/aurora-background";

export default function Home() {
  return (
    <AuroraBackground className="relative">
      <motion.div
        initial={{ opacity: 0.0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.3,
          duration: 0.8,
          ease: "easeInOut",
        }}
      >
        <div className=" flex flex-col gap-4 items-center justify-center px-4">


          <div className="text-3xl md:text-7xl font-bold dark:text-white text-center">
            Escape the fake high, Reach real heights
          </div>
          <div className="font-extralight text-base md:text-4xl dark:text-neutral-200 py-4">
            dont do drugs
          </div>

          <div className="bg-neutral-50 w-80 fixed bottom-0 right-0 inline-flex">
            <div className="text-xl">
              <p className="underline underline-offset-4">
              Dont be afraid to get help:
              </p>
              <ul className="text-sm list-disc ">
                <li>
                  General Enquiries: 6389 2000
                </li>
                <li> 
                  Appointments: 6389 2200
                </li>
                <li>
                  Mental Health Hotline: 6389 2222
                </li>
              </ul>
            </div>

            <div>  
              <img src="/drug_abuse.png" className="size-20"></img>
            </div>
            

          </div>
        </div>
      </motion.div>
    </AuroraBackground>
  );
}
