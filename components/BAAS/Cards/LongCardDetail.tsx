"use client"

import { Button, Card, CardBody, CardHeader } from "@material-tailwind/react"
import { ArrowRightIcon } from "lucide-react"

export default function LongCardDetail(props: { title: string }) {
  let { title } = props
  return (
    <Card className="flex-row w-full mb-4 max-h-48 ">
      <CardHeader
        shadow={false}
        floated={false}
        className="w-2/5 shrink-0 m-0 rounded-r-none"
      >
        <img
          src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1471&q=80"
          alt="image"
          className="w-full h-full  object-cover"
        />
      </CardHeader>
      <CardBody>
        <h3 color="blue" className="uppercase text-2xl font-bold mb-4">
          startups
        </h3>

        <p color="gray" className="font-normal ">
          Like so many organizations these days, Autodesk is a company in
          transition. It was until recently a traditional boxed software company
          selling licenses. Yet its own business model disruption is only part
          of the story
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
