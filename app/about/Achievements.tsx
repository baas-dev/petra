"use client"

import { useRef } from "react"
import Image from "next/image"

import "swiper/css"
import "swiper/css/pagination"
import IntroSection from "@/components/Sections/General/IntroSection"

export default function Achievements() {
  interface ImageData {
    path: string
  }
  let data = [13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23]
  let imgdata: ImageData[] = [
    {
      path: "2016.jpg",
    },
    {
      path: "dmag2018.png",
    },
    {
      path: "dmag2019.png",
    },
    {
      path: "dmag2020.png",
    },
    {
      path: "dmag2021.png",
    },
    {
      path: "dmag2022.png",
    },
    {
      path: "dmag2023.png",
    },
  ]
  let rd = imgdata.reverse()
  let rdd = data.reverse()
  return (
    <div className=" flex  h-full w-full dark:bg-gray-900">
      <div className="mb-8 h-full w-full  text-center">
        <IntroSection ImageURL={"/site/about/bgawards.png"} />
        <div className="container">
          <div className="mx-auto flex w-full max-w-2xl flex-wrap items-center justify-center">
            {rd.map((item, i) => {
              return (
                <div className="w-1/2 md:w-1/4">
                  <Image
                    src={`/images/${item.path}`}
                    alt=""
                    width={500}
                    height={500}
                    className="  max-h-48 object-contain  p-1 md:w-full"
                  />
                </div>
              )
            })}
          </div>

          <div className="mt-8 flex w-full flex-col items-center justify-center">
            <div className="mt-8 flex h-full">
              <Image
                src={`/images/forbes.png`}
                height={1920}
                width={1080}
                alt=""
                className="z-20  h-64 w-full object-contain"
              />
              <Image
                src={`/images/bbb.png`}
                height={1920}
                width={1080}
                alt=""
                className="z-20  h-64 w-full object-contain"
              />
              <Image
                src={`/images/fsl22.svg`}
                height={1920}
                width={1080}
                alt=""
                className="z-20  h-64 w-full object-contain"
              />
            </div>
            <div className="mx-auto mt-8 flex w-full max-w-4xl flex-wrap items-center justify-center">
              {rdd.map((item, i) => {
                return (
                  <div className="w-1/2 px-2 md:w-1/4">
                    <Image
                      key={i}
                      src={`/images/fs${item}.png`}
                      alt=""
                      width={500}
                      height={500}
                      className="h-24  object-contain"
                    />
                  </div>
                )
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
