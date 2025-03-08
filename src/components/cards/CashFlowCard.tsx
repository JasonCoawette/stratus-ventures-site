import { NumberFlowGroup } from "@number-flow/react";
import Card from "./Card";
import NumberFlow, { continuous } from "@number-flow/react";

export default function CashFlowCard() {
    const formatNumberMobile = () => ({
        style: 'currency' as const,
        currency: 'USD',
        maximumFractionDigits: 2,
        signDisplay: 'always' as const,
        notation: 'compact' as const,
        compactDisplay: 'short' as const
    });

    const formatNumberDesktop = () => ({
        style: 'currency' as const,
        currency: 'USD',
        maximumFractionDigits: 2,
        signDisplay: 'always' as const
    });

    return (
        <Card 
            title="Cash Flow"
            className="
                w-full h-full
                justify-start items-start
                gap-1
            "
        >
            <NumberFlowGroup>
                <div
                    style={{
                        ['--number-flow-char-height' as string]: '1em',
                        ['--number-flow-mask-height' as string]: '0em',
                        ['--number-flow-mask-width' as string]: '0em'
                    }}
                    className="
                        relative flex flex-row
                        w-fit h-fit
                        justify-start items-start
                        gap-4
                    "
                >
                    {/* Mobile version */}
                    <NumberFlow 
                        value={100000000} 
                        locales="en-US"
                        format={formatNumberMobile()}
                        trend={0}
                        plugins={[continuous]}
                        className="
                            visible
                            w-fit h-fit 
                            text-5xl text-green-500 text-start  
                            leading-none
                            tracking-tight
                            font-normal
                        "
                    />

                    {/* Desktop version */}
                    <NumberFlow 
                        value={100000000} 
                        locales="en-US"
                        format={formatNumberDesktop()}
                        trend={0}
                        plugins={[continuous]}
                        className="
                            lg:visible hidden
                            w-fit h-fit 
                            text-5xl text-green-500 text-start  
                            leading-none
                            tracking-tight
                            font-normal
                        "
                    />

                    {/* Mobile version */}
                    <NumberFlow 
                        value={-1000000} 
                        locales="en-US"
                        format={formatNumberMobile()}
                        trend={0}
                        plugins={[continuous]}
                        className="
                            visible
                            w-fit h-fit 
                            text-5xl text-red-500 text-start  
                            leading-none
                            tracking-tight
                            font-normal
                        "
                    />

                    {/* Desktop version */}
                    <NumberFlow 
                        value={-1000000} 
                        locales="en-US"
                        format={formatNumberDesktop()}
                        trend={0}
                        plugins={[continuous]}
                        className="
                            lg:visible hidden
                            w-fit h-fit 
                            text-5xl text-red-500 text-start  
                            leading-none
                            tracking-tight
                            font-normal
                        "
                    />
                </div>
            </NumberFlowGroup>

            <div className="flex flex-row w-full h-fit justify-start items-center gap-2 mt-2"> 
                <span className="text-md text-slate-400 font-medium leading-none">Total revenue:</span>
                <span className="text-md text-slate-200 font-medium font-mono">{"$100,000,000"}</span>
            </div>
        </Card>
    );
}