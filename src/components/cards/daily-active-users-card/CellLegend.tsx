type CellLegendProps = {
    levels: number[]
  }
  
  export default function CellLegend({ levels }: CellLegendProps) {
    return (
      <div className="flex items-center gap-2 text-sm text-slate-400">
        <span>Less</span>
        <div className="flex gap-1">
          {levels.map((level, i) => (
            <div
              key={i}
              className={`w-2 h-2 rounded-sm ${level === 0 ? "bg-slate-800" : "bg-green-500 transition-opacity"}`}
              style={{
                opacity: level === 0 ? 1 : level,
              }}
            />
          ))}
        </div>
        <span>More</span>
      </div>
    )
  }
  