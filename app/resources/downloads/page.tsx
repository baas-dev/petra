import Link from "next/link"
import { ArrowBigRight, Download, View } from "lucide-react"

import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Label } from "@/components/ui/label"
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
  let res = await GetData(`resources`)
    .then((val) => {
      console.log(val.data)
      return val.data
    })
    .catch((err) => [])

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
          <div className="w-full flex flex-wrap">
            {res && res.length > 0 ? (
              <>
                {res.map((item: Resource, i) => (
                  <div className="w-full md:w-1/2">
                    <ResourceCard
                      key={i}
                      title={item.Title}
                      description={item.Description}
                      link={item.Link}
                    />
                  </div>
                ))}
              </>
            ) : (
              //
              // ))

              <>
                <h2 className="text-lg">
                  Sorry! No resources are available at this time.
                </h2>
              </>
            )}
          </div>
        </div>
      </div>
    </>
  )
}

const ResourceCard = (props: {
  title: string
  description?: string
  link: string
}) => {
  return (
    <Card className="w-full bg-white">
      <CardHeader className="shadow-none py-2 mt-4 px-4 ">
        <CardTitle className="pb-2">{props.title}</CardTitle>
      </CardHeader>
      <CardContent className="p-4">
        <CardDescription>{props.description}</CardDescription>
      </CardContent>
      <CardFooter className="flex p-2 text-right justify-between">
        {/* <Button variant="secondary">{props.type}</Button> */}
        <Link href={props.link} target="_blank">
          <Button>
            <Label className="mr-2">Open Resource</Label>
            <ArrowBigRight />
          </Button>
        </Link>
      </CardFooter>
    </Card>
  )
}
