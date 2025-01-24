"use client";

import Card from "./Card";
import NumberGroup from "./sub-components/NumberGroup";
import { useGetStats } from "@/app/hooks/useGetStats";
import { useTimePeriod } from "@/lib/context/TimePeriodContext";
import { getTimePeriodLabel } from "@/lib/utils/time";

export default function TotalUsersCard() {

    const totalUsers = useGetStats("totalUsers");
    const { timePeriod } = useTimePeriod();
    const label = getTimePeriodLabel(timePeriod);

    return (
        <Card title="Total Users">
            <NumberGroup 
                value={totalUsers.value}
                change={totalUsers.change}
                timePeriod={label}
            />
        </Card>
    );
}