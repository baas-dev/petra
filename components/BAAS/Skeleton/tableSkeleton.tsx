import { Skeleton } from "@/components/ui/skeleton"

export default function TableSkeleton() {
  return (
    <div className="flex w-full items-center space-x-4">
      <div className="w-full space-y-2">
        <Skeleton className="h-24 w-full bg-secondary" />
        <Skeleton className="h-64 w-full bg-secondary" />
      </div>
    </div>
  )
}
