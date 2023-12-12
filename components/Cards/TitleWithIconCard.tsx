"use client"

import { ReactNode } from "react"
import { useRouter } from "next/navigation"

import { Separator } from "../ui/separator"

export default function TitleWithIconCard({
  title,
  icon,
  link,
}: {
  title: string
  icon: ReactNode
  link?: string
}) {
  let r = useRouter()
  return (
    <>
      <div
        onClick={() => {
          link != null ? r.push(link) : null
        }}
        className="h-64 justify-normal hover:cursor-pointer bg-gradient-to-br transition hover:scale-105 from-white to-blue-100 flex flex-col  border border-primary  w-full rounded-xl text-center p-4  dark:border-gray-700"
      >
        <div className="w-full max-w-sm">
          <h3 className="text-sm sm:text-2xl  font-semibold ">{title}</h3>
        </div>
        <Separator className="w-md my-4 bg-gray-300" />
        <div className="flex justify-center items-center  rounded-lg mx-auto">
          {icon}
        </div>
      </div>
    </>
  )
}
