"use client"

/**
 * Specific skeleton loaders for different section types
 * Better UX than generic spinner
 */

export function CardGridSkeleton() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 p-6 sm:p-8 md:p-12 animate-pulse">
      {[1, 2, 3].map((i) => (
        <div key={i} className="rounded-3xl border border-[#d9cbbb]/60 bg-white/75 p-6 sm:p-8">
          <div className="h-12 w-12 rounded-full bg-[#ac4e15]/20 mb-4" />
          <div className="h-6 bg-[#354037]/20 rounded mb-3 w-3/4" />
          <div className="h-4 bg-[#3a3631]/10 rounded mb-2" />
          <div className="h-4 bg-[#3a3631]/10 rounded w-5/6" />
        </div>
      ))}
    </div>
  )
}

export function HeroSkeleton() {
  return (
    <div className="flex h-full flex-col justify-center bg-gradient-to-br from-white via-[#f5f1ec] to-[#c88715]/10 p-6 sm:p-8 md:p-12 animate-pulse">
      <div className="mx-auto max-w-5xl space-y-8 w-full">
        <div className="space-y-4">
          <div className="h-4 w-32 bg-[#ac4e15]/30 rounded" />
          <div className="h-12 bg-[#354037]/20 rounded w-full" />
          <div className="h-12 bg-[#354037]/20 rounded w-4/5" />
          <div className="h-6 bg-[#3a3631]/10 rounded w-full" />
          <div className="h-6 bg-[#3a3631]/10 rounded w-3/4" />
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {[1, 2, 3, 4].map((i) => (
            <div key={i} className="rounded-2xl bg-white/85 p-5 h-24" />
          ))}
        </div>
      </div>
    </div>
  )
}

export function TimelineSkeleton() {
  return (
    <div className="p-6 sm:p-8 md:p-12 animate-pulse">
      <div className="space-y-4 mb-8">
        <div className="h-4 w-48 bg-[#ac4e15]/30 rounded" />
        <div className="h-10 bg-[#354037]/20 rounded w-3/4" />
      </div>
      <div className="flex gap-4 overflow-x-auto pb-4">
        {[1, 2, 3, 4, 5].map((i) => (
          <div key={i} className="rounded-3xl bg-white/75 p-6 min-w-[280px] h-[200px]" />
        ))}
      </div>
    </div>
  )
}

export function TableSkeleton() {
  return (
    <div className="p-6 sm:p-8 md:p-12 animate-pulse">
      <div className="space-y-4 mb-8">
        <div className="h-4 w-48 bg-[#ac4e15]/30 rounded" />
        <div className="h-10 bg-[#354037]/20 rounded w-2/3" />
      </div>
      <div className="space-y-3">
        {[1, 2, 3, 4, 5].map((i) => (
          <div key={i} className="flex gap-4">
            <div className="h-12 flex-1 bg-white/75 rounded-lg" />
            <div className="h-12 flex-1 bg-white/75 rounded-lg" />
            <div className="h-12 flex-1 bg-white/75 rounded-lg" />
          </div>
        ))}
      </div>
    </div>
  )
}

export function DefaultSectionSkeleton() {
  return (
    <div className="h-full flex items-center justify-center bg-gradient-to-br from-white to-gray-50 animate-pulse">
      <div className="text-center">
        <div className="inline-block h-12 w-12 rounded-full bg-[#ac4e15]/20 mb-4" />
        <div className="h-6 w-48 bg-[#354037]/20 rounded mx-auto" />
      </div>
    </div>
  )
}
