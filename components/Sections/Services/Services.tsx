import Image from "next/image"

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

export default function Services() {
  return (
    <div className="w-full relative  h-full ">
      <section className=" z-20   flex  pb-2   text-secondary">
        <HoverCard
          src={"/site/home/purchase.png"}
          title={"Purchase a Home"}
          desc=" Need cash for a home improvement or something else?"
        />
        <HoverCard
          src={"/site/home/refinance.png"}
          title={"Refinance Your Home"}
          desc={"Need cash for a home improvement or something else?"}
        />
      </section>
    </div>
  )
}

function HoverCard({ src, title, desc }: { src: string; title; desc }) {
  return (
    <div className="w-full  h-full transform transition duration-500  hover:scale-110">
      <Image
        src={src}
        height={1500}
        width={500}
        alt={""}
        className="  object-fill  rounded-t-lg h-96 w-full max-w-sm mx-auto"
      />
      <div className="w-full max-w-sm p-4 mx-auto bg-secondary rounded-b-lg">
        <CardTitle className="text-2xl text-black">{title}</CardTitle>
        <CardDescription>{desc}</CardDescription>
      </div>
    </div>
  )
}
