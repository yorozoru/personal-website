import CardPreview from "./CardPreview";
import Image from "next/image";
import * as motion from "motion/react-client"

const containerVariants = {
    hidden: {},
    visible: {
        transition: {
            staggerChildren: 0.8,
        },
    },
};

const itemVariants = {
    hidden: { opacity: 0, y: -100 },
    visible: { opacity: 1, y: 0,
        transition: {
            duration: 0.8 

        }
     },
};

const childVariants = {
    hidden: { opacity: 0, y: -50 },
    visible: { opacity: 1, y: 0,
        transition: {
            duration: 0.8,
            ease: "easeOut"
        }
     },
};


export default function ProjectsPage(){
    return (
        <div className="absolute w-full min-h-screen">
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0">
                    {/* Image Background */}
                    <div className="absolute top-0 left-0 w-full h-full">
                        <Image src="/IMG_5278.jpg" alt="picture of the boston skyline from the charles river" className="w-full h-full object-cover object-center" fill priority/>
                    </div>
                    {/* Dark overlay */}
                    <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-50 backdrop-blur-sm"></div>
            </div>
            <motion.div 
            initial="hidden"
            animate="visible"
            variants={containerVariants}
            className="relative z-1 flex justify-center">
                <motion.div
                variants = {itemVariants}
                 className="flex flex-col items-center">
                <h1 className="mt-32 text-white font-lexend text-center text-4xl">Here&apos;s some of the projects I&apos;ve worked on...</h1>
                <motion.div 
                 variants = {childVariants}
                className="mt-10">
                    <CardPreview/>
                </motion.div>
                </motion.div>
            </motion.div>
        </div>
    )
}