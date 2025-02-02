import Link from "next/link";
import {Lexend, Roboto} from "next/font/google"

const lexend = Lexend({
    weight: '400',
    subsets: ['latin'],
    display: 'swap',
    variable: '--font-lexend',
})

const roboto = Roboto({
    weight: '400',
    subsets: ['latin'],
    display: 'swap',
    variable: '--font-roboto',
})

export default function HeaderNav(){
    return(
        <div className={`flex flex-row justify-between font-lexend bg-transparent text-white `}>
            <Link href="/" className="text-3xl">dillan pho</Link>
            <nav className={`flex flex-row gap-2 text-lg font-roboto backdrop-blur-xl px-3 py-2 rounded-3xl`}>
                <Link href="/">home</Link>
                <Link href="/projects">projects</Link>
                <Link href="/education">about me</Link>
                <Link href="/cooking">cooking blog</Link>
                <Link href="/contact">contact</Link>
            </nav>
        </div>
    );
}