'use client'

import Link from "next/link";
import { NavigationMenu, NavigationMenuItem, NavigationMenuLink, navigationMenuTriggerStyle } from "../ui/navigation-menu";
import { ModeToggle } from "../mode-toggle";
import {
    SignInButton,
    SignedIn,
    SignedOut,
    UserButton
} from "@clerk/nextjs";
import { useTheme } from "next-themes";

export function NavigationBar() {
    const { theme, resolvedTheme } = useTheme();
    const currentTheme = theme === "system" ? resolvedTheme : theme;

    // Set the navigation bar background color
    const navBarBgColor =
        currentTheme === "christmas"
            ? "bg-red-500 text-white" // Red for Christmas mode
            : currentTheme === "dark"
            ? "bg-black text-white" // Dark theme
            : "bg-white text-black"; // Light theme

    return (
        <NavigationMenu
            className={`flex flex-row justify-between min-w-full list-none h-16 sticky top-0 p-5 shadow-md ${navBarBgColor} z-50`}
        >
            <div className="flex flex-row ">
                <NavigationMenuItem className="m-2">
                    <Link href="/" legacyBehavior passHref>
                        <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                            Home
                        </NavigationMenuLink>
                    </Link>
                </NavigationMenuItem>
                <NavigationMenuItem className="m-2">
                    <Link href="/about-val" legacyBehavior passHref>
                        <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                            About val
                        </NavigationMenuLink>
                    </Link>
                </NavigationMenuItem>
                <NavigationMenuItem className="m-2">
                    <Link href="/about-ryan" legacyBehavior passHref>
                        <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                            About ryan
                        </NavigationMenuLink>
                    </Link>
                </NavigationMenuItem>
                <NavigationMenuItem className="m-2">
                    <Link href="/notes" legacyBehavior passHref>
                        <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                            Notes
                        </NavigationMenuLink>
                    </Link>
                </NavigationMenuItem>
                <NavigationMenuItem className="m-2">
                    <Link href="/quiz" legacyBehavior passHref>
                        <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                            Quiz
                        </NavigationMenuLink>
                    </Link>
                </NavigationMenuItem>
            </div>
            <div className="flex gap-4">
                <ModeToggle />
                <SignedOut>
                    <SignInButton />
                </SignedOut>
                <SignedIn>
                    <UserButton />
                </SignedIn>
            </div>
        </NavigationMenu>
    );
}
