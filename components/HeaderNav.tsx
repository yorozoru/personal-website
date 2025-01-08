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
        <div className={`flex flex-row gap-80 ${lexend.variable}`}>
            <Link href="/" className="text-xl">dillan pho</Link>
            <nav className={`flex flex-row gap-2 text-l ${roboto.variable}`}>
                <Link href="/">home</Link>
                <Link href="/projects">projects</Link>
                <Link href="/education">education</Link>
                <Link href="/contact">contact</Link>
            </nav>
        </div>
    );
}