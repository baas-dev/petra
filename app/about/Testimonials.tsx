import React, { useCallback, useRef } from "react"
import IMG from "next/image"

import "swiper/css"
import { Autoplay, Navigation, Pagination } from "swiper"
import { Swiper, SwiperSlide } from "swiper/react"

import "swiper/css/pagination"
import "swiper/css/navigation"
import SwiperCore from "swiper"

import { Separator } from "@/components/ui/separator"

import { data } from "../resources/mortgage-calculator/components/piechart"

const Testimonial = (props: { data: { Label; Name; QuoteText; Image }[] }) => {
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

        <section className="h-full">
          <div className="w-full container">
            <div className="flex gap-2 mb-8">
              <div className="w-full md:w-1/4">
                <IMG
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
                        <IMG
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
            <IMG
              src={`/images/10.png`}
              height={1600}
              width={800}
              alt=""
              className="w-3/4 pt-16  mx-auto rounded-xl"
            />
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
    <div className="p-8 text-center">
      <span className="mb-2 text-xs font-bold tracking-widest text-primary uppercase"></span>
      <h1 className="text-4xl font-bold mb-4 leading-none tracking-tighter text-neutral-600">
        What Our Clients Are Saying About Us
      </h1>
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
          dynamicBullets: true,
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
    </div>
  ) : (
    <></>
  )
}

export default Testimonial

export const SingleTestimonial = ({ Label, Name, QuoteText, Image }) => {
  let image =
    Image && Image !== ""
      ? Image
      : "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQEBLAEsAAD/4QBWRXhpZgAATU0AKgAAAAgABAEaAAUAAAABAAAAPgEbAAUAAAABAAAARgEoAAMAAAABAAIAAAITAAMAAAABAAEAAAAAAAAAAAEsAAAAAQAAASwAAAAB/+0ALFBob3Rvc2hvcCAzLjAAOEJJTQQEAAAAAAAPHAFaAAMbJUccAQAAAgAEAP/hDIFodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvADw/eHBhY2tldCBiZWdpbj0n77u/JyBpZD0nVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkJz8+Cjx4OnhtcG1ldGEgeG1sbnM6eD0nYWRvYmU6bnM6bWV0YS8nIHg6eG1wdGs9J0ltYWdlOjpFeGlmVG9vbCAxMS44OCc+CjxyZGY6UkRGIHhtbG5zOnJkZj0naHR0cDovL3d3dy53My5vcmcvMTk5OS8wMi8yMi1yZGYtc3ludGF4LW5zIyc+CgogPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9JycKICB4bWxuczp0aWZmPSdodHRwOi8vbnMuYWRvYmUuY29tL3RpZmYvMS4wLyc+CiAgPHRpZmY6UmVzb2x1dGlvblVuaXQ+MjwvdGlmZjpSZXNvbHV0aW9uVW5pdD4KICA8dGlmZjpYUmVzb2x1dGlvbj4zMDAvMTwvdGlmZjpYUmVzb2x1dGlvbj4KICA8dGlmZjpZUmVzb2x1dGlvbj4zMDAvMTwvdGlmZjpZUmVzb2x1dGlvbj4KIDwvcmRmOkRlc2NyaXB0aW9uPgoKIDxyZGY6RGVzY3JpcHRpb24gcmRmOmFib3V0PScnCiAgeG1sbnM6eG1wTU09J2h0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8nPgogIDx4bXBNTTpEb2N1bWVudElEPmFkb2JlOmRvY2lkOnN0b2NrOjE5MmYzMWYyLTI5MmUtNDJhNi1iMzlmLWZjYzIwMjc3YjMxMDwveG1wTU06RG9jdW1lbnRJRD4KICA8eG1wTU06SW5zdGFuY2VJRD54bXAuaWlkOjNlOWUxNjIyLTliMzMtNGE2OC1iOTU2LTBjMDU0ZGJjNzQwNDwveG1wTU06SW5zdGFuY2VJRD4KIDwvcmRmOkRlc2NyaXB0aW9uPgo8L3JkZjpSREY+CjwveDp4bXBtZXRhPgogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAo8P3hwYWNrZXQgZW5kPSd3Jz8+/9sAQwAFAwQEBAMFBAQEBQUFBgcMCAcHBwcPCwsJDBEPEhIRDxERExYcFxMUGhURERghGBodHR8fHxMXIiQiHiQcHh8e/9sAQwEFBQUHBgcOCAgOHhQRFB4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4e/8AAEQgBaAFoAwERAAIRAQMRAf/EABwAAQACAwEBAQAAAAAAAAAAAAAHCAEFBgQDAv/EAEAQAAIBAwIBCAYIBQQCAwAAAAABAgMEBQYRIQcSEzFBUWFxCCIygZGhFEJSYnKCscEVQ1OS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"

  return (
    <div className="relative flex justify-center min-h-64 border-2 shadow-md bg-gray-300 border-gray-100 rounded-xl">
      <div className="relative w-full p-4 rounded-xl ">
        <div className="w-full">
          <div>
            {/* <div className="mb-7">
              <img src={reviewImg} alt={reviewAlt} />
            </div> */}

            <blockquote className="border-l-8 p-8  !border-blue-300 rounded-md bg-blue-100">
              <p className=" md:text-4xl italic font-light text-gray-900 ">
                {QuoteText}
              </p>
            </blockquote>
          </div>
          <div className="mx-auto mt-8 text-center flex justify-center items-center gap-2">
            <IMG
              src={image}
              width={128}
              height={128}
              className="rounded-full h-48 w-48 bg-gray-200"
              alt=""
            />
            <div className="">
              <h4 className="text-dark font-semibold text-2xl ">{Name}</h4>
              <p className="text-body-color font-light text-xl">{Label}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
