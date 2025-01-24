import NumberFlow, { NumberFlowGroup, continuous } from "@number-flow/react";

type Props = {
    value: number,
    change: number,
    timePeriod: string
}

export default function NumberGroup({value, change, timePeriod}: Props) {

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
                    w-full h-fit
                    justify-center items-center
                    gap-4
                "
            >
                {/* Main Value */}
                <NumberFlow
                    value={value}
                    locales="en-US"
                    trend={0}
                    plugins={[continuous]}
                    className="
                        w-full h-fit 
                        text-7xl text-white text-start
                        font-normal
                    "
                />

                {/* Change Ticker */}
                <div
                    className="
                        relative flex flex-row
                        w-full h-fit
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
                        format={{ style: 'percent', maximumFractionDigits: 2, signDisplay: 'always' }}
                        className={`
                            font-medium
                            text-lg text-start ${change < 0 ? 'text-red-500': 'text-green-500'}
                            transition-colors duration-200
                        `}
                    />

                    <span className="
                        font-medium
                        text-lg text-start text-neutral-400
                    ">{timePeriod}</span>
                </div>
            </div>
        </NumberFlowGroup>
    ); 
}