import Card from "../Card";
import LiveIndicator from "./LiveIndicator";
export default function DataStreamCard() {


    return (
        <Card 
            title="Data Stream" 
            className="
                w-full h-full
                justify-start items-start
                gap-1
            "
        >
            <div className="
                flex flex-col
                w-full h-full
                justify-start items-center
                gap-2
            ">
                <div className="
                    flex flex-row
                    w-full h-fit
                    justify-between items-center
                ">
                    <h4 className="text-slate-400 text-md font-medium">Real time</h4>
                    <LiveIndicator />
                </div>
                <p>data stream component here</p>
            </div>
        </Card>
    );
}