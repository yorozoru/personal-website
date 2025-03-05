"use client";

import { useEffect, useState } from "react";
import DesktopNav from "@/components/DesktopNav";
import MobileNav from "@/components/MobileNav";

export default function NavChoose() {
    const [isDesktop, setIsDesktop] = useState(false);

    useEffect(() => {
        // Set the initial value
        setIsDesktop(window.innerWidth > 768);

        // Update on resize
        const handleResize = () => setIsDesktop(window.innerWidth > 768);
        window.addEventListener("resize", handleResize);

        return () => window.removeEventListener("resize", handleResize);
    }, []);

    return isDesktop ? <DesktopNav /> : <MobileNav />;
}