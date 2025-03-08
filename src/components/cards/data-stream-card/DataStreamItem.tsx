type DataStreamItemProps = {
    timeStamp: string;
    user: string;
    product: string;
    type: "LiveDownloadEvent" | "In-AppPurchase" | "NewRatingReview";
};

export default function DataStreamItem({ timeStamp, user, product, type }: DataStreamItemProps) {
    const eventColors: Record<string, string> = {
        "LiveDownloadEvent": "text-sky-500",
        "In-AppPurchase": "text-green-500",
        "NewRatingReview": "text-fuchsia-500"
    };

    const formattedTime = new Date(timeStamp)
        .toISOString()
        .replace(/\.\d{3}Z$/, '');

    return (
        <div className="flex flex-col w-full h-fit justify-start items-start">
            {/* Timestamp line */}
            <p className="text-slate-600 text-sm font-mono">
                {formattedTime}
            </p>

            {/* Event line */}
            <div className="flex flex-row w-full h-fit justify-start items-start gap-3">

                <p className="lg:visible hidden text-slate-600 text-sm font-mono">Event:</p>
                <p className={`${eventColors[type]} text-sm font-semibold font-mono`}>
                {type === "LiveDownloadEvent" ? "LiveDownloadEvent" : 
                    type === "In-AppPurchase" ? "In-AppPurchase" : 
                    type === "NewRatingReview" ? "NewRatingReview" : "Unknown"}
                </p>
                <p className="text-slate-600 text-sm font-mono">from</p>
                <p className="text-slate-400 text-sm font-mono font-medium">{user}</p>
            </div>

            {/* Product line */}
            <div className="flex flex-row w-full h-fit justify-start items-start gap-3">
                <p className="text-slate-600 text-sm font-mono">Product:</p>
                <p className="text-slate-400 text-sm font-mono font-medium">{product}</p>
            </div>
        </div>
    );
}