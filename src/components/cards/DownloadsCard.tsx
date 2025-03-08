import Card from "./Card";
import NumberGroup from "./sub-components/NumberGroup";

export default function TotalUsersCard() {


    return (
        <Card 
            title="Downloads"
            className="
                relative
                w-full h-fit
                justify-center items-start
                gap-1
            "
        >
            <NumberGroup 
                value={1000000}
                change={100}
                timePeriod={"Today so far"}
            />
        </Card>
    );
}