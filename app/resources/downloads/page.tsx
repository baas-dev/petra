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
        <div className="container pt-24  my-8 grid grid-cols-1 gap-2 md:grid-cols-3">
          <ResourceCard
            title="Example PDF"
            type="PDF"
            description="Just an example upload to show how the system works."
          />
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
    <Card className="w-full bg-secondary">
      <CardHeader className="shadow-none py-2 mt-4 px-4 bg-secondary">
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
