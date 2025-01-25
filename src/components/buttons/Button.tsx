import { cn } from "@/lib/utils/cn";
import { motion } from "motion/react";

type Props = {
    label: string,
    onClick?: () => void,
    onSubmit?: ()=> void,
    className?: string
}

export default function Button({label, onClick, onSubmit, className}: Props) {
    return (
        <motion.button
            whileTap={{ scale: 0.98 }}
            className={cn(`
                relative 
                px-8 py-3 
                bg-white
                text-black font-semibold
                rounded-md
                ${className}
            `)}
            onClick={onClick}
            onSubmit={onSubmit}
        >
            {label}
        </motion.button>
    );
}