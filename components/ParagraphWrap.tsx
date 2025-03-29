import Image from "next/image";

export default function ParagraphWrap() {
    return (
        <div className="text-white md:text-2xl text-xl md:mx-96 mx-3">
            {/* This element will float to the right.
          You can either leave it empty to reserve space or include an image */}
            <div className="float-right ml-2 mt-2 sm:ml-4 sm:mt-4">
                {/* Uncomment the Image below to display an image instead of empty space */}
                <Image
                    src="/portrait_about.jpg"
                    alt="picture of me in rhode island"
                    width={192}
                    height={192}
                    className="object-cover"
                />
            </div>
            <p className="text-left sm:text-justify">
                Hi, I&apos;m Dillan Pho, a recent Computer Science graduate from Boston University with a passion for building applications that people love to use. I enjoy working across the stack, from front-end development with React and TypeScript to back-end systems in Node.js, Java, and Python. I also have experience in data analysis, machine learning, and neural networks, leveraging tools like Scikit-learn to uncover insights. Beyond tech, I love to cook and bake, and soon I&apos;ll be running a cooking blog (TBD) where I&apos;ll share my culinary experiments. In my free time, I explore cinematography, photography, and graphic design, blending creativity with technology to tell compelling stories (the background images/videos of these pages are some samples of my work!). I&apos;ve worked with nonprofits to help further their missions and enjoy using technology to make a meaningful impact! I&apos;m quick on the uptake when it comes to learning new things, and I&apos;m not afraid of any boo-boos along the way.
            </p>


        </div>
    );
}