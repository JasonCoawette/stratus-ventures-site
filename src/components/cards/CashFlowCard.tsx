import Card from "./Card";
import NumberFlow, { continuous } from "@number-flow/react";

export default function CashFlowCard() {
    const formatNumber = (value: number) => {
        if (Math.abs(value) >= 10000000) {
            return {
                style: 'currency' as const,
                currency: 'USD',
                maximumFractionDigits: 2,
                signDisplay: 'always' as const,
                notation: 'compact' as const,
                compactDisplay: 'short' as const
            };
        }
        return {
            style: 'currency' as const,
            currency: 'USD',
            maximumFractionDigits: 2,
            signDisplay: 'always' as const
        };
    };

    return (
        <Card 
            title="Cash Flow"
            className="
                w-full h-fit
                justify-start items-start
            "
        >
            <div className="
                relative
                flex flex-row 
                w-full h-fit 
                justify-start items-center
                gap-4
            "> 
                <NumberFlow 
                    value={100000000} 
                    locales="en-US"
                    format={formatNumber(100000000)}
                    trend={0}
                    plugins={[continuous]}
                    className="
                        w-fit h-fit 
                        text-5xl text-green-500 text-start  
                        leading-none
                        tracking-tighter
                        font-normal
                    "
                />

                <NumberFlow 
                    value={-1000000} 
                    locales="en-US"
                    format={formatNumber(-1000000)}
                    trend={0}
                    plugins={[continuous]}
                    className="
                        w-fit h-fit 
                        text-5xl text-red-500 text-start  
                        leading-none
                        tracking-tighter
                        font-normal
                    "
                />
            </div>

            <div className="flex flex-row w-full h-fit justify-start items-center gap-2"> 
                <span className="text-md text-slate-400 font-medium leading-none">Total revenue:</span>
                <span className="text-md text-slate-200 font-medium font-mono">{"$100,000,000"}</span>
            </div>
        </Card>
    );
}