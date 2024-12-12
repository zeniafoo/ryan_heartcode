"use client";

import localFont from "next/font/local";
import "./globals.css";
import { NavigationBar } from "@/components/navbar/navigation-menu";
import { ThemeProvider } from "@/components/theme-provider";
import { Toaster } from "@/components/ui/toaster";
import { ClerkProvider } from "@clerk/nextjs";
import { useTheme } from "next-themes";

const geistSans = localFont({
    src: "./fonts/GeistVF.woff",
    variable: "--font-geist-sans",
    weight: "100 900",
});
const geistMono = localFont({
    src: "./fonts/GeistMonoVF.woff",
    variable: "--font-geist-mono",
    weight: "100 900",
});

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <ClerkProvider>
            <html lang="en" suppressHydrationWarning>
                <body
                    className={`${geistSans.variable} ${geistMono.variable} antialiased`}
                >
                    <ThemeProvider
                        attribute="class"
                        defaultTheme="system"
                        enableSystem
                        disableTransitionOnChange
                    >
                        <BackgroundWrapper>
                            <NavigationBar />
                            {children}
                            <Toaster />
                        </BackgroundWrapper>
                    </ThemeProvider>
                </body>
            </html>
        </ClerkProvider>
    );
}

function BackgroundWrapper({ children }: { children: React.ReactNode }) {
  const { theme, systemTheme } = useTheme();
  const resolvedTheme = theme === "system" ? systemTheme : theme;

  const pageBackgroundColor =
      resolvedTheme === "christmas" ? "bg-[var(--background)]" : "";

  return (
      <div
          className={`${pageBackgroundColor} ${
              resolvedTheme !== "christmas" ? "min-h-screen" : ""
          }`}
      >
          {children}
      </div>
  );
}
