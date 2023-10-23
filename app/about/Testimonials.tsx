import React, { useCallback, useRef } from "react"
import Image from "next/image"

import "swiper/css"
import { Autoplay, Navigation, Pagination } from "swiper"
import { Swiper, SwiperSlide } from "swiper/react"

import "swiper/css/pagination"
import "swiper/css/navigation"
import SwiperCore from "swiper"

import { Separator } from "@/components/ui/separator"

import { data } from "../resources/mortgage-calculator/components/piechart"

const Testimonial = (props: { data: { Label; Name; QuoteText }[] }) => {
  interface ImageData {
    path: string
  }
  let imgdata: ImageData[] = [
    {
      path: "2016.jpg",
    },
    {
      path: "2018.png",
    },
    {
      path: "2019.jpg",
    },
    {
      path: "2020.png",
    },
    {
      path: "2021.jpg",
    },
    {
      path: "2022.png",
    },
    {
      path: "2023.jpg",
    },
  ]

  return (
    <>
      <div className="bg-secondary">
        <div className="w-full mb-8 pt-24 text-center">
          <span className="mb-2 text-xs font-bold tracking-widest text-primary uppercase">
            Team Merits
          </span>
          <h1 className="text-4xl font-bold mb-4 leading-none tracking-tighter text-neutral-600">
            Our Achievements
          </h1>
        </div>
        {/* <div className="w-full">
          <Image src={`/images/bbb.png`} height={1920} width={1080} alt="" />
        </div> */}

        <section className="">
          <div className="w-full container">
            <div className="flex gap-2 mb-8">
              <div className="w-full md:w-1/4">
                <Image
                  src={`/images/bbb.png`}
                  height={1920}
                  width={1080}
                  alt=""
                />
              </div>
              <div className="w-full md:w-3/4">
                <TestimonialSwiper data={data} />
                <div className="w-full h-full flex">
                  {imgdata.map((item, i) => {
                    return (
                      <div key={i} className="w-full h-full">
                        <Image
                          src={`/images/${item.path}`}
                          height={100}
                          width={100}
                          alt=""
                          className="mx-auto"
                        />
                      </div>
                    )
                  })}
                </div>
              </div>
            </div>
          </div>
          <div className="container ">
            <Image
              src={`/images/10.png`}
              height={1600}
              width={800}
              alt=""
              className="w-3/4 pt-16  mx-auto rounded-xl"
            />{" "}
          </div>
        </section>
      </div>
    </>
  )
}

export function TestimonialSwiper(props: { data }) {
  const sliderRef = useRef<any>()
  SwiperCore.use([Autoplay])
  return props.data && props.data.length > 0 ? (
    <Swiper
      slidesPerView={1}
      ref={sliderRef}
      loop
      effect="cards"
      autoplay={{
        delay: 3000,
      }}
      grabCursor
      pagination={{
        type: "progressbar",
      }}
      modules={[Autoplay, Pagination]}
      className=" mb-4 mySwiper"
    >
      {props.data &&
        props.data.map((item, i) => (
          <SwiperSlide>
            <SingleTestimonial {...item} />
          </SwiperSlide>
        ))}
    </Swiper>
  ) : (
    <></>
  )
}

export default Testimonial

export const SingleTestimonial = ({ Label, Name, QuoteText }) => {
  return (
    <div className="relative flex justify-center min-h-64 border-2 shadow-md border-gray-100 rounded-xl">
      <div className="relative w-full p-4 bg-white rounded-xl ">
        <div className="w-full">
          <div>
            {/* <div className="mb-7">
              <img src={reviewImg} alt={reviewAlt} />
            </div> */}

            <blockquote className="border-l-4 border-gray-300 bg-gray-50 dark:border-gray-500 dark:bg-gray-800">
              <p className="text-sm md:text-xl italic font-light leading-relaxed text-gray-900 dark:text-white">
                {QuoteText}
              </p>
            </blockquote>
            <div className="">
              <h4 className="text-dark text-lg font-semibold ">{Name}</h4>
              <p className="text-body-color text-base">{Label}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
