import { useRef } from "react"
import Image from "next/image"

import "swiper/css"
import "swiper/css/pagination"
import { Autoplay, EffectCards, Navigation, Pagination } from "swiper"
import { Swiper, SwiperSlide } from "swiper/react"

export default function Achievements(props: {
  data: { Label; Name; QuoteText }[]
}) {
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

  return (
    <div className="bg-secondary py-40 relative min-h-screen h-full w-full dark:bg-gray-900">
      <div className="relative xl:container m-auto px-6 md:px-12 lg:px-6">
        <h1 className="text-4xl block font-bold relative text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-500 dark:from-blue-400 dark:to-cyan-300">
          10x Texas Legend
          <br className="lg:block hidden" />{" "}
          <span className="sm:mx-auto font-light sm:w-10/12 md:w-2/3 text-4xl text-blue-900 text-center  lg:w-auto lg:text-left  dark:text-white">
            As Recognized by Texas Monthly
          </span>
        </h1>
        <div className="lg:flex">
          <div className="relative mt-8  space-y-8 sm:w-10/12 md:w-2/3 lg:ml-0 sm:mx-auto text-center lg:text-left lg:mr-auto lg:w-7/12">
            {/* <div className="dark:text-gray-300">🔥🌟</div> */}
            <Swiper
              slidesPerView={1}
              ref={sliderRef}
              loop
              effect="cards"
              autoplay={{
                delay: 3000,
                disableOnInteraction: false,
              }}
              modules={[Autoplay, EffectCards]}
              className=" mb-4 mySwiper"
            >
              {props.data &&
                props.data.map((item, i) => (
                  <SwiperSlide>
                    <SingleTestimonial {...item} />
                  </SwiperSlide>
                ))}
            </Swiper>
            <div className=" flex lg:w-full gap-1">
              {imgdata.map((item, i) => {
                return (
                  <div key={i} className="w-full h-full mx-auto">
                    <Image
                      src={`/images/${item.path}`}
                      height={300}
                      width={300}
                      alt=""
                      className="mx-auto h-48 object-contain w-full"
                    />
                  </div>
                )
              })}
            </div>
          </div>
          <div className=" mt-12 md:mt-0 lg:absolute -right-10 lg:w-7/12">
            <div className="relative w-full">
              <div
                aria-hidden="true"
                className="absolute scale-75 md:scale-110 inset-0 m-auto w-full h-full md:w-96 md:h-96 rounded-full rotate-45 bg-gradient-to-r from-sky-500 to-cyan-300 opacity-10 blur-3xl"
              ></div>
              <Image
                src={`/images/bbb.png`}
                height={1920}
                width={1080}
                alt=""
                className="max-h-[500px] object-contain z-20"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

const SingleTestimonial = ({ Label, Name, QuoteText }) => {
  return (
    <div className="relative flex justify-center min-h-64 border  rounded-md shadow-md  ">
      <div className="relative w-full p-4 bg-secondary  ">
        <div className="w-full">
          <div>
            {/* <div className="mb-7">
                <img src={reviewImg} alt={reviewAlt} />
              </div> */}

            <blockquote className="p-4 my-4 border-l-4 border-gray-300 bg-gray-50 dark:border-gray-500 dark:bg-gray-800">
              <p className="text-xl italic font-medium leading-relaxed text-gray-900 dark:text-white">
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
