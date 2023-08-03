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
    <Card
      shadow={false}
      className="relative grid h-64 md:h-[600px]  transition-all hover:scale-110 w-full  items-end justify-center overflow-hidden text-center"
    >
      <CardHeader
        floated={false}
        shadow={false}
        color="transparent"
        className="absolute inset-0 m-0 h-full w-full rounded-xl 
        
      bg-no-repeat
        bg-center"
        style={{ backgroundImage: `url(${props?.image})` }}
      >
        <div className=" absolute inset-0 h-full w-full rounded-xl bg-gradient-to-t from-black/80 via-black/80 border-2" />
        {/* <CardTitle className="pt-4 text-2xl text-white font-semibold">
          {props.title}
        </CardTitle> */}
      </CardHeader>
      <CardBody className="relative py-14 px-6 md:px-12">
        <h2
          // variant="h2"
          color="white"
          className="text-lg  text-gray-200 mb-6  leading-[1.5]"
        >
          {props.desc}
        </h2>
        <Typography variant="h5" className="mb-4  text-white">
          {props.title}
        </Typography>
      </CardBody>
    </Card>
  )
}
