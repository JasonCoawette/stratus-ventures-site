type CellProps = {
    level: number;
};

export default function Cell({ level }: CellProps) {
    return (
        <div
            className={`w-2 h-2 ${level === 0 ? 'bg-slate-800' : 'bg-green-500'}`}
            style={{
                opacity: level === 0 ? 1 : level,
                borderRadius: '2px'
            }}
        />
    );
}