"use client"

import { ReactNode } from "react"
import { useRouter } from "next/navigation"

import { SlideInAnimation } from "../Animations/InViewAnimationWrapper"
import { Separator } from "../ui/separator"

export default function TitleWithIconCard({
  title,
  icon,
  link,
  delay,
  height,
  width,
}: {
  title?: string
  icon?: ReactNode
  link?: string
  delay?: number
  height?: string
  width?: string
}) {
  let r = useRouter()
  return (
    <>
      <div
        onClick={() => {
          link != null ? r.push(link) : null
        }}
        className={`${height} ${width} flex flex-col justify-normal rounded-xl border border-primary bg-gradient-to-br from-white  to-blue-100/50 p-4  text-center transition hover:scale-105 hover:cursor-pointer  dark:border-gray-700`}
      >
        <div className="w-full max-w-sm">
          <SlideInAnimation
            options={{
              delay: delay,
            }}
          >
            <h3 className="text-sm font-semibold  sm:text-2xl ">{title}</h3>
          </SlideInAnimation>
        </div>
        <Separator className="w-md my-4 bg-gray-300" />
        <div className="mx-auto flex items-center  justify-center rounded-lg">
          {icon}
        </div>
      </div>
    </>
  )
}
