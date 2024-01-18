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
    <Card className="mx-auto grid grid-cols-3 w-full h-full pb-2 space-y-2 mt-2 rounded-xl border bg-white shadow   md:items-center">
      <div className="col-span-3 lg:col-span-1  w-full">
        <Image
          className={`xl:rounded-l-xl h-48 border-r w-full object-cover bg-white`}
          src={MainImage ? MainImage : "/images/petra-blue.svg"}
          onLoadingComplete={HandleLoad}
          alt=""
          height={750}
          width={1000}
        />
      </div>
      <div className="h-full w-full p-4  col-span-3 lg:col-span-2 justify-end">
        <div className="flex w-full items-center">
          <div className="w-full">
            <h2 className=" text-xl  text-primary font-light">{Title}</h2>
          </div>
          <div className="flex items-center w-full h-full text-right ">
            <div className="w-full">
              <p className="">
                <strong className="block text-sm font-secondary">
                  Last Updated:
                </strong>
                <span className="text-sm font-light">
                  <TimeRep />
                </span>
              </p>
            </div>
          </div>
        </div>
        <Separator orientation="horizontal" className="text-black mb-4" />

        <div className="bottom-0 align-bottom">
          <p className="mb-4 font-light h-20 w-full">{Description}</p>
          <div className="flex items-center h-full align-bottom bottom-0  justify-between w-full ">
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
      </div>
    </Card>
  )
}
