"use client";
import { TypewriterEffectSmooth } from "../../components/ui/typewriter-effect"
export default function aboutryan(){
    const words = [
        {
          text: "rise",
        },
        {
          text: "above",
        },
        {
          text: "drugs",
        },
        {
          text: "get",
        },
        {
            text: "more",
          },
          {
            text: "likes",
          },
          {
            text: "and",
          },
          {
            text: "hugs",
          },
        
      ];
      return (
        <div className="flex flex-col items-center justify-center h-[40rem]  ">
          <p className="text-neutral-600 dark:text-neutral-200 text-xs sm:text-base  ">
            The road to freedom starts from here
          </p>
          <TypewriterEffectSmooth words={words} />
          <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 space-x-0 md:space-x-4">
            
          </div>
        </div>
      );
}