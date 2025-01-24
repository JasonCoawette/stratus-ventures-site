import Card from "./Card";
import NumberGroup from "./sub-components/NumberGroup";


export default function TotalUsersCard() {

    return (
        <Card title="Total Users">
            <NumberGroup value={1000} change={0.520123} timePeriod="Since last year"/>
        </Card>
    );
}