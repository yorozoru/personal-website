import Link from "next/link";
import * as motion from "motion/react-client"

interface AnimatedLinkProps {
    href: string;
    children: React.ReactNode;
    className?: string;
}

export default function AnimatedLink({ href, children, className = "" }: AnimatedLinkProps) {
    return (
        <motion.div
            whileHover={{
                scale: 1.05,
                transition: { duration: 0.3},
            }}
            whileTap={{ scale: 0.9 }}
        >
            <Link
                href={href}
                className = {`text-white hover:text-sky-300 transition-colors ${className}`}
            >
    {children}
            </Link>
        </motion.div>
    );
}