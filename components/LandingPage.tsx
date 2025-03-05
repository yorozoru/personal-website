"use client"
import { motion } from "motion/react"
import { useState, useEffect } from "react";
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import Link from "next/link";


const words = ["Software Engineer", "Chef-In-Progress", "Baker", "Gymgoer", "Problem Solver"];

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
        <div className="relative w-full min-h-screen">
            {/* Video Background */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0">
                <div className="absolute top-0 left-0 w-full h-full">
                    <video
                        autoPlay
                        loop
                        muted
                        playsInline
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
            <div className="relative z-10 h-screen flex justify-center items-center">
            <div className="flex flex-col items-center">
                <div className="flex flex-col items-center lg:text-4xl sm:text-3xl text-xl">
                    <h2 className="text-white font-lexend">My name&apos;s Dillan and I&apos;m a </h2>
                    <motion.div
                        className="text-white lg:text-8xl sm:text-6xl text-[2.75rem] leading-10 font-lexend"
                        key={currentIndex}
                        initial="enter"
                        animate="center"
                        exit="exit"
                        variants={variants}
                        transition={{ duration: 0.7 }}
                    >
                        {words[currentIndex]}
                    </motion.div>
                    <Link href={"/projects"} className={"sm:mt-16 mt-8"}>
                        <div className={"text-white font-lexend text-base p-2 border border-white rounded-full bg-transparent transition duration-700 hover:bg-white hover:text-black"}>
                        Check out my Projects <ArrowForwardIcon className={"group-hover:text-black"} sx={{color:"inherit", fontSize: "1 rem"}}/>
                        </div>
                    </Link>
                </div>
            </div>
        </div>
        </div>
    );
}