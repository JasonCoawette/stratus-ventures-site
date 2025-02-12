import Card from "../Card";
import { useDaysInYear } from "@/hooks/useDaysInYear";
import ContributionGraph from "./ContributionGraph";
import CellLegend from "./CellLegend";

export default function DailyActiveUsersCard() {
    const year = new Date().getFullYear();
    const daysInYear = useDaysInYear(year);
    const levels = [0, 0.25, 0.5, 0.75, 1];

    const months = ["Jan-Feb", "Mar-Apr", "May-Jun", "Jul-Aug", "Sep-Oct", "Nov-Dec"];

    return (
        <Card 
            title="Daily Active Users"
            className="
                w-full h-full
                justify-start items-start
                gap-3
            "
            headerContent={<CellLegend levels={levels} />}
        >
            <ContributionGraph daysInYear={daysInYear} levels={levels} />
        </Card>
    );
}