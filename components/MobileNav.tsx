"use client"
import Link from "next/link";
import AnimatedLink from "./AnimatedLinks";
import { useEffect, useState } from "react";
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import { motion, AnimatePresence } from "framer-motion";

export default function MobileNav() {
    const [open, setOpen] = useState(false);

    useEffect(() => {
        if (open) {
            document.body.style.overflow = 'hidden';
        } else {

            document.body.style.overflow = 'unset';
        }
        return () => {
            document.body.style.overflow = 'unset';
        };
    }, [open]);
    
    const toggleMenu = () => {
        setOpen(!open);
    };

    return (
        <div className="relative font-lexend bg-transparent text-white">
            <div className="absolute top-0 left-0 w-full z-50">
                <div className="flex justify-between items-center">
                    <Link href="/" className="text-2xl font-lexend">dillan pho</Link>
                    <button 
                        onClick={toggleMenu} 
                        className="focus:outline-none"
                        aria-label={open ? "Close menu" : "Open menu"}
                    >
                        {open ? (
                            <CloseIcon sx={{color:"white"}} />
                        ) : (
                            <MenuIcon sx={{color:"white"}} />
                        )}
                    </button>
                </div>
            </div>

            <AnimatePresence>
                {open && (
                    <motion.div
                        initial={{ opacity: 0, y: "-100vh" }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, ease:"easeInOut" }}
                        className="fixed top-0 left-0 w-screen h-screen z-40"
                    >
                        <nav className="flex flex-col justify-center items-center w-full h-full bg-black bg-opacity-65 backdrop-blur-lg font-roboto">
                            <div className="flex flex-col items-center space-y-6 text-3xl">
                                <AnimatedLink href="/" onClick={toggleMenu}>home</AnimatedLink>
                                <AnimatedLink href="/projects" onClick={toggleMenu}>projects</AnimatedLink>
                                <AnimatedLink href="/about" onClick={toggleMenu}>about</AnimatedLink>
                                <AnimatedLink href="/contact" onClick={toggleMenu}>contact</AnimatedLink>
                            </div>
                        </nav>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
}