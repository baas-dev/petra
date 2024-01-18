"use client"

import Image from "next/image"
import { useRouter } from "next/navigation"

import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

export default function BigCard({
  Title,
  Description,
  btn,
  btnText,
  bg,
  bgHover,
  image,
  link,
  action,
}) {
  const r = useRouter()
  return (
    <Card
      style={{ contain: "layout" }}
      onClick={() => {
        r.push(link), action()
      }}
      className={`${bg} hover: w-full${bgHover} hover:cursor-pointer `}
    >
      <Image
        src={"/images/background.svg"}
        alt=""
        height={400}
        width={400}
        className="absolute -z-10 h-full w-full opacity-30 "
      />
      <CardHeader className="text-center">
        {/* <Image
          src={"/images/purchase.svg"}
          height={120}
          width={120}
          alt={""}
          className="mx-auto mb-2 "
        /> */}
        <CardTitle className="text-2xl font-semibold text-secondary">
          {Title}
        </CardTitle>
        <CardDescription className="text-secondary">
          {Description}
        </CardDescription>
      </CardHeader>
      {btn ? (
        <CardFooter className="mx-auto flex w-full text-center">
          <label className="mx-auto text-secondary hover:cursor-pointer">{`${btnText}`}</label>
          {/* <Button>Deploy</Button> */}
        </CardFooter>
      ) : (
        <></>
      )}
    </Card>
  )
}
