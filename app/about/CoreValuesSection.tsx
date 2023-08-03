import { Fade } from "react-awesome-reveal"

import CardWithBackground from "@/components/BAAS/Cards/CardWithBackground"

export interface CoreValue {
  title: string
  desc: string
  image?: string
}

let coreValueData: CoreValue[] = [
  {
    title: "Called",
    desc: "Passion + Purpose + Expertise = Results. It is our mission to use our knowledge to serve and help others with their lending needs.",
    image: "/images/svg/called.svg",
  },
  {
    title: "Centered",
    desc: "Centered on the best rates and the best service. Centered on you. We strive to be balanced, fair, and responsible with home financing and financial plans for our customers. ",
    image: "/images/svg/centered.svg",
  },
  {
    title: "Committed",
    desc: "Wholehearted dedication to our clients, our employees, and our partners. After all, that’s our family.",
    image: "/images/svg/committed.svg",
  },
  {
    title: "Consultative",
    desc: "Every client deserves the information, insight, and knowledge to make the best financing decision possible.",
    image: "/images/svg/consultative.svg",
  },
  {
    title: "Collaborative",
    desc: "It takes a team. Partnerships matter. Working together in unison as a team is the key to success. We’re better together. ",
    image: "/images/svg/collaborative.svg",
  },
]

export default function CoreValuesSection() {
  return (
    <>
      <section className="min-h-screen flex justify-center items-center px-4">
        <div className="">
          <div className="w-full h-24 relative text-center">
            <span className="mb-2 text-xs font-bold tracking-widest text-primary uppercase">
              Our Core Values
            </span>
            <h1 className="text-4xl font-bold leading-none tracking-tighter text-neutral-600">
              Defining Our Service
            </h1>
          </div>
          <div className="flex flex-col  md:flex-row gap-2">
            {coreValueData.map((item, i) => {
              return <CardWithBackground {...item} />
            })}
          </div>
        </div>
      </section>
    </>
  )
}
