import Card from "./Card";
import NumberGroup from "./sub-components/NumberGroup";

export default function TotalUsersCard() {


    return (
        <Card title="Total Users">
            <NumberGroup 
                value={10000}
                change={100}
                timePeriod={"Today so far"}
            />
        </Card>
    );
}