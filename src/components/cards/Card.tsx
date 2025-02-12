import { cn } from "@/lib/utils";
import Icon from "./sub-components/Icon";

type Props = {
    title: string
    children: React.ReactNode;
    className?: string;
    headerContent?: React.ReactNode;
}

export default function Card({title, children, className, headerContent}: Props) {
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


                <div className="flex flex-row gap-4">
                    {headerContent}
                    <Icon variant={title} size={28} color={"#64748b"}/>
                </div>
            </div>

            {/* Children content */}
            {children}

        </section>
    );
}
