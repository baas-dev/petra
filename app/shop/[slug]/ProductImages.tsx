"use client"

import { useCallback, useRef } from "react"
import Image from "next/image"
import { IconLeft, IconRight } from "react-day-picker"

import "swiper/css"
import { Swiper, SwiperSlide } from "swiper/react"

import { Button } from "@/components/ui/button"

export default function ProductImages({ data }) {
  const sliderRef = useRef<any>()
  let arr: any[] = []

  const handlePrev = useCallback(() => {
    if (!sliderRef.current) return
    sliderRef.current.swiper.slidePrev()
  }, [])

  const handleNext = useCallback(() => {
    if (!sliderRef.current) return
    sliderRef.current.swiper.slideNext()
  }, [])

  function getImgs() {
    let AllImgs: any[] = []
    AllImgs.push({ Image: data.Image })
    AllImgs.push(data.SecondaryImages ? data.SecondaryImages : { Image: "/" })

    return AllImgs
  }

  arr = getImgs()
  console.log(arr)
  return (
    <div className="w-full  px-4">
      <div className="w-full mb-2 flex justify-between ">
        <Button className="rounded-full" onClick={handlePrev}>
          <IconLeft />
        </Button>
        <Button className="rounded-full" onClick={handleNext}>
          <IconRight />
        </Button>
      </div>
      <Swiper slidesPerView={1} loop ref={sliderRef} className="mb-4">
        {arr.length > 0 &&
          arr.map((item, i) => (
            <SwiperSlide key={i}>
              {item.Image ? (
                <Image
                  src={item.Image && item.Image !== null ? item.Image : "/"}
                  height={500}
                  width={500}
                  alt=""
                  className="w-full  h-full "
                />
              ) : (
                <></>
              )}
            </SwiperSlide>
          ))}
      </Swiper>
    </div>
  )
}
