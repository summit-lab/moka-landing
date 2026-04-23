'use client'

import { useEffect, useRef, ReactNode, CSSProperties } from 'react'

type Props = {
  children: ReactNode
  delay?: number
  className?: string
  style?: CSSProperties
  fade?: boolean
}

export function AnimateIn({ children, delay = 0, className = '', style, fade = false }: Props) {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    // Immediately show if already in viewport (avoids blank page on load)
    const rect = el.getBoundingClientRect()
    const vh = window.innerHeight || document.documentElement.clientHeight
    if (rect.top < vh && rect.bottom > 0) {
      el.style.transitionDelay = `${delay}ms`
      el.classList.add('visible')
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.style.transitionDelay = `${delay}ms`
          el.classList.add('visible')
        } else {
          el.style.transitionDelay = '0ms'
          el.classList.remove('visible')
        }
      },
      { threshold: 0.05, rootMargin: '0px 0px -20px 0px' }
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [delay])

  return (
    <div ref={ref} className={`${fade ? 'reveal-fade' : 'reveal'} ${className}`} style={style}>
      {children}
    </div>
  )
}
