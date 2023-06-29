import Image from "next/image"

import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"

export default function Hero1() {
  return (
    <div className=" ">
      {/* Slanted bottom mask */}

      {/* Hero container */}
      <div className=" z-10 flex h-screen flex-col items-center justify-center -mb-32">
        <div className="w-full">
          <Image
            fill
            alt={""}
            style={{ objectFit: "cover" }}
            className="block absolute rounded-md float-right -z-10 opacity-40 bg-black"
            src={"/images/home-bg.jpg"}
          />
        </div>
        {/* Image and text section */}
        <div className="container max-w-4xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mx-auto">
            {/* Image */}
            <div>
              <Image
                height={200}
                width={300}
                alt={""}
                className="block  rounded-md w-full  float-right -z-10 "
                src={"/images/petra-blue.svg"}
              />
            </div>

            {/* Text */}
            <div className="w-full z-10 my-auto text-center ">
              <Badge className="bg-accent mx-auto">
                Your #1 Choice for Texas Home Lending
              </Badge>
              <h1 className=" text-6xl  ">
                Your <span className="font-bold">Home</span>, <br /> Our{" "}
                <span className="font-bold">Calling</span>
              </h1>
              <Image
                height={20}
                width={200}
                alt={""}
                className="block -mt-8 rounded-md w-full -z-10 "
                src={"/images/underline.svg"}
              />
            </div>
          </div>
        </div>

        {/* Buttons */}
        {/* <div className="mt-8 z-10">
          <Button variant={"secondary"} className="mr-2">
            Button 1
          </Button>
          <Button variant={"outline"} className="bg-accent ml-2">
            Button 2
          </Button>
        </div> */}
      </div>
    </div>
  )
}
