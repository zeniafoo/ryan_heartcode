"use client";
import React from "react";
import { AnimatedTestimonials } from "@/components/ui/animated-testimonials";
import { motion } from "framer-motion";
import { LampContainer } from "@/components/ui/lamp";
import SnakeGame from '@/components/snake-game'

export default function Home() {
  const testimonials = [
    {
      quote:
        "Someone who likes to code😊, hates drugs and is going to talk about drugs",
      name: "Valerie",
      designation: "Mentee",
      src: '/womanimage.jpg',
    },
    {
      quote:
        "You may feel happy after taking drugs for awhile BUT everything has side effects. IT IS NOT WORTH IT!",
      name: "DO NOT EVER DO DRUGS",
      designation: "Raising Awareness",
      src: "/sideeffectsimage.png",
    },
    {
      quote:
        "Born in 2009, 15y/o, Have 1 older sister & 1 older brother. School: Boon Lay Secondary School",
      name: "About Me",
      designation: "Valerie",
      src: "/flagsimage.jpg",
    },
  ];

  // Scroll to bottom function
  const scrollToBottom = () => {
    window.scrollTo({
      top: document.documentElement.scrollHeight,
      behavior: "smooth",
    });
  };

  return (
    <div>
      <LampContainer>
        {/* Wrapping h1 and image in a parent div for better structure */}
        
          <motion.h1
            initial={{ opacity: 0.5, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              delay: 0.3,
              duration: 0.8,
              ease: "easeInOut",
            }}
            className="bg-clip-text text-4xl font-medium tracking-tight text-transparent md:text-7xl h-auto mt-44">
          
            <div className="flex flex-col items-center justify-center h-[40rem] m-2">
              <div className="text-7xl font-bold mt-80 text-white pt-96 pb-0 text-center">
                Hi, I am <br /> Valerie
              </div>
              
              <div className="pt-0 size-100">
                <img src="/sofaimage.png" alt="Sofa"/>
              </div>
            </div>
          </motion.h1>
        
      </LampContainer>
      <AnimatedTestimonials testimonials={testimonials} />
      <div className="bg-black text-white py-12">
        <SnakeGame />
      </div>
    </div>
  );
}

