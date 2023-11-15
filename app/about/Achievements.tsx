import { useRef } from "react"
import Image from "next/image"

import "swiper/css"
import "swiper/css/pagination"

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
  const sliderRef = useRef<any>()
  let starterNum = 13
  return (
    <div className="container flex  h-full w-full dark:bg-gray-900">
      <div className="w-full mb-8 h-full  text-center">
        <span className="mb-2 text-xs font-bold tracking-widest text-primary uppercase">
          Team Merits
        </span>
        <h1 className="text-4xl font-bold mb-4 leading-none tracking-tighter text-neutral-600">
          Our Achievements
        </h1>
        <div className="flex md:flex-row  justify-between w-full">
          {imgdata.map((item, i) => {
            return (
              <Image
                src={`/images/${item.path}`}
                alt=""
                width={500}
                height={500}
                className=" w-1/3 p-1 md:w-full  max-h-48 object-contain"
              />
            )
          })}
        </div>
        <div className="w-full flex flex-col items-center justify-center mt-8">
          <div className="flex flex-wrap  justify-between w-full">
            {data.map((item, i) => {
              return (
                <Image
                  key={i}
                  src={`/images/fs${item}.png`}
                  alt=""
                  width={500}
                  height={500}
                  className="h-24  mx-auto p-0.5 mb-4 w-1/3 md:w-1/6 object-contain"
                />
              )
            })}
          </div>
          <div className="mt-8 flex h-full">
            <Image
              src={`/images/fsl22.svg`}
              height={1920}
              width={1080}
              alt=""
              className="h-64  w-full object-contain z-20"
            />
            <Image
              src={`/images/bbb.png`}
              height={1920}
              width={1080}
              alt=""
              className="h-64  w-full object-contain z-20"
            />
          </div>
        </div>
      </div>
    </div>
  )
}
