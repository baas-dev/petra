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
    <div className="container flex relative min-h-screen h-full w-full dark:bg-gray-900">
      <div className="w-full mb-8  text-center">
        <span className="mb-2 text-xs font-bold tracking-widest text-primary uppercase">
          Team Merits
        </span>
        <h1 className="text-4xl font-bold mb-4 leading-none tracking-tighter text-neutral-600">
          Our Achievements
        </h1>
        <div className="w-full flex gap-4 mt-8 ">
          {imgdata.map((item, i) => {
            return (
              <Image
                src={`/images/${item.path}`}
                alt=""
                width={500}
                height={500}
                className="h-48  w-full object-contain"
              />
            )
          })}
        </div>
        <div className="w-full flex flex-col items-center justify-center mt-8">
          <div className="flex flex-wrap justify-center gap-1">
            {data.slice(0, Math.ceil(data.length / 2)).map((item, i) => {
              return (
                <Image
                  key={i}
                  src={`/images/fs${item}.png`}
                  alt=""
                  width={500}
                  height={500}
                  className="h-24 flex-1 mx-auto  w-full object-contain"
                />
              )
            })}
          </div>
          <div className="flex flex-wrap justify-center gap-1">
            {data.slice(Math.ceil(data.length / 2)).map((item, i) => {
              return (
                <Image
                  key={i}
                  src={`/images/fs${item}.png`}
                  alt=""
                  width={500}
                  height={500}
                  className="h-24 border flex-1 mx-auto  w-full object-contain"
                />
              )
            })}
          </div>
        </div>
        <div className="mt-8 flex">
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
  )
}

// const SingleTestimonial = ({ Label, Name, QuoteText }) => {
//   return (
//     <div className="relative flex justify-center min-h-64 border  rounded-md shadow-md  ">
//       <div className="relative w-full p-4 bg-secondary  ">
//         <div className="w-full">
//           <div>
//             {/* <div className="mb-7">
//                 <img src={reviewImg} alt={reviewAlt} />
//               </div> */}

//             <blockquote className="p-4 my-4 border-l-4 border-gray-300 bg-gray-50 dark:border-gray-500 dark:bg-gray-800">
//               <p className="text-xl italic font-medium leading-relaxed text-gray-900 dark:text-white">
//                 {QuoteText}
//               </p>
//             </blockquote>
//             <div className="">
//               <h4 className="text-dark text-lg font-semibold ">{Name}</h4>
//               <p className="text-body-color text-base">{Label}</p>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   )
// }
{
  /* <div className="lg:flex space-y-4">
          <div className="relative mt-8  space-y-8 md:w-full lg:ml-0 sm:mx-auto text-center lg:text-left lg:mr-auto lg:w-7/12 max-w-6xl">
            <div className="w-full grid grid-cols-1 md:grid-cols-3 justify-between gap-2 mb-4">
              <StatCard
                title={"D Magazine"}
                description={"7x Recognized"}
                image={`/images/.png`}
              />
              <StatCard
                title={"Texas Five Star"}
                description={"2013-2023"}
                image={`/images/fs.png`}
              />
              <StatCard
                title={"Texas Five Star LEGENDS"}
                description={"2022"}
                image={`/images/fsl.png`}
              />
            </div> */
}
{
  /* <div className="w-full grid grid-cols-1 md:grid-cols-3 justify-between gap-2 mb-4">
              <Image
                src={"/images/ntxamp.png"}
                alt=""
                width={500}
                height={500}
                className="h-24 w-full object-contain"
              />
              <Image
                src={"/images/NAMB-Logo.jpg"}
                alt=""
                width={500}
                height={500}
                className="h-24 w-full object-contain"
              />
              <Image
                src={"/images/f.png"}
                alt=""
                width={500}
                height={500}
                className="h-24 w-full object-contain"
              />
            </div>
          </div> */
}
