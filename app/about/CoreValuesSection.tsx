import { Fade } from "react-awesome-reveal"

import { RevealAnimation } from "@/components/Animations/InViewAnimationWrapper"
import CardWithBackground from "@/components/BAAS/Cards/CardWithBackground"
import HoverCard from "@/components/BAAS/Cards/HoverCard"

export interface CoreValue {
  title: string
  desc: string
  image: string
}

let coreValueData: CoreValue[] = [
  {
    title: "1. Called",
    desc: "Passion + Purpose + Expertise = Results. It is our mission to use our knowledge to serve and help others with their lending needs.",
    image: "/site/about/called.png",
  },
  {
    title: "2. Centered",
    desc: "Centered on the best rates and the best service. Centered on you. We strive to be balanced, fair, and responsible with home financing and financial plans for our customers. ",
    image: "/site/about/centered.png",
  },
  {
    title: "3. Committed",
    desc: "Wholehearted dedication to our clients, our employees, and our partners. After all, that’s our family.",
    image: "/site/about/committed.png",
  },
  {
    title: "4. Consultative",
    desc: "Every client deserves the information, insight, and knowledge to make the best financing decision possible.",
    image: "/site/about/consultative.png",
  },
  {
    title: "5. Collaborative",
    desc: "It takes a team. Partnerships matter. Working together in unison as a team is the key to success. We’re better together. ",
    image: "/site/about/collaborative.png",
  },
]

export default function CoreValuesSection() {
  return (
    <>
      <div className="min-h-screen w-full justify-center items-center h-full  hidden lg:flex">
        <div
          id="big-circle"
          className="circle big bg-blue-50 mx-auto text-center"
        >
          <div className=" circle one content-center justify-center h-full w-full">
            <div className="my-auto h-full flex justify-center items-center rounded-full bg-blue-200">
              One
            </div>
          </div>
          <div className=" circle two content-center justify-center h-full w-full">
            <div className="my-auto h-full flex justify-center items-center rounded-full bg-blue-200">
              Two
            </div>
          </div>
          <div className=" circle three content-center justify-center h-full w-full">
            <div className="my-auto h-full flex justify-center items-center rounded-full bg-blue-200">
              Three
            </div>
          </div>
          <div className=" circle four content-center justify-center h-full w-full">
            <div className="my-auto h-full flex justify-center items-center rounded-full bg-blue-200">
              four
            </div>
          </div>
          <div className=" circle five content-center justify-center h-full w-full">
            <div className="my-auto h-full flex justify-center items-center rounded-full bg-blue-200">
              five
            </div>
          </div>
          <div className=" circle six content-center justify-center h-full w-full">
            <div className="my-auto h-full flex justify-center items-center rounded-full bg-blue-200">
              Six
            </div>
          </div>
        </div>
      </div>
      <div className="min-h-screen w-full justify-center items-center h-full  flex lg:hidden">
        <div
          id="big-circle"
          className="circlemobile bigmobile bg-blue-50 mx-auto text-center"
        >
          <div className=" circlemobile onem content-center justify-center h-full w-full">
            <div className="my-auto h-full flex justify-center items-center rounded-full bg-blue-200">
              One
            </div>
          </div>
          <div className=" circlemobile twom content-center justify-center h-full w-full">
            <div className="my-auto h-full flex justify-center items-center rounded-full bg-blue-200">
              Two
            </div>
          </div>
          <div className=" circlemobile threem content-center justify-center h-full w-full">
            <div className="my-auto h-full flex justify-center items-center rounded-full bg-blue-200">
              Three
            </div>
          </div>
          <div className=" circlemobile fourm content-center justify-center h-full w-full">
            <div className="my-auto h-full flex justify-center items-center rounded-full bg-blue-200">
              four
            </div>
          </div>
          <div className=" circlemobile fivem content-center justify-center h-full w-full">
            <div className="my-auto h-full flex justify-center items-center rounded-full bg-blue-200">
              five
            </div>
          </div>
          <div className=" circlemobile sixm content-center justify-center h-full w-full">
            <div className="my-auto h-full flex justify-center items-center rounded-full bg-blue-200">
              Six
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
