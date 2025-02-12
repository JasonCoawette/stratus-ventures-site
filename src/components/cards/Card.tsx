import { cn } from "@/lib/utils";
import Icon from "./sub-components/Icon";

type Props = {
    title: string
    children: React.ReactNode;
    className?: string;
}

export default function Card({title, children, className}: Props) {
    return (
        <section className={cn(
            "card",
            "relative flex flex-col",
            "p-4",
            "bg-slate-900",
            "border border-slate-800 rounded-lg",
            className
        )}>

            {/* Title and Icon */}
            <div className="
                flex flex-row
                w-full h-fit
                justify-between items-center
            ">
                <h2 className="
                    text-xl
                    text-white
                    font-semibold
                    leading-none tracking-tight
                ">{title}</h2>

                <Icon variant={title} size={28} color={"#64748b"}/>
            </div>

            {/* Children content */}
            {children}

        </section>
    );
}
