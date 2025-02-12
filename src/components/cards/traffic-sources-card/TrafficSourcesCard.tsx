import Card from "../Card";
import TrafficSourceItem from "./TrafficSourceItem";

export default function TrafficSourcesCard() {


    return (
        <Card 
            title="Traffic Sources"
            className="
                w-full h-full
                justify-start items-start
                gap-4
            "
        >
            <div className="
                flex flex-col
                w-full h-full
                justify-start items-start
                gap-2
            ">
                <TrafficSourceItem url="https://www.google.com" viewCount={1000} conversionRate={0.5} topProduct="Product A" />
                <TrafficSourceItem url="https://www.google.com" viewCount={1000} conversionRate={0.5} topProduct="Product A" />
                <TrafficSourceItem url="https://www.google.com" viewCount={1000} conversionRate={0.5} topProduct="Product A" />
            </div>
        </Card>
    );
}