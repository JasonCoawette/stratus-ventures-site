"use client";

import Card from "./Card";
import NumberGroup from "./sub-components/NumberGroup";
import { useTimePeriod } from "@/lib/context/TimePeriodContext";
import { calculateChange } from "@/lib/utils/calculations";
import { useGetTotalUsers } from "@/hooks/useGetTotalUsers";
import { useState, useEffect } from "react";
import { getTimePeriodLabel } from "@/lib/utils/time";

export default function TotalUsersCard() {

  const { timePeriod } = useTimePeriod();
  const label = getTimePeriodLabel(timePeriod);


  const totalUsers = useGetTotalUsers();
  const [previousUsers, setPreviousUsers] = useState<number>(0);
  const [change, setChange] = useState<number>(0);


  useEffect(() => {
    if (previousUsers !== 0) {
      setChange(calculateChange(totalUsers, previousUsers));
    }
    setPreviousUsers(totalUsers);
  }, [totalUsers]);


    return (
        <Card title="Total Users">
            <NumberGroup 
                value={totalUsers}
                change={change}
                timePeriod={label}
            />
        </Card>
    );
}