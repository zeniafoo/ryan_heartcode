import Link from "next/link";
import { NavigationMenu, NavigationMenuItem, NavigationMenuLink, navigationMenuTriggerStyle } from "../ui/navigation-menu";
import { ModeToggle } from "../mode-toggle";
import Image from "next/image";
import Logo from "@/app/assets/logo.png"


export function NavigationBar() {
    return (
        <NavigationMenu className="flex flex-row justify-between min-w-full list-none h-16 sticky top-0 p-5">
            <div className="flex flex-row">
            
            <NavigationMenuItem>
                <Link href="/" legacyBehavior passHref>
                    <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                        Home
                    </NavigationMenuLink>
                </Link>
            </NavigationMenuItem>
            <NavigationMenuItem>
                <Link href="/about-val" legacyBehavior passHref>
                    <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                        About val
                    </NavigationMenuLink>
                </Link>
            </NavigationMenuItem>
            <NavigationMenuItem>
                <Link href="/about-ryan" legacyBehavior passHref>
                    <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                        About ryan
                    </NavigationMenuLink>
                </Link>
            </NavigationMenuItem>
            </div>
            <div className="flex gap-4">
                <ModeToggle/>
                
            </div>
        </NavigationMenu>
    )
}