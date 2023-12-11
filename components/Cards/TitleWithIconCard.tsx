import { ReactNode } from "react"

export default function TitleWithIconCard({
  title,
  icon,
}: {
  title: string
  icon: ReactNode
}) {
  return (
    <>
      <div className="h-36  sm:h-56 flex flex-col justify-center border border-black rounded-xl text-center p-4  dark:border-gray-700">
        <div className="flex justify-center items-center w-12 h-12 bg-gradient-to-br from-primary to-primary/60 rounded-lg mx-auto">
          {icon}
        </div>

        <div className="mt-3">
          <h3 className="text-sm sm:text-lg font-semibold text-gray-800">
            {title}
          </h3>
        </div>
      </div>
    </>
  )
}
