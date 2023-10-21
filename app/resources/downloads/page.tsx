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
import Banner from "@/components/BAAS/Banners/BannerSite"
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
      <div className="min-h-screen pt-4 w-full md:pt-28 ">
        <Banner
          Title={"Downloads & Links"}
          Subtitle={
            " Resources that the Petra Home Lending Team has pooled together in order to provide the most helpful and accurate home buying information"
          }
        >
          <></>
        </Banner>

        <div className="w-full flex flex-wrap  container">
          {res && res.length > 0 ? (
            <>
              {res.map((item: Resource, i) => (
                <div className="w-full md:w-1/2 px-2 mb-2">
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
      <CardFooter className="flex p-2 text-right w-full items-end">
        {/* <Button variant="secondary">{props.type}</Button> */}

        <Link href={props.link} target="_blank" className="w-full">
          <Button>
            <Label className="mr-2">Open Resource</Label>
            <ArrowBigRight />
          </Button>
        </Link>
      </CardFooter>
    </Card>
  )
}
