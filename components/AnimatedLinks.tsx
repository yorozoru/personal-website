import Link from "next/link";
import * as motion from "motion/react-client"

interface AnimatedLinkProps {
    href: string;
    children: React.ReactNode;
    className?: string;
    onClick?: () => void;
}

export default function AnimatedLink({ href, children, className = "", onClick}: AnimatedLinkProps) {
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
                onClick={onClick}
                className = {`text-white hover:text-sky-300 transition-colors ${className}`}
            >
    {children}
            </Link>
        </motion.div>
    );
}