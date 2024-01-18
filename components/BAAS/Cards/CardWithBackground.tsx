import Image from "next/image"
import {
  Avatar,
  Card,
  CardBody,
  CardHeader,
  Typography,
} from "@material-tailwind/react"

import { CardTitle } from "@/components/ui/card"
import { CoreValue } from "@/app/about/core-values/page"

export default function CardWithBackground(props: CoreValue) {
  return (
    <div className=" rounded-[20px] mx-auto items-center  mb-4 w-full  h-full bg-white shadow-md hover:shadow-lg ">
      <Image
        src={props.image}
        height={1000}
        width={500}
        alt={props.title + "Image"}
        className="h-96 w-full rounded-t-lg border ring-2 ring-primary"
      />
      <div className="w-full p-2 bg-gray-200 rounded-b-xl h-32">
        <h4 className="mb-2 underline text-primary text-xl font-accent">
          {props.title}
        </h4>

        <p className="text-body-color text-sm">{props.desc}</p>
      </div>
    </div>
  )
}
