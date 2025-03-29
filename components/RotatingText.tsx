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

export default function RotatingText(){

    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
          setCurrentIndex((prevIndex) => (prevIndex + 1) % words.length);
        }, 4000);
        return () => clearInterval(interval);
      }, []);
      
    return(
        <div className="flex flex-col items-center lg:text-4xl sm:text-3xl text-xl">
        <h2 className="text-white font-lexend">My name&apos;s Dillan and I&apos;m a </h2>
        <motion.div
            className="text-white lg:text-8xl sm:text-6xl text-[2.50rem] leading-10 font-lexend"
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
    )
}