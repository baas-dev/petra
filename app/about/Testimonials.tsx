import React, { useCallback, useRef } from "react"
import Image from "next/image"

import "swiper/css"
import { Swiper, SwiperSlide } from "swiper/react"

import { Separator } from "@/components/ui/separator"

const Testimonial = () => {
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
  const sliderRef = useRef<any>()

  const handlePrev = useCallback(() => {
    if (!sliderRef.current) return
    sliderRef.current.swiper.slidePrev()
  }, [])

  const handleNext = useCallback(() => {
    if (!sliderRef.current) return
    sliderRef.current.swiper.slideNext()
  }, [])

  return (
    <>
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
              <Swiper slidesPerView={1} ref={sliderRef} className=" mb-4">
                <div className="absolute z-50 pt-8 flex items-center justify-center">
                  <div
                    className="prev-arrow cursor-pointer"
                    onClick={handlePrev}
                  >
                    <button className="text-primary hover:bg-primary shadow-input mx-1 flex h-12 w-12 items-center justify-center rounded-full bg-white transition-all hover:text-white">
                      <svg
                        width="15"
                        height="13"
                        viewBox="0 0 15 13"
                        className="fill-current"
                      >
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M5.24264 11.8033L0.46967 7.03037C0.176777 6.73748 0.176777 6.2626 0.46967 5.96971L5.24264 1.19674C5.53553 0.903845 6.01041 0.903845 6.3033 1.19674C6.59619 1.48963 6.59619 1.96451 6.3033 2.2574L2.81066 5.75004H14C14.4142 5.75004 14.75 6.08583 14.75 6.50004C14.75 6.91425 14.4142 7.25004 14 7.25004H2.81066L6.3033 10.7427C6.59619 11.0356 6.59619 11.5104 6.3033 11.8033C6.01041 12.0962 5.53553 12.0962 5.24264 11.8033Z"
                        ></path>
                      </svg>
                    </button>
                  </div>

                  <div
                    className="next-arrow cursor-pointer"
                    onClick={handleNext}
                  >
                    <button className="text-primary hover:bg-primary shadow-input mx-1 flex h-12 w-12 items-center justify-center rounded-full bg-white transition-all hover:text-white">
                      <svg
                        width="15"
                        height="13"
                        viewBox="0 0 15 13"
                        className="fill-current"
                      >
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M9.75736 11.8033L14.5303 7.03037C14.8232 6.73748 14.8232 6.2626 14.5303 5.96971L9.75736 1.19674C9.46447 0.903845 8.98959 0.903845 8.6967 1.19674C8.40381 1.48963 8.40381 1.96451 8.6967 2.2574L12.1893 5.75004H1C0.585786 5.75004 0.25 6.08583 0.25 6.50004C0.25 6.91425 0.585786 7.25004 1 7.25004H12.1893L8.6967 10.7427C8.40381 11.0356 8.40381 11.5104 8.6967 11.8033C8.98959 12.0962 9.46447 12.0962 9.75736 11.8033Z"
                        ></path>
                      </svg>
                    </button>
                  </div>
                </div>
                <SwiperSlide>
                  <SingleTestimonial
                    image="https://cdn.tailgrids.com/2.0/image/marketing/images/testimonials/testimonial-01/image-01.jpg"
                    reviewImg="https://cdn.tailgrids.com/2.0/image/marketing/images/testimonials/testimonial-01/lineicon.svg"
                    reviewAlt="lineicon"
                    details="Velit est sit voluptas eum sapiente omnis! Porro, impedit minus quam reprehenderit tempore sint quaerat id! Mollitia perspiciatis est asperiores commodi labore!"
                    name="Larry Diamond"
                    position="Chief Executive Officer."
                  />
                </SwiperSlide>
                <SwiperSlide>
                  <SingleTestimonial
                    image="https://cdn.tailgrids.com/2.0/image/marketing/images/testimonials/testimonial-01/image-01.jpg"
                    reviewImg="https://cdn.tailgrids.com/2.0/image/marketing/images/testimonials/testimonial-01/lineicon.svg"
                    reviewAlt="lineicon"
                    details="Velit est sit voluptas eum sapiente omnis! Porro, impedit minus quam reprehenderit tempore sint quaerat id! Mollitia perspiciatis est asperiores commodi labore!"
                    name="Larry Diamond"
                    position="Chief Executive Officer."
                  />
                </SwiperSlide>
              </Swiper>
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
    </>
  )
}

export default Testimonial

const SingleTestimonial = ({
  image,
  reviewImg,
  reviewAlt,
  details,
  name,
  position,
}) => {
  return (
    <div className="relative flex justify-center">
      <div className="relative w-full p-4 bg-white rounded-xl shadow-lg">
        <div className="w-full items-center md:flex ">
          <span className="absolute -bottom-6 -right-6 z-[-1]">
            <svg
              width="64"
              height="64"
              viewBox="0 0 64 64"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M3 32C3 15.9837 15.9837 3 32 3C48.0163 2.99999 61 15.9837 61 32C61 48.0163 48.0163 61 32 61C15.9837 61 3 48.0163 3 32Z"
                stroke="#13C296"
                strokeWidth="6"
              />
            </svg>
          </span>
        </div>
        <div className="w-full">
          <div>
            {/* <div className="mb-7">
              <img src={reviewImg} alt={reviewAlt} />
            </div> */}
            <p className="text-body-color mb-11 text-base font-medium italic sm:text-lg">
              {details}
            </p>
            <h4 className="text-dark text-xl font-semibold">{name}</h4>
            <p className="text-body-color text-base">{position}</p>
          </div>
        </div>
      </div>
    </div>
  )
}
