"use client"

import Image from "next/image"
import { Button, Card, CardBody, CardHeader } from "@material-tailwind/react"
import { ArrowRightIcon } from "lucide-react"

export default function LongCardDetail(props: {
  Title: string
  Description: string
}) {
  let { Title, Description } = props
  return (
    <Card className="flex-row w-full mb-4 h-48 border mx-auto">
      <CardHeader
        shadow={false}
        floated={false}
        className="w-2/5 shrink-0 m-0 rounded-r-none bg-primary/20"
      >
        <Image
          src={"/images/petra-white.svg"}
          height={150}
          width={300}
          className="mx-auto py-4"
          alt="Petra Logo"
        />
      </CardHeader>
      <CardBody className="overflow-hidden w-3/5 ">
        <h3 color="blue" className="uppercase text-2xl font-bold mb-4">
          {Title}
        </h3>

        <p color="gray" className="font-normal">
          {Description}
        </p>
        {/* <a href="#" className="">
          <Button variant="text" className="flex items-center gap-2">
            Learn More
            <ArrowRightIcon strokeWidth={2} className="w-4 h-4" />
          </Button>
        </a> */}
      </CardBody>
    </Card>
  )
}
