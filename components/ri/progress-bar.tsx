"use client"

interface ProgressBarProps {
  progress: number
}

export default function ProgressBar({ progress }: ProgressBarProps) {
  return (
    <div className="fixed top-0 left-0 h-1 bg-gradient-to-r from-[#AC4E15] to-[#C88715] transition-all duration-300 z-50"
      style={{ width: `${Math.min(100, Math.max(0, progress))}%` }} />
  )
}
