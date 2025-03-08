import Card from "../Card";
import NumberGroup from "../sub-components/NumberGroup";
import Icon from "../sub-components/Icon";

export default function ActiveSessionsCard() {


    return (
        <Card 
            title="Active Sessions"
            className="
                w-full h-full
                justify-start items-start
                gap-1
            "
        >
            <div className="relative flex flex-col gap-8 z-10">
                <NumberGroup
                    value={100000}
                    change={100}
                    timePeriod={"Today so far"}
                />

                <div className="
                    flex flex-col
                    w-full h-full
                    justify-start items-start
                    gap-3
                ">
                    <div className="
                            flex flex-row
                            w-fit h-fit
                            justify-center items-center
                            gap-2
                        ">
                            <Icon variant="Live Download Event" size={20} color={"#0ea5e9"}/>
                            <p className="text-slate-400 text-sm font-medium">Live download event</p>
                        </div>

                        <div className="
                            flex flex-row
                            w-fit h-fit
                            justify-center items-center
                            gap-2
                        ">
                            <Icon variant="In-App Purchase" size={20} color={"#22c55e"}/>
                            <p className="text-slate-400 text-sm font-medium">In-App Purchase</p>
                        </div>

                        <div className="
                            flex flex-row
                            w-fit h-fit
                            justify-center items-center
                            gap-2
                        ">
                            <Icon variant="New Rating or Review" size={20} color={"#d946ef"}/>
                            <p className="text-slate-400 text-sm font-medium">New Rating or Review</p>
                        </div>
                </div>
            </div>

        </Card>
    );
}