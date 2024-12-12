"use client";

import { useTheme } from "next-themes";

function BackgroundContainer({ children }: { children: React.ReactNode }) {
    const { theme, systemTheme } = useTheme();
    const resolvedTheme = theme === "system" ? systemTheme : theme;

    // Set background for non-nav content (light/dark/system)
    const bgColor =
        resolvedTheme === "dark"
            ? "bg-black text-white"
            : "bg-white text-black"; // Default to light

    return <div className={`${bgColor} min-h-screen`}>{children}</div>;
}

export default BackgroundContainer;
