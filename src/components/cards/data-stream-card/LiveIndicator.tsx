import { motion } from "motion/react";

export default function LiveIndicator() {
    return (
        <div className="
            relative flex flex-row  
            w-fit h-fit
            items-center justify-start
            gap-2
        ">
            <h4 className="text-green-500 text-sm font-semibold font-mono">Live</h4>

            <div className="relative w-2 h-2">
                <motion.div 
                    className="absolute top-0 left-0 right-0 bottom-0 z-0 w-2 h-2 bg-green-500/60 rounded-full" 
                    animate={{
                        scale: [1, 1.5, 2.5],
                        opacity: [1, 0.5, 0],
                    }}
                    transition={{ 
                        duration: 2, 
                        repeat: Infinity,
                        ease: "easeOut"
                    }}
                />

                <div className="absolute top-0 left-0 right-0 bottom-0 z-10 w-2 h-2 bg-green-500 rounded-full" />
            </div>
        </div>
    );
}