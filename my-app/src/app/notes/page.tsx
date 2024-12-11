"use client";
import Image from "next/image";
import React, { useEffect, useId, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { useOutsideClick } from "@/hooks/use-outside-click";
import CloseIcon from "@/components/CloseIcon";
import ExpandableCardDemo from "@/components/ExpandableCardDemo";




export default function Notes() {
	return (
        <div className="py-8 px-4">
            <h1 className="flex flex-col items-center justify-center text-2xl font-bold mb-6">Notes</h1>
            <ExpandableCardDemo />
        </div>
	);
}