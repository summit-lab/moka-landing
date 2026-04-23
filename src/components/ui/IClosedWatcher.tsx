'use client'

import { useEffect } from 'react'
import { useRouter } from 'next/navigation'

export function IClosedWatcher() {
  const router = useRouter()

  useEffect(() => {
    const handle = (e: MessageEvent) => {
      // iClosed fires a postMessage when the booking is confirmed
      // We catch any message from iclosed.io and redirect ourselves
      const origin = e.origin || ''
      const raw = e.data

      if (!origin.includes('iclosed.io') && !origin.includes('app.iclosed')) return

      try {
        const data = typeof raw === 'string' ? JSON.parse(raw) : raw
        const str = JSON.stringify(data ?? '').toLowerCase()

        if (
          str.includes('booking') ||
          str.includes('confirm') ||
          str.includes('scheduled') ||
          str.includes('complete') ||
          str.includes('success')
        ) {
          router.push('/confirmacion')
        }
      } catch {
        // Message is not JSON — still came from iclosed, treat as confirmation
        router.push('/confirmacion')
      }
    }

    window.addEventListener('message', handle)
    return () => window.removeEventListener('message', handle)
  }, [router])

  return null
}
