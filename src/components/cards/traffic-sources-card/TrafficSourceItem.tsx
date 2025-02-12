import Icon from "../sub-components/Icon";
import Link from "next/link";

type Props = {
    url: string;
    viewCount: number;
    conversionRate: number;
    topProduct: string;
}

export default function TrafficSourceItem({url, viewCount, conversionRate, topProduct}: Props) {

    const formatUrl = (url: string) => {
        try {
            const domain = new URL(url).hostname;
            return domain.replace(/^www\./, '');
        } catch {
            return url;
        }
    };

    return (
        <div className="
            flex flex-col
            w-full h-fit
            font-mono
            justify-between items-start
            bg-slate-800 rounded-lg
            p-3
            gap-2
        ">

            <div className="
                flex flex-row 
                w-full h-fit
                justify-between items-start
                gap-2
            ">
                <Link href={url} className="text-sky-500 text-sm font-semibold">{formatUrl(url)}</Link>

                <div className="
                    flex flex-row
                    w-fit h-fit
                    justify-between items-center
                    gap-1
                "> 
                    <span className="text-slate-400 text-sm font-medium">Top:</span>
                    <span className="text-white text-sm font-medium">{topProduct}</span>
                </div>

            </div>

            <div className="
                flex flex-row
                w-fit h-fit
                justify-between items-center
                gap-2
            ">
                <div className="flex flex-row items-center gap-1">
                    <Icon variant="View" size={20} color={"#64748b"}/>
                    <p className="text-slate-400 text-sm font-medium ">{viewCount}</p>
                </div>

                <div className="flex flex-row items-center gap-1">
                    <Icon variant="Conversion" size={20} color={"#64748b"}/>
                    <p className="text-slate-400 text-sm font-medium ">{conversionRate}</p>
                </div>
            </div>

        </div>
    );
}