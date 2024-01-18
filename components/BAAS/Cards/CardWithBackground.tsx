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
    <div className=" mx-auto mb-4 h-full  w-full items-center  rounded-[20px] bg-white shadow-md hover:shadow-lg ">
      <Image
        src={props.image ? props.image : "/error.png"}
        height={1000}
        width={500}
        alt={props.title + "Image"}
        className="h-96 w-full rounded-t-lg border ring-2 ring-primary"
      />
      <div className="h-32 w-full rounded-b-xl bg-gray-200 p-2">
        <h4 className="font-accent mb-2 text-xl text-primary underline">
          {props.title}
        </h4>

        <p className="text-body-color text-sm">{props.desc}</p>
      </div>
    </div>
  )
}
