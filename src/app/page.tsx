"use client";

import DataStreamCard from "@/components/cards/data-stream-card/DataStreamCard";
import ActiveSessionsCard from "@/components/cards/active-sessions-card/ActiveSessionsCard";
import DownloadsCard from "@/components/cards/DownloadsCard";
import TrafficSourcesCard from "@/components/cards/traffic-sources-card/TrafficSourcesCard";
import CashFlowCard from "@/components/cards/CashFlowCard";
import DailyActiveUsersCard from "@/components/cards/daily-active-users-card/DailyActiveUsersCard";
import TotalUsersCard from "@/components/cards/TotalUsersCard";

export default function Dashboard() {
    return (
        <main className="
            relative flex flex-col
            w-full h-full
            justify-center items-center
            p-4 gap-4
        ">
            {/* Top Row */}
            <div className="
                flex flex-row
                w-full h-full
                justify-center items-start
                gap-4
            ">
                {/* Downloads and Traffic Sources */}
                <div className="
                    flex flex-col
                    basis-1/4 max-w-[48rem] min-w-[18rem] h-full
                    justify-start items-center
                    gap-4
                ">
                    <DownloadsCard/>
                    <TrafficSourcesCard />
                </div>  

                <ActiveSessionsCard />
                
                {/* Data Stream */}
                <div className="
                    flex flex-col
                    basis-1/4 max-w-[48rem] min-w-[18rem] h-full
                    justify-start items-center
                    gap-4
                ">
                    <DataStreamCard />
                </div>
            </div>

            {/* Bottom Row */}
            <div className="
                flex flex-row
                w-full h-fit
                justify-start items-start
                gap-4
            ">
                {/* CashFlow and Daily Active Users */}
                <div className="
                    flex flex-row
                    w-full h-full
                    justify-center items-stretch
                    gap-4
                ">
                    <div className="min-w-[18rem] w-full h-full">
                        <CashFlowCard />
                    </div>

                    <div className="min-w-[18rem] w-full h-full">
                        <DailyActiveUsersCard />
                    </div>
                </div>

                {/* Total Users */}
                <div className="
                    flex flex-col
                    basis-1/4 max-w-[48rem] min-w-[18rem] h-full
                    justify-start items-start
                ">
                    <TotalUsersCard />
                </div>
            </div>
        </main>
    );
}