import Image from "next/image";
import ParagraphWrap from "@/components/ParagraphWrap";

export default function AboutPage(){
    return(
        <div className="relative w-full min-h-screen">
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0">
                {/* Image Background */}
                <div className="absolute top-0 left-0 w-full h-full">
                    <Image src="/a.jpg" alt="picture of snowport in boston" className="w-full h-full object-cover object-center" fill priority/>
                </div>
                {/* Dark overlay */}
                <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-50 backdrop-blur-sm"></div>
            </div>
            <div className="relative z-1 flex justify-center">
                <div className="mt-32 flex flex-col items-center">
                    <h1 className="text-white font-lexend text-center text-3xl md:text-4xl">All about me...</h1>
                    <div className="mt-10 mb-6 md:mb-0">
                    <ParagraphWrap/>
                    </div>
                </div>
            </div>
        </div>
    )
}