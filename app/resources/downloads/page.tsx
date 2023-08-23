"use client"

import Link from "next/link"
import { Card, CardFooter, CardHeader, Input } from "@material-tailwind/react"
import { Label } from "@radix-ui/react-menubar"
import { ArrowBigRight, Download, View } from "lucide-react"

import { Button } from "@/components/ui/button"
import { CardContent, CardDescription, CardTitle } from "@/components/ui/card"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

export default function Downloads() {
  return (
    <>
      {/* <div className="container">
        <h2 className="text-4xl font-semibold mb-2 text-center">
          Resource Links
        </h2>
      </div> */}
      <div className="min-h-screen">
        <div className="container  pt-24   ">
          <div className="  w-full mb-8">
            <h1 className="text-md block  font-semibold text-primary">
              Downloadabe Resources and Links for Homebuyers
            </h1>
            <h2 className="text-dark mx-auto text-left  text-2xl  font-medium uppercase ">
              Downloads & Links
            </h2>
            <p className="max-w-md   font-light">
              Resources that the Petra Home Lending Team has pooled together in
              order to provide the most helpful and accurate home buying
              information
            </p>
          </div>
          <div className="grid grid-cols-1 gap-2 md:grid-cols-3">
            <ResourceCard
              title="Example PDF"
              type="PDF"
              description="Just an example upload to show how the system works."
            />
          </div>
        </div>
      </div>
    </>
  )
}

const ResourceCard = (props: {
  title: string
  type: string
  description?: string
}) => {
  return (
    <Card className="w-full bg-white">
      <CardHeader className="shadow-none py-2 mt-4 px-4 ">
        <CardTitle>{props.title}</CardTitle>
        <CardDescription>D{props.description}</CardDescription>
      </CardHeader>
      <CardContent></CardContent>
      <CardFooter className="flex justify-between">
        <Button variant="secondary">{props.type}</Button>
        <Link
          href="https://www.africau.edu/images/default/sample.pdf"
          target="_blank"
        >
          <Button>
            <Label className="mr-2">Open</Label>
            <ArrowBigRight />
          </Button>
        </Link>
      </CardFooter>
    </Card>
  )
}
