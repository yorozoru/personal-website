import Link from "next/link";
import AnimatedLink from "./AnimatedLinks";
import { Lexend, Roboto } from "next/font/google";

const lexend = Lexend({
    weight: '400',
    subsets: ['latin'],
    display: 'swap',
    variable: '--font-lexend',
});

const roboto = Roboto({
    weight: '400',
    subsets: ['latin'],
    display: 'swap',
    variable: '--font-roboto',
});

export default function HeaderNav(){
    return(
        <div className="flex flex-row justify-between font-lexend bg-transparent text-white">
            <Link href="/" className="text-3xl">dillan pho</Link>
            <nav className="flex flex-row gap-2 text-lg font-roboto backdrop-blur-3xl px-3 py-2 rounded-3xl z-20">
                <AnimatedLink href="/">home</AnimatedLink>
                <AnimatedLink href="/projects">projects</AnimatedLink>
                {/* <AnimatedLink href="/cooking">cooking blog</AnimatedLink> */} {/* To be added at a later date */}
                <AnimatedLink href="/about">about</AnimatedLink>
                <AnimatedLink href="/contact">contact</AnimatedLink>
            </nav>
        </div>
    );
}