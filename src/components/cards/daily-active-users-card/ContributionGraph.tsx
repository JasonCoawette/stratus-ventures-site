import Cell from "./Cell"
import { useEffect, useState } from "react"

type ContributionGraphProps = {
  daysInYear: number // keeping for future use
  levels: number[]
}

const MONTHS = ["Jan-Feb", "Mar-Apr", "May-Jun", "Jul-Aug", "Sep-Oct", "Nov-Dec"]

export default function ContributionGraph({ levels }: ContributionGraphProps) {
  const rows = 7
  const columnsPerMonth = 8
  
  // Start with all cells at level 0
  const [cellLevels, setCellLevels] = useState<number[][]>(
    MONTHS.map(() => Array(rows * columnsPerMonth).fill(0))
  )

  // Generate random levels after component mounts
  useEffect(() => {
    setCellLevels(
      MONTHS.map(() => 
        Array(rows * columnsPerMonth).fill(0).map(() => 
          levels[Math.floor(Math.random() * levels.length)]
        )
      )
    )
  }, [levels])

  return (
    <div className="flex flex-col gap-2 justify-start items-start">
      <div className="grid grid-cols-6 gap-x-8 gap-y-2 w-full justify-start items-start">
        {MONTHS.map((month, monthIndex) => (
          <div key={month} className="grid grid-rows-7 grid-flow-col gap-1">
            {cellLevels[monthIndex].map((level, index) => (
              <Cell key={`${monthIndex}-${index}`} level={level} />
            ))}
          </div>
        ))}

        {MONTHS.map((month) => (
          <div key={month} className="text-center text-sm text-slate-400 font-medium">
            {month}
          </div>
        ))}
      </div>
    </div>
  )
}
