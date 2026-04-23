'use client'

function getProofNumber(): number {
  const msPerDay = 1000 * 60 * 60 * 24
  const period = Math.floor(Date.now() / msPerDay / 5)
  const hash = (period * 2654435761) >>> 0
  return 15 + (hash % 16)
}

export function SocialProofNumber() {
  return <>{getProofNumber()}</>
}
