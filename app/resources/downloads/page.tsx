"use client"

import Link from "next/link"
import { Card, CardFooter, CardHeader, Input } from "@material-tailwind/react"
import { Label } from "@radix-ui/react-menubar"
import { ArrowBigRight, Download, View } from "lucide-react"

import { Button } from "@/components/ui/button"
import { CardContent, CardDescription, CardTitle } from "@/components/ui/card"
import LongCardDetail from "@/components/BAAS/Cards/LongCardDetail"
import BACKEND from "@/app/API"

const api = new BACKEND()

const GetData = async (route: string) => {
  let val = await api.GET({
    Route: route,
  })

  return val
}

interface Resource {
  Title: string
  Description: string
  Link: string
}
export default async function Downloads() {
  let res = await GetData(`resources`).then((val) => val)

  console.log(res.data)
  return (
    <>
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
            {res && res.data && res.data.length > 0 ? (
              res.data.map((item: Resource, i) => (
                <ResourceCard
                  title={item.Title}
                  type="PDF"
                  description={item.Description}
                />
              ))
            ) : (
              <LongCardDetail
                Title="Resources Not Availble!"
                Description="Sorry, we are unable to retrieve resources at this time."
              />
            )}
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
        <CardTitle className="pb-2">{props.title}</CardTitle>
      </CardHeader>
      <CardContent className="p-4">
        <CardDescription>{props.description}</CardDescription>
      </CardContent>
      <CardFooter className="flex p-2 justify-between">
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
