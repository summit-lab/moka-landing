interface MountainSeparatorProps {
  image: string
  position?: string
}

export function MountainSeparator({ image, position = '50% 65%' }: MountainSeparatorProps) {
  return (
    <div className="relative w-full h-[320px] md:h-[680px] overflow-hidden">
      <img
        src={image}
        alt=""
        className="w-full h-full object-cover"
        style={{ objectPosition: position }}
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
