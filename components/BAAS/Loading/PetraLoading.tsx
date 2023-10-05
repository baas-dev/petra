import { Skeleton } from "@/components/ui/skeleton"

export default function TableLoading() {
  return (
    <>
      <div className="flex flex-wrap space-y-4">
        <Skeleton
          className="w-full h-[50px]"
          style={{ backgroundImage: "/images/10.png", backgroundSize: "cover" }}
        />
        <Skeleton className="w-full h-[300px] bg-gray-500" />
      </div>
    </>
  )
}
