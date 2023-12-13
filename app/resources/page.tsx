import { ReactNode } from "react"
import Image from "next/image"
import Link from "next/link"
import { CheckCircle } from "lucide-react"

import { RevealAnimation } from "@/components/Animations/InViewAnimationWrapper"
import TitleWithIconCard from "@/components/Cards/TitleWithIconCard"
import CardList from "@/components/Sections/General/CardList"
import IntroSection from "@/components/Sections/General/IntroSection"

import BACKEND from "../API"

const api = new BACKEND()

const GetData = async (route: string) => {
  let val = await api.GET({
    Route: route,
  })

  return val
}

interface Resource {
  Title?: string
  Description?: string
  Link?: string
  IconLink?: string
  Order?: number
}
interface Formatted {
  Title?: string
  Link?: string
  Icon?: ReactNode
  Delay?: number
}

export default async function Resoures() {
  let res = await GetData(`resources`)
    .then(({ data, code, error }: { data: Resource[]; code; error }) => {
      let finalData: Formatted[] = []
      if (data.length > 0) {
        data.sort((a, b) => {
          if (a.Order && b.Order) {
            return a.Order - b.Order
          }
          return 0
        })
        console.log(data)
        data.forEach((item, i) => {
          finalData.push({
            Title: item.Title,
            Icon: (
              <>
                <div className=" w-32 h-32 object-contain">
                  <Image
                    src={item.IconLink ? item.IconLink.toString() : "/404.png"}
                    alt={`${item.Title} Image`}
                    width={1000}
                    height={1000}
                    className="h-full relative w-full"
                  />
                </div>
              </>
            ),
            Delay: i * 0.2,
            Link: item.Link,
          })
        })
      }
      return finalData
    })
    .catch((err) => [])
  return (
    <>
      <IntroSection ImageURL="/site/resource/bg.png" Title="Resources" />

      <h2 className="text-2xl text-center max-w-xl mx-auto">
        Buying a home shouldn’t be hard. Our team is here to support you every
        step of the way. <br className="mb-4" /> We have gathered a few
        resources to get you started.
      </h2>
      <div className="grid grid-cols-2 mt-8 md:grid-cols-3 gap-2 px-4 container">
        <CardList items={res} />
      </div>
    </>
  )
}
