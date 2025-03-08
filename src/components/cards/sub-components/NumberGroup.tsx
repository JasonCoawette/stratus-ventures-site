import NumberFlow, { NumberFlowGroup, continuous } from "@number-flow/react";

type Props = {
    value: number,
    change: number,
    timePeriod: string
}

export default function NumberGroup({value, change, timePeriod}: Props) {
    const formatNumber = (value: number) => {
        if (Math.abs(value) >= 10000000) {
            return {
                notation: 'compact' as const,
                compactDisplay: 'short' as const
            };
        }
        return {};
    };

    return (
        <NumberFlowGroup>
            <div
                style={{
                    ['--number-flow-char-height' as string]: '1em',
                    ['--number-flow-mask-height' as string]: '0em',
                    ['--number-flow-mask-width' as string]: '0em'
                }}
                className="
                    relative flex flex-col
                    w-fit h-fit
                    justify-start items-start
                    gap-2
                "
            >
                {/* Main Value */}
                <NumberFlow
                    value={value}
                    locales="en-US"
                    trend={0}
                    plugins={[continuous]}
                    format={formatNumber(value)}
                    className="
                        w-fit h-fit 
                        text-6xl text-white text-start
                        leading-none
                        tracking-tight
                        font-normal
                    "
                />

                {/* Change Ticker */}
                <div
                    className="
                        relative flex flex-row
                        w-fit h-fit
                        justify-start items-center
                        gap-2
                    "
                >
                    {/* Change Number */}
                    <NumberFlow
                        value={change}
                        locales="en-US"
                        trend={0}
                        plugins={[continuous]}
                        format={{ 
                            style: 'percent', 
                            maximumFractionDigits: 2, 
                            signDisplay: 'always'
                        }}
                        className={`
                            font-medium
                            text-md text-start ${change < 0 ? 'text-red-500': 'text-green-500'}
                            transition-colors duration-200
                        `}
                    />

                    <span className="
                        font-medium
                        text-md text-start text-slate-400 
                    ">{timePeriod}</span>
                </div>
            </div>
        </NumberFlowGroup>
    ); 
}