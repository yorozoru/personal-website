export default function ProjectsPage(){
    return (
        <div className="absolute w-full min-h-screen">
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0">
                    {/* Image Background */}
                    <div className="absolute top-0 left-0 w-full h-full">
                        <img src="IMG_5278.jpg" alt="picture of the boston skyline from the charles river" className="w-full h-full object-cover object-center"/>
                    </div>
                    {/* Dark overlay */}
                    <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-50 backdrop-blur-sm"></div>
            </div>
            <div className="relative z-1 flex justify-center">
                <div className="mt-32">
                <h1 className="text-white font-lexend font text-2xl">Here's some of the projects I've worked on...</h1>
                </div>
            </div>

        </div>
    )
}