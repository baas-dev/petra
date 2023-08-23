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
    <div className="w-full px-4 md:w-1/2 lg:w-1/3 ">
      <div className="mb-8 rounded-[20px] h-full bg-white p-10 shadow-md hover:shadow-lg md:px-7 xl:px-10">
        <div
          className={`mb-8 flex h-[70px] w-[70px] p-3 items-center justify-center rounded-2xl bg-primary`}
          style={{ backgroundImage: `url(${props?.image})` }}
        ></div>
        <h4 className="mb-3 text-xl font-semibold text-dark">{props.title}</h4>
        <p className="text-body-color">{props.desc}</p>
      </div>
    </div>
  )
}
