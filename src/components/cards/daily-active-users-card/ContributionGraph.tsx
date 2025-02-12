import Cell from "./Cell"

type ContributionGraphProps = {
  daysInYear: number
  levels: number[]
}

export default function ContributionGraph({ daysInYear, levels }: ContributionGraphProps) {
  const rows = 7
  const columnsPerMonth = 8
  const months = ["Jan-Feb", "Apr-May", "May-Jun", "Jul-Aug", "Sep-Oct", "Nov-Dec"]

  return (
    <div className="flex flex-col gap-2 justify-start items-start">
      <div className="grid grid-cols-6 gap-x-8 gap-y-2 w-full justify-start items-start">
        {months.map((month, monthIndex) => (
          <div key={month} className="grid grid-rows-7 grid-flow-col gap-1">
            {Array.from({ length: rows * columnsPerMonth }).map((_, index) => {
              const level = levels[Math.floor(Math.random() * levels.length)]
              return <Cell key={`${monthIndex}-${index}`} level={level} />
            })}
          </div>
        ))}

        {months.map((month) => (
          <div key={month} className="text-center text-sm text-slate-400 font-medium">
            {month}
          </div>
        ))}
      </div>
    </div>
  )
}
