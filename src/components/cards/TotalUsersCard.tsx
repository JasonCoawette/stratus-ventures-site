"use client";

import Card from "./Card";
import NumberGroup from "./sub-components/NumberGroup";
import { useTimePeriod } from "@/lib/context/TimePeriodContext";
import { getTimePeriodLabel } from "@/lib/utils/time";

export default function TotalUsersCard() {

    const { timePeriod } = useTimePeriod();
    const label = getTimePeriodLabel(timePeriod);

    return (
        <Card title="Total Users">
            <NumberGroup 
                value={100}
                change={0.123}
                timePeriod={label}
            />
        </Card>
    );
}