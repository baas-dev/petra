import Image from "next/image"

export default function StatCard(props: { title; description; image }) {
  return (
    <div className="min-w-0 w-full rounded-lg shadow-xs z-10 overflow-hidden border shadow-md bg-white dark:bg-gray-800">
      <div className="p-4 flex items-center">
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
