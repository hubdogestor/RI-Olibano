"use client"

interface BreadcrumbProps {
  items: string[]
}

export default function Breadcrumb({ items }: BreadcrumbProps) {
  return (
    <nav className="text-xs text-[#ac4e15]/60 mb-6 font-medium tracking-wide">
      {items.map((item, i) => (
        <span key={i}>
          {item}
          {i < items.length - 1 && <span className="mx-2">/</span>}
        </span>
      ))}
    </nav>
  )
}
