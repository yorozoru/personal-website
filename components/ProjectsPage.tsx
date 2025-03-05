import CardPreview from "./CardPreview";
import Image from "next/image";

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
            <div className="relative z-1 flex justify-center">
                <div className="mt-32 flex flex-col items-center">
                <h1 className="text-white font-lexend text-center text-4xl">Here's some of the projects I've worked on...</h1>
                <div className="mt-10">
                    <CardPreview/>
                </div>
                </div>
            </div>
        </div>
    )
}