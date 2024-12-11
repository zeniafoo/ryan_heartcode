// @ts-nocheck
"use client"

import * as React from "react"
import { Moon, Sun, FolderTree } from "lucide-react" // Import an icon for Christmas if available
import { useTheme } from "next-themes"

import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

export function ModeToggle() {
  const { setTheme, theme } = useTheme()

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" size="icon">
          <Sun className={`h-[1.2rem] w-[1.2rem] ${theme === "light" ? "block" : "hidden"} transition-all`} />
          <Moon className={`h-[1.2rem] w-[1.2rem] ${theme === "dark" ? "block" : "hidden"} transition-all`} />
          <FolderTree className={`h-[1.2rem] w-[1.2rem] ${theme === "christmas" ? "block" : "hidden"} transition-all`} />
          <span className="sr-only">Toggle theme</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuItem onClick={() => setTheme("light")}>
          Light
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => setTheme("dark")}>
          Dark
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => setTheme("christmas")}>
          Christmas
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => setTheme("system")}>
          System
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
