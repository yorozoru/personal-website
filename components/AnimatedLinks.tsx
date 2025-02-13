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
            >
                <span className="hover:text-transparent bg-clip-text hover:animate-gradient">
                    {children}
                </span>
            </Link>
        </motion.div>
    );
}