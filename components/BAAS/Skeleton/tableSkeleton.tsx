import { Skeleton } from "@/components/ui/skeleton"

export default function TableSkeleton() {
  return (
    <div className="flex items-center space-x-4 w-full">
      <div className="space-y-2 w-full">
        <Skeleton className="h-24 w-full bg-secondary" />
        <Skeleton className="h-64 w-full bg-secondary" />
      </div>
    </div>
  )
}
