const BARS = [55, 38, 70, 48, 82, 44, 68, 90, 60, 75]
const ROWS = [
  { label: 'Alcance', val: '12.4K' },
  { label: 'Interacciones', val: '834' },
  { label: 'DMs', val: '47' },
]

export function AppMockup() {
  return (
    <div className="rounded-xl border border-zinc-200 bg-white shadow-sm p-5 space-y-4 select-none">
      <div className="flex items-center justify-between">
        <div className="h-2.5 w-24 bg-zinc-100 rounded-full" />
        <div className="h-2.5 w-14 bg-zinc-100 rounded-full" />
      </div>

      <div className="flex items-end gap-1.5 h-20">
        {BARS.map((h, i) => (
          <div
            key={i}
            className="flex-1 rounded-t"
            style={{
              height: `${h}%`,
              backgroundColor: i === 7 ? '#6B4226' : '#E4E4E7',
            }}
          />
        ))}
      </div>

      <div className="space-y-2 pt-1">
        {ROWS.map((row) => (
          <div key={row.label} className="flex items-center justify-between">
            <span className="text-xs text-zinc-400">{row.label}</span>
            <span className="text-xs font-semibold text-zinc-700">{row.val}</span>
          </div>
        ))}
      </div>
    </div>
  )
}
