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
  const { setTheme, theme } = useTheme();

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" size="icon">
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
              src="/christmas.png" // Update this path to your image location
              alt="Christmas Tree"
              className="h-[2.2rem] w-[2.2rem] transition-all"
            />
          )}
          <span className="sr-only">Toggle theme</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuItem onClick={() => setTheme("light")}>Light</DropdownMenuItem>
        <DropdownMenuItem onClick={() => setTheme("dark")}>Dark</DropdownMenuItem>
        <DropdownMenuItem onClick={() => setTheme("system")}>System</DropdownMenuItem>
        <DropdownMenuItem onClick={() => setTheme("christmas")}>
          Christmas
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
