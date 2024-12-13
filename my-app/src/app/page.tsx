"use client";

import { motion } from "framer-motion";
import React from "react";
import { AuroraBackground } from "../components/ui/aurora-background";
import WorldMap from "@/components/ui/world-map";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

export default function Home() {
  return (
    <div>
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
          <div className="flex flex-col gap-4 items-center justify-center px-4">
            <div className="text-3xl md:text-7xl font-bold dark:text-white text-center">
              Escape the <span className="text-red-500">fake high</span>, Reach{" "}
              <span className="text-green-500">real heights</span>
            </div>
            <div className="font-extralight text-base md:text-4xl dark:text-neutral-200 py-4">
              Dont do drugs
            </div>

            <div className="bg-neutral-50 w-80 fixed bottom-0 right-0 inline-flex">
              <div className="text-xl">
                <p className="underline underline-offset-4">
                  Dont be afraid to get help:
                </p>
                <ul className="text-sm list-disc ">
                  <li>General Enquiries: 6389 2000</li>
                  <li>Appointments: 6389 2200</li>
                  <li>Mental Health Hotline: 6389 2222</li>
                </ul>
              </div>
              <div>
                <img src="/drug_abuse.png" className="size-20" alt="Drug Abuse" />
              </div>
            </div>
          </div>
        </motion.div>
      </AuroraBackground>
      <div className=" py-40 dark:bg-black bg-white w-full">
      <div className="max-w-7xl mx-auto text-center">
        <p className="font-bold text-xl md:text-4xl dark:text-white text-black">
          All over the {" "}
          <span className="text-neutral-400">
            {"World".split("").map((word, idx) => (
              <motion.span
                key={idx}
                className="inline-block"
                initial={{ x: -10, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: idx * 0.04 }}
              >
                {word}
              </motion.span>
            ))}
          </span>
        </p>
        <p className="text-sm md:text-lg text-neutral-500 max-w-2xl mx-auto py-4">
          Drugs are being abused.
        </p>
      </div>
      <WorldMap
        dots={[
          {
            start: {
              lat: 64.2008,
              lng: -149.4937,
            }, // Alaska (Fairbanks)
            end: {
              lat: 34.0522,
              lng: -118.2437,
            }, // Los Angeles
          },
          {
            start: { lat: 64.2008, lng: -149.4937 }, // Alaska (Fairbanks)
            end: { lat: -15.7975, lng: -47.8919 }, // Brazil (Brasília)
          },
          {
            start: { lat: -15.7975, lng: -47.8919 }, // Brazil (Brasília)
            end: { lat: 38.7223, lng: -9.1393 }, // Lisbon
          },
          {
            start: { lat: 51.5074, lng: -0.1278 }, // London
            end: { lat: 28.6139, lng: 77.209 }, // New Delhi
          },
          {
            start: { lat: 28.6139, lng: 77.209 }, // New Delhi
            end: { lat: 43.1332, lng: 131.9113 }, // Vladivostok
          },
          {
            start: { lat: 28.6139, lng: 77.209 }, // New Delhi
            end: { lat: -1.2921, lng: 36.8219 }, // Nairobi
          },
        ]}
      />
    </div>
      <div className="py-8 px-4">
        <Accordion type="single" collapsible className="max-w-2xl mx-auto">
          <AccordionItem value="item-1">
            <AccordionTrigger>What is the drug and substance abuse problem like in Singapore?</AccordionTrigger>
            <AccordionContent className="text-wrap">
              Although Singapore has generally been able to handle drug and substance abuse 
              problems, the issue unfortunately still persists, especially in lower income 
              families where lack of information and awareness about substance abuse is prevalent.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-2">
            <AccordionTrigger>Has drug and substance abuse increased in Singapore?</AccordionTrigger>
            <AccordionContent className="text-wrap">
              From 2022 to 2023, the number of new abusers rose by 19%. With this pattern of increase, 
              it is extremely important that drug/substance abuse awareness is equally spread across 
              Singapore, regardless of low, middle, high income status.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-3">
            <AccordionTrigger>What age group are most drug abusers?</AccordionTrigger>
            <AccordionContent className="text-wrap">
              In just 2023, more than half of drug abusers arrested in Singapore were below the age of 
              30 according to the Central Narcotics Bureau.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    </div>
  );
}

