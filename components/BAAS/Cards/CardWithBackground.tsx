import {
  Avatar,
  Card,
  CardBody,
  CardHeader,
  Typography,
} from "@material-tailwind/react"

import { CardTitle } from "@/components/ui/card"
import { CoreValue } from "@/app/about/CoreValuesSection"

export default function CardWithBackground(props: CoreValue) {
  return (
    <div className="flex rounded-[20px] mx-auto items-center  mb-4 w-full md:w-1/2 h-full bg-white shadow-md hover:shadow-lg ">
      <div
        className={` flex h-40 w-1/3 items-center justify-center rounded-l-xl bg-primary`}
        style={{ backgroundImage: `url(${props?.image})` }}
      ></div>
      <div className="w-2/3 p-2">
        <h4 className="mb-2 underline text-primary text-xl font-accent">
          {props.title}
        </h4>

        <p className="text-body-color text-sm">{props.desc}</p>
      </div>
    </div>
  )
}
