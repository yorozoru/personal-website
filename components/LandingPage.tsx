"use client"
import { motion } from "motion/react"
import { Roboto, Space_Mono } from "next/font/google"
import { useState, useEffect } from "react";

const roboto = Roboto({
    weight: '900',
    subsets: ['latin'],
    display: 'swap',
    variable: '--font-roboto',
})

const space_mono = Space_Mono({
    weight: '700',
    subsets: ['latin'],
    display: 'swap',
    variable: '--font-space_mono',
})


const words = ["Software Engineer", "Amateur Chef", "Baker", "Gymgoer", "Problem Solver"];

const variants = {
    enter: { y: 20, opacity: 0 },
    center: { y: 0, opacity: 1 },
    exit: { y: -20, opacity: 0 }
  };

export default function LandingPage(){
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
          setCurrentIndex((prevIndex) => (prevIndex + 1) % words.length);
        }, 4000);
        return () => clearInterval(interval);
      }, []);

    return(
        <div className="absolute w-full min-h-screen">
            {/* Video Background */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0">
                <div className="absolute top-0 left-0 w-full h-full">
                    <video
                        autoPlay
                        loop
                        muted
                        className="absolute min-w-full min-h-full object-cover"
                    >
                        <source src="/new_vid.mp4" type="video/mp4" />
                        Your browser does not support the video tag.
                    </video>
                </div>
                {/* Dark overlay */}
                <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-50 backdrop-blur-sm"></div>
            </div>
            {/* Content */}
            <div className="relative z-10 h-screen flex items-center">
                <div className="flex flex-col items-center ml-10">
                    <div className="flex flex-col text-4xl">
                        <h2 className="text-white font-lexend">My name's Dillan and I'm a </h2>
                        <motion.div
                        className="text-white text-8xl font-lexend ml-0"
                            key={currentIndex}
                            initial="enter"
                            animate="center"
                            exit="exit"
                            variants={variants}
                            transition={{ duration: 0.7 }}
                        >
                            {words[currentIndex]}
                        </motion.div>
                        </div>
                </div>
            </div>
        </div>
    );
}