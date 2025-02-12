import Card from "../Card";
import LiveIndicator from "./LiveIndicator";
import DataStreamItem from "./DataStreamItem";

export default function DataStreamCard() {
    // Example events with more verbose timestamps
    const events = [
        {
            timeStamp: "2024-03-24T21:01:32.000Z",  // ISO format that we'll format in the item
            user: "user123",
            product: "Product A",
            type: "Live Download Event" as const
        },
        {
            timeStamp: "2024-03-24T21:01:33.000Z",
            user: "user456",
            product: "Product B",
            type: "In-App Purchase" as const
        },
        {
            timeStamp: "2024-03-24T21:01:34.000Z",
            user: "user789",
            product: "Product C",
            type: "New Rating or Review" as const
        },
        {
            timeStamp: "2024-03-24T21:01:35.000Z",
            user: "user123",
            product: "Product A",
            type: "Live Download Event" as const
        },
        {
            timeStamp: "2024-03-24T21:01:36.000Z",
            user: "user456",
            product: "Product B",
            type: "In-App Purchase" as const
        },
        {
            timeStamp: "2024-03-24T21:01:37.000Z",
            user: "user789",
            product: "Product C",
            type: "New Rating or Review" as const
        },
        {
            timeStamp: "2024-03-24T21:01:32.000Z",  // ISO format that we'll format in the item
            user: "user123",
            product: "Product A",
            type: "Live Download Event" as const
        },
        {
            timeStamp: "2024-03-24T21:01:33.000Z",
            user: "user456",
            product: "Product B",
            type: "In-App Purchase" as const
        },
        {
            timeStamp: "2024-03-24T21:01:34.000Z",
            user: "user789",
            product: "Product C",
            type: "New Rating or Review" as const
        },
        {
            timeStamp: "2024-03-24T21:01:36.000Z",
            user: "user456",
            product: "Product B",
            type: "In-App Purchase" as const
        },
        {
            timeStamp: "2024-03-24T21:01:36.000Z",
            user: "user456",
            product: "Product B",
            type: "In-App Purchase" as const
        },
        {
            timeStamp: "2024-03-24T21:01:36.000Z",
            user: "user456",
            product: "Product B",
            type: "In-App Purchase" as const
        },
    ];

    return (
        <Card 
            title="Data Stream" 
            className="w-full h-[calc(100vh-14rem)] min-h-0 flex flex-col"
        >
            <div className="flex flex-col w-full h-full min-h-0">
                {/* Header */}
                <div className="flex flex-row w-full justify-between items-center shrink-0">
                    <h4 className="text-slate-400 text-md font-medium">Real time</h4>
                    <LiveIndicator />
                </div>

                {/* Events Container with gradient overlays */}
                <div className="relative w-full h-full min-h-0 mt-2">
                    {/* Top gradient - 12.5% of height */}
                    <div className="absolute top-0 left-0 right-0 h-[12.5%] z-10
                        bg-gradient-to-b from-slate-900 to-transparent pointer-events-none" 
                    />

                    {/* Events list */}
                    <div className="
                        flex flex-col
                        w-full h-full
                        justify-start items-start
                        gap-3
                        overflow-y-scroll
                        [&::-webkit-scrollbar]:hidden
                        [-ms-overflow-style:'none']
                        [scrollbar-width:'none']
                    ">
                        {events.map((event, index) => (
                            <DataStreamItem
                                key={index}
                                timeStamp={event.timeStamp}
                                user={event.user}
                                product={event.product}
                                type={event.type}
                            />
                        ))}
                    </div>

                    {/* Bottom gradient - 12.5% of height */}
                    <div className="absolute bottom-0 left-0 right-0 h-[12.5%] z-10
                        bg-gradient-to-t from-slate-900 to-transparent pointer-events-none" 
                    />
                </div>
            </div>
        </Card>
    );
}