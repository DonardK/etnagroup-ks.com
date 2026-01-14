export const LoadingSkeleton = ({ className = '' }: { className?: string }) => {
  return (
    <div className={`animate-pulse ${className}`}>
      <div className="h-full w-full rounded-lg bg-[#657432]/20" />
    </div>
  )
}

export const UnitCardSkeleton = () => {
  return (
    <div className="overflow-hidden rounded-2xl bg-[#F8F2DD] shadow-lg border border-[#657432]/20">
      <div className="aspect-video animate-pulse bg-[#657432]/20" />
      <div className="p-6">
        <div className="mb-4 h-6 w-3/4 animate-pulse rounded bg-[#657432]/20" />
        <div className="mb-4 h-8 w-1/2 animate-pulse rounded bg-[#657432]/20" />
        <div className="mb-4 grid grid-cols-3 gap-2">
          {[1, 2, 3].map((i) => (
            <div key={i} className="h-12 animate-pulse rounded bg-[#657432]/10" />
          ))}
        </div>
        <div className="space-y-2">
          {[1, 2, 3].map((i) => (
            <div key={i} className="h-4 animate-pulse rounded bg-[#657432]/10" />
          ))}
        </div>
        <div className="mt-6 h-12 animate-pulse rounded-full bg-[#657432]/20" />
      </div>
    </div>
  )
}
