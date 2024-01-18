import Image from "next/image"

export default function StatCard(props: { title; description; image }) {
  return (
    <div className="shadow-xs z-10 w-full min-w-0 overflow-hidden rounded-lg border bg-white shadow-md dark:bg-gray-800">
      <div className="flex items-center p-4">
        <div className="mr-4">
          <Image
            src={props.image}
            alt=""
            width={500}
            height={500}
            className="h-24 w-full object-contain"
          />
        </div>
        <div>
          <p className="mb-2 text-sm font-medium text-gray-600 dark:text-gray-400">
            {props.title}
          </p>
          <p className="text-lg font-semibold text-gray-700 dark:text-gray-200">
            {props.description}
          </p>
        </div>
      </div>
    </div>
  )
}
