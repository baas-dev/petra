import Image from "next/image"
import { Fade, Slide, Zoom } from "react-awesome-reveal"

import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"

export default function Hero1() {
  return (
    <div className=" ">
      {/* Slanted bottom mask */}

      {/* Hero container */}
      <div className="  flex h-screen flex-col items-center justify-center -mb-32">
        <div className="w-full">
          <Image
            fill
            alt={""}
            style={{ objectFit: "cover" }}
            className="block absolute rounded-md float-right z-0 opacity-40 bg-black"
            src={"/images/home-bg.jpg"}
          />
        </div>
        {/* Image and text section */}
        <div className="container max-w-4xl mx-auto px-4 sm:px-6">
          <div className="w-full gap-4 mx-auto">
            {/* Image */}
            <div className="w-full z-40">
              <Image
                height={1000}
                width={2000}
                alt={""}
                className="block relative rounded-md w-full  float-right z-10 "
                src={"/images/logotag.png"}
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
