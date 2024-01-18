import { Skeleton } from "@/components/ui/skeleton"

export default function TableLoading() {
  return (
    <>
      <div className="flex flex-wrap space-y-4">
        <Skeleton className="h-[50px] w-full bg-gray-500" />
        <Skeleton className="h-[300px] w-full bg-gray-500" />
      </div>
    </>
  )
}
