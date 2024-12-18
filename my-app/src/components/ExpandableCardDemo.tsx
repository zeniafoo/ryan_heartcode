// components/ExpandableCardDemo.tsx
"use client";
import Image from "next/image";
import React, { useEffect, useId, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { useOutsideClick } from "@/hooks/use-outside-click";
import { useTheme } from "next-themes"; // Import useTheme for dynamic theme detection
import CloseIcon from "./CloseIcon"; // Adjust the path if necessary

const cards = [
  {
    description: "",
    title: "Consequences of drug trafficking in Singapore?",
    src: "/law.jpg",
    ctaText: "Expand Notes",
    ctaLink: "https://edition.cnn.com/2024/10/19/asia/singapore-changi-prison-drugs-war-intl-hnk-dst/index.html#:~:text=But%20Singapore%20imposes%20a%20mandatory,and%20500%20grams%20of%20cannabis.",
    content: () => <p> Singapore imposes a mandatory death penalty for people convicted of supplying certain amounts of illicit drugs – 15 grams (half an ounce) of heroin, 30 grams of cocaine, 250 grams of methamphetamine and 500 grams of cannabis.</p>,
  },
  {
    description: "",
    title: "Drugs in cigarettes",
    src: "/cigarette.png",
    ctaText: "Expand Notes",
    ctaLink: "https://www.lung.org/quit-smoking/smoking-facts/whats-in-a-cigarette",
    content: () => (
      <p>The drugs found in cigarettes are: nicotine, cannabis, and acetone.</p>
    ),
  },
  {
    description: "",
    title: "What is the minimum amount of time needed for effective treatment for drug addiction",
    src: "/doctor.jpg",
    ctaText: "Expand Notes",
    ctaLink: "https://www.urmc.rochester.edu/encyclopedia/content?contenttypeid=40&contentid=DrugAbuseQuiz#:~:text=The%20length%20of%20time%20needed,addiction%20is%20a%20chronic%20disease.",
    content: () => (
      <p>
        For most people, the least amount of time is 3 months
      </p>
    ),
  },
  {
    description: "",
    title: "Time it takes for drug side effects to start",
    src: "/stopwatch.jpg",
    ctaText: "Expand Notes",
    ctaLink: "https://www.safemedication.com/pharmacist-insights/2021/04/26/are-you-experiencing-side-effects-from-your-medicine-heres-what-you-should-know#:~:text=Side%20effects%20can%20happen%20at,cause%20side%20effects%20as%20well.",
    content: () => (
      <p>
        Side effects can happen at any time. They can occur when you first take a medicine, with changes in dosage, or if you stop taking the medicine suddenly or too soon. If you begin to take other prescriptions or non-prescription products, interactions among the medicines may cause side effects as well.


      </p>
    ),
  },
];

const ExpandableCardDemo = () => {
  const { theme } = useTheme(); // Get the current theme
  const [active, setActive] = useState<typeof cards[number] | null>(null);
  const ref = useRef<HTMLDivElement>(null);
  const id = useId();

  useEffect(() => {
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setActive(null);
      }
    };

    if (active) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", onKeyDown);
    } else {
      document.body.style.overflow = "auto";
    }

    return () => {
      window.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = "auto";
    };
  }, [active]);

  useOutsideClick(ref, () => setActive(null));

  const hoverClass =
    theme === "christmas" ? "hover:bg-red-500 hover:text-white" : "hover:bg-neutral-50 dark:hover:bg-neutral-800";

  return (
    <>
      <AnimatePresence>
        {active && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/20 h-full w-full z-10"
          />
        )}
      </AnimatePresence>
      <AnimatePresence>
        {active && (
          <div className="fixed inset-0 grid place-items-center z-[100]">
            <motion.button
              key={`button-${active.title}-${id}`}
              layout
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0, transition: { duration: 0.05 } }}
              className="flex absolute top-2 right-2 lg:hidden items-center justify-center bg-white rounded-full h-6 w-6"
              onClick={() => setActive(null)}
            >
              <CloseIcon />
            </motion.button>
            <motion.div
              layoutId={`card-${active.title}-${id}`}
              ref={ref}
              className="w-full max-w-[500px] h-full md:h-fit md:max-h-[90%] flex flex-col bg-white dark:bg-neutral-900 sm:rounded-3xl overflow-hidden"
            >
              <motion.div layoutId={`image-${active.title}-${id}`}>
                <Image
                  priority
                  width={200}
                  height={200}
                  src={active.src}
                  alt={active.title}
                  className="w-full h-80 lg:h-80 sm:rounded-tr-lg sm:rounded-tl-lg object-cover object-top"
                />
              </motion.div>

              <div>
                <div className="flex justify-between items-start p-4">
                  <div>
                    <motion.h3
                      layoutId={`title-${active.title}-${id}`}
                      className="font-bold text-neutral-700 dark:text-neutral-200"
                    >
                      {active.title}
                    </motion.h3>
                    <motion.p
                      layoutId={`description-${active.description}-${id}`}
                      className="text-neutral-600 dark:text-neutral-400"
                    >
                      {active.description}
                    </motion.p>
                  </div>

                  <motion.a
                    layoutId={`button-${active.title}-${id}`}
                    href={active.ctaLink}
                    target="_blank"
                    className="px-4 py-3 text-sm rounded-full font-bold bg-green-500 text-white"
                  >
                    {active.ctaText}
                  </motion.a>
                </div>
                <div className="pt-4 relative px-4">
                  <motion.div
                    layout
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="text-neutral-600 text-xs md:text-sm lg:text-base h-40 md:h-fit pb-10 flex flex-col items-start gap-4 overflow-auto dark:text-neutral-400 [mask:linear-gradient(to_bottom,white,white,transparent)] [scrollbar-width:none] [-ms-overflow-style:none] [-webkit-overflow-scrolling:touch]"
                  >
                    {typeof active.content === "function"
                      ? active.content()
                      : active.content}
                  </motion.div>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
      <ul className="max-w-2xl mx-auto w-full gap-4">
        {cards.map((card) => (
          <motion.div
            layoutId={`card-${card.title}-${id}`}
            key={`card-${card.title}-${id}`}
            onClick={() => setActive(card)}
            className={`p-4 flex flex-col md:flex-row justify-between items-center ${hoverClass} rounded-xl cursor-pointer`}
          >
            <div className="flex gap-4 flex-col md:flex-row">
              <motion.div layoutId={`image-${card.title}-${id}`}>
                <Image
                  width={100}
                  height={100}
                  src={card.src}
                  alt={card.title}
                  className="h-40 w-40 md:h-14 md:w-14 rounded-lg object-cover object-top"
                />
              </motion.div>
              <div>
                <motion.h3
                  layoutId={`title-${card.title}-${id}`}
                  className="font-medium text-foreground text-center md:text-left"
                >
                  {card.title}
                </motion.h3>
                <motion.p
                  layoutId={`description-${card.description}-${id}`}
                  className="text-neutral-600 dark:text-neutral-400 text-center md:text-left"
                >
                  {card.description}
                </motion.p>
              </div>
            </div>
            <motion.button
              layoutId={`button-${card.title}-${id}`}
              className="px-4 py-2 text-sm rounded-full font-bold bg-gray-100 hover:bg-green-500 hover:text-white text-black mt-4 md:mt-0"
            >
              {card.ctaText}
            </motion.button>
          </motion.div>
        ))}
      </ul>
    </>
  );
};

export default ExpandableCardDemo;
