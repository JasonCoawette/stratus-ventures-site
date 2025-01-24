import Icon from "../Icon";

type Props = {
    title: string
    children: React.ReactNode;
}

export default function Card({title, children}: Props) {
    return (
        <section className="
            card
            relative flex flex-col
            w-full h-fit
            justify-center items-center
            p-4 gap-2
            bg-neutral-900
            border border-neutral-800 rounded-lg 
        ">

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

                <Icon variant={title} size={28} color={"#666666"}/>
            </div>

            {/* Children content */}
            {children}

        </section>
    );
}
