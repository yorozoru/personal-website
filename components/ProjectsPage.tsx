import CardPreview from "./CardPreview";
import Image from "next/image";

export default function ProjectsPage(){
    return (
        <div className="relative w-full min-h-screen">
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0">
                    {/* Image Background */}
                    <div className="absolute top-0 left-0 w-full h-full">
                        <Image src="/IMG_5278.jpg" alt="picture of the boston skyline from the charles river" className="w-full h-full object-cover object-center" fill priority/>
                    </div>
                    {/* Dark overlay */}
                    <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-50 backdrop-blur-sm"></div>
            </div>
            <div className="relative z-1 flex justify-center">
                <div className="flex flex-col items-center">
                    <h1 className="mt-32 text-white font-lexend text-center text-3xl md:text-4xl">Here&apos;s some of the projects I&apos;ve worked on...</h1>
                    <div className="mt-10 mb-6">
                        <CardPreview/>
                    </div>
                </div>
            </div>
        </div>
    )
}