// @ts-nocheck
"use client";

import * as React from "react";
import { Sun, Moon, Settings } from "lucide-react";
import { useTheme } from "next-themes";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export function ModeToggle() {
    const { setTheme, resolvedTheme, theme } = useTheme();

    // Determine background and text colors based on the current resolved theme
    const themeStyles = {
        light: "bg-white text-black",
        dark: "bg-black text-white",
        christmas: "bg-red-500 text-white",
    };

    const currentStyle = theme === "christmas"
        ? themeStyles.christmas
        : themeStyles[resolvedTheme] || themeStyles.light; // Use resolvedTheme for system settings

    // Set dropdown menu text color to ensure contrast
    const dropdownTextColor =
        theme === "dark" || resolvedTheme === "dark" ? "text-white" : "text-black";

    return (
        <DropdownMenu>
            <DropdownMenuTrigger asChild>
                <Button variant="outline" size="icon" className={currentStyle}>
                    {theme === "light" && (
                        <Sun className="h-[1.2rem] w-[1.2rem] transition-all" />
                    )}
                    {theme === "dark" && (
                        <Moon className="h-[1.2rem] w-[1.2rem] transition-all" />
                    )}
                    {theme === "system" && (
                        <Settings className="h-[1.2rem] w-[1.2rem] transition-all" />
                    )}
                    {theme === "christmas" && (
                        <img
                            src="/christmas.png"
                            alt="Christmas Tree"
                            className="h-[2.2rem] w-[2.2rem] transition-all"
                        />
                    )}
                    <span className="sr-only">Toggle theme</span>
                </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent
                align="end"
                className={`${currentStyle} ${dropdownTextColor}`}
            >
                <DropdownMenuItem onClick={() => setTheme("light")}>
                    Light
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => setTheme("dark")}>
                    Dark
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => setTheme("system")}>
                    System
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => setTheme("christmas")}>
                    Christmas
                </DropdownMenuItem>
            </DropdownMenuContent>
        </DropdownMenu>
    );
}
