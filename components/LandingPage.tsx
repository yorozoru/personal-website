import RotatingText from "./RotatingText";

export default function LandingPage(){
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
               <RotatingText/>
        </div>
        </div>
        </div>
    );
}