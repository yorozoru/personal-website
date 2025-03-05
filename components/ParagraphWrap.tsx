import Image from "next/image";

export default function ParagraphWrap() {
    return (
        <div className="text-white text-2xl mx-96">
            {/* This element will float to the right.
          You can either leave it empty to reserve space or include an image */}
            <div className="float-right ml-4 mt-4">
                {/* Uncomment the Image below to display an image instead of empty space */}
                <Image
                    src="/portrait_about.jpg"
                    alt="Descriptive alt text"
                    width={192}
                    height={192}
                    className="object-cover"
                />
            </div>
            <p className="text-justify">
                Hi, I'm Dillan Pho, a recent Computer Science graduate from Boston University with a passion for building applications that people love to use. I enjoy working across the stack, from front-end development with React and TypeScript to back-end systems in Node.js, Java, and Python. I also have experience in data analysis, machine learning, and neural networks, leveraging tools like Scikit-learn to uncover insights. Beyond tech, I love to cook and bake, and soon I'll be running a cooking blog (TBD) where I'll share my culinary experiments. In my free time, I explore cinematography, photography, and graphic design, blending creativity with technology to tell compelling stories (the background images/videos of these pages are some samples of my work!). I’ve worked with nonprofits to help further their missions and enjoy using technology to make a meaningful impact! I’m quick on the uptake when it comes to learning new things, and I'm not afraid of any boo-boos along the way.
            </p>


        </div>
    );
}