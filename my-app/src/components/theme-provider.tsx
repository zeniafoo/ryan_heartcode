"use client"

import * as React from "react"
import { ThemeProvider as NextThemesProvider } from "next-themes"
import { type ThemeProviderProps } from "next-themes"

export function ThemeProvider({
  children,
  ...props
}: React.ComponentProps<typeof NextThemesProvider>) {
  return (
    <NextThemesProvider
      themes={["light", "dark", "christmas"]}
      attribute="class"
      defaultTheme="system"
      storageKey="theme" // Customize storage key if needed
      {...props}
    >
      {children}
    </NextThemesProvider>
  )
}