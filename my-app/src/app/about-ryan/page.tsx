"use client";
import { TypewriterEffectSmooth } from "../../components/ui/typewriter-effect"
import { GlareCard } from "../../components/ui/glare-card";
import { Meteors } from "../../components/ui/meteors";
import React from "react";
import { motion } from "framer-motion";
import { LampContainer } from "../../components/ui/lamp";
import Image from "next/image";
import { Carousel, Card } from "@/components/ui/apple-cards-carousel";

export default function aboutryan(){
    const cards = data.map((card, index) => (
        <Card key={card.src} card={card} index={index} />
      ));
    const words = [
        {
          text: "Hey",
        },
        {
          text: "Its Me",
        },
        {
          text: "Ryan",
        },
        
        
      ];
      return (
        <div className='relative'>
            
            <LampContainer className={""}>
            <motion.h1
                // style={{ overflow: "unset" }}
                initial={{ opacity: 0.5, y: 100 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                    delay: 0.3,
                    duration: 0.8,
                    ease: "easeInOut",  
                }}
                className="bg-gradient-to-br from-slate-300 to-slate-500 py-4 bg-clip-text text-center text-4xl font-medium tracking-tight text-transparent md:text-7xl mt-72 h-auto"
            >
                <div className="flex flex-col items-center justify-center h-[40rem] m-2">
                    <p className="text-neutral-600 dark:text-neutral-200 text-xs sm:text-base">
                    The road to freedom starts from here
                    
                    </p>

                    <div  className="flex flex-col items-center justify-center h-auto">
                    <TypewriterEffectSmooth words={words} />
                    </div>
                    
                    
                    <div className="inline-flex">
                    
                    <GlareCard className="flex flex-col items-center justify-center">
                    <img
                    className="h-full w-full absolute inset-0 object-cover"
                    src="/ryan_playing_badminton.jpg"
                    />

                    <p className="text-white font-bold text-xl mt-4">Aceternity</p>
                    </GlareCard>
                    <div className="mx-12">
                        <div className=" w-full relative max-w-xs">
                            <div className="absolute inset-0 h-full w-full bg-gradient-to-r from-blue-500 to-teal-500 transform scale-[0.80] bg-red-500 rounded-full blur-3xl" />
                            <div className="relative shadow-xl bg-gray-900 border border-gray-800  px-4 py-8 h-full overflow-hidden rounded-2xl flex flex-col justify-end items-start">
                            <div className="h-5 w-5 rounded-full border flex items-center justify-center mb-4 border-gray-500">
                                <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth="1.5"
                                stroke="currentColor"
                                className="h-2 w-2 text-gray-300"
                                >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M4.5 4.5l15 15m0 0V8.25m0 11.25H8.25"
                                />
                                </svg>
                            </div>
                    
                            <h1 className="font-bold text-xl text-white mb-4 relative z-50" style={{ letterSpacing: "0.1em" }}>
                                this is my favourite hobby
                            </h1>
                    
                            <p className="font-normal text-base text-slate-500 mb-4 relative z-50" style={{ letterSpacing: "0.1em" }}>
                                I am interested in Badminton. I am a doubles player and my favourite badminton player is Lee Chong Wei. I achieved 1 Silver medal from NSG
                            </p>
                    
                            <button className="border px-4 py-1 rounded-lg  border-gray-500 text-gray-300 text-xs">
                                Explore
                            </button>
                    
                            {/* Meaty part - Meteor effect */}
                            <Meteors number={20} />
                            </div>
                        </div>
                    </div>
                    </div>                    
                </div>
            </motion.h1>
            </LampContainer>
            <div className="py-20">
                    <h2 className="max-w-7xl pl-4 mx-auto text-xl md:text-5xl font-bold text-neutral-800 dark:text-neutral-200 font-sans">
                        Get to know my sport
                        
                    </h2>
                    <Carousel items={cards} />
                    </div>
        </div>
      );
}
const DummyContent = () => {
    return (
      <>
        {[...new Array(3).fill(1)].map((_, index) => {
          return (
            <div
              key={"dummy-content" + index}
              className="bg-[#F5F5F7] dark:bg-neutral-800 p-8 md:p-14 rounded-3xl mb-4"
            >
              <p className="text-neutral-600 dark:text-neutral-400 text-base md:text-2xl font-sans max-w-3xl mx-auto">
                <span className="font-bold text-neutral-700 dark:text-neutral-200">
                  here is a fun fact about badminton
                </span>{" "}
                etcThe strings of the badminton racket are made of animal gut in the earlier times
              </p>
              <Image
                src="/badminton-olympics.gif"
                alt="Macbook mockup from Aceternity UI"
                height="500"
                width="500"
                className="md:w-1/2 md:h-1/2 h-full w-full mx-auto object-contain"
              />
            </div>
          );
        })}
      </>
    );
  };
   
  const data = [
    {
      category: "2024",
      title: "Friendlies with St Nic",
      src: "/badminton1.jpg",
      content: <DummyContent />,
    },
    {
      category: "2023",
      title: "Noth Zone C div",
      src: "/badminton2.jpg",
      content: <DummyContent />,
    },
    {
      category: "Achievement",
      title: "2nd Place for 2023 North Zone",
      src: "/badminton3.jpg",
      content: <DummyContent />,
    },
   
    {
      category: "LOL",
      title: "Team Group Photo",
      src: "/badminton4.jpg",
      content: <DummyContent />,
    },
    
  ];