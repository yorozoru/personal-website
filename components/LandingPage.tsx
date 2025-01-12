import Link from "next/link";
import HeaderNav from "./HeaderNav";

export default function LandingPage(){
    return(
        <div className="absolute w-full min-h-screen">
            {/* Video Background */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0">
                <div className="absolute top-0 left-0 w-full h-full">
                    <video
                        autoPlay
                        loop
                        muted
                        preload="auto"
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
            <div className="relative z-10">
                <div className="flex justify-center items-center min-h-screen">
                    <p className="text-white">Hello World!</p>
                </div>
            </div>
        </div>
    );
}