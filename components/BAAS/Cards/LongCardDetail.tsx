"use client"

import { useState } from "react"
import Image from "next/image"
import moment from "moment"

import { Card } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import { Skeleton } from "@/components/ui/skeleton"

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
    <Card className="mx-auto mt-2 grid h-full w-full grid-cols-3 space-y-2 rounded-xl border bg-white pb-2 shadow   md:items-center">
      <div className="col-span-3 w-full  lg:col-span-1">
        <Image
          className={`h-48 w-full border-r bg-white object-cover xl:rounded-l-xl`}
          src={MainImage ? MainImage : "/images/petra-blue.svg"}
          onLoadingComplete={HandleLoad}
          alt=""
          height={750}
          width={1000}
        />
      </div>
      <div className="col-span-3 h-full w-full  justify-end p-4 lg:col-span-2">
        <div className="flex w-full items-center">
          <div className="w-full">
            <h2 className=" text-xl  font-light text-primary">{Title}</h2>
          </div>
          <div className="flex h-full w-full items-center text-right ">
            <div className="w-full">
              <p className="">
                <strong className="font-secondary block text-sm">
                  Last Updated:
                </strong>
                <span className="text-sm font-light">
                  <TimeRep />
                </span>
              </p>
            </div>
          </div>
        </div>
        <Separator orientation="horizontal" className="mb-4 text-black" />

        <div className="bottom-0 align-bottom">
          <p className="mb-4 h-20 w-full font-light">{Description}</p>
          <div className="bottom-0 flex h-full w-full items-center  justify-between align-bottom ">
            <div className="w-full">
              <p className=" w-56">
                <strong className="font-secondary block text-sm">
                  Published:
                </strong>
                <span className="text-sm font-light">
                  <TimeRep />
                </span>
              </p>
            </div>
            <div className="mb-2 w-full text-right md:mr-8">
              {Category?.Title ? (
                <>
                  <strong className="font-secondary block font-normal">
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
      </div>
    </Card>
  )
}
