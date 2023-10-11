"use client"

import { useState } from "react"
import Image from "next/image"
import moment from "moment"

import { Card } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import { Skeleton } from "@/components/ui/skeleton"
import { Articles } from "@/app/admin/articles/columns"

export default function LongCardDetail(props: {
  Key: number
  Title: string
  Description: string
  MainImage: string
  Category?: {
    Title?: string
  }
  CreatedAt: Date
  UpdatedAt: Date
}) {
  let { Title, Description, Key, MainImage, CreatedAt, UpdatedAt, Category } =
    props
  const time: Date = CreatedAt
  const [loading, setLoading] = useState(true)
  let TimeRep = () => <div>{moment(time).calendar()}</div>
  function HandleLoad() {
    console.log("loading completes")
    setLoading(false)
  }
  return (
    <Card className="mx-auto flex flex-col rounded-xl border mb-2 bg-white shadow  md:flex-row md:items-center">
      <div className="shrink-0  md:mr-8 md:max-w-sm">
        <Image
          className={`rounded-l-xl h-40 border-r w-96 object-cover bg-white`}
          src={MainImage ? MainImage : "/images/petra-blue.svg"}
          onLoadingComplete={HandleLoad}
          alt=""
          height={500}
          width={500}
        />
      </div>
      <div className="h-full w-full">
        <h2 className=" text-xl  text-primary font-light">{Title}</h2>
        <p className="mb-4 font-light">{Description}</p>
        <Separator orientation="horizontal" className="text-black mb-4" />
        <div className="flex items-center justify-between w-full ">
          <div className="w-full">
            <p className=" w-56">
              <strong className="block text-sm font-secondary">
                Published:
              </strong>
              <span className="text-sm font-light">
                <TimeRep />
              </span>
            </p>
          </div>
          <div className="mb-2 md:mr-8 w-full text-right">
            {Category?.Title ? (
              <>
                <strong className="block font-normal font-secondary">
                  Found In:
                </strong>
                <h3 className=" text-sm font-light">{Category?.Title}</h3>
              </>
            ) : (
              <></>
            )}
          </div>
        </div>
      </div>
    </Card>
  )
}
