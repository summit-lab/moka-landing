interface MountainSeparatorProps {
  image: string
}

export function MountainSeparator({ image }: MountainSeparatorProps) {
  return (
    <div className="relative w-full h-[680px] overflow-hidden">
      <img
        src={image}
        alt=""
        className="w-full h-full object-cover object-bottom"
        aria-hidden
      />
      <div className="absolute inset-0 bg-white/30 pointer-events-none" />
      <div
        className="absolute inset-x-0 top-0 h-16 pointer-events-none"
        style={{ background: 'linear-gradient(to bottom, white, transparent)' }}
      />
      <div
        className="absolute inset-x-0 bottom-0 h-28 pointer-events-none"
        style={{ background: 'linear-gradient(to top, white, transparent)' }}
      />
    </div>
  )
}
