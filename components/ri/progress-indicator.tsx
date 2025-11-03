"use client"

interface ProgressIndicatorProps {
  current: number
  total: number
}

export default function ProgressIndicator({ current, total }: ProgressIndicatorProps) {
  return (
    <div className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 text-sm text-[#ac4e15]/70 font-medium">
      {current} / {total}
    </div>
  )
}
