import Image from "next/image"

import { AspectRatio } from "@/components/ui/aspect-ratio"

interface IntroSection {
  Title?: string
  ImageURL: string
}

export default function IntroSection(props: IntroSection) {
  return (
    <>
      <section className="relative w-full  lg:h-[65vh] mb-8">
        <Image
          src={props.ImageURL}
          fill
          alt=""
          className=" mx-auto  z-0 object-contain max-w-[2560px] object-top xl:object-center xl:object-cover 2xl:object-center "
        />

        <div className="relative flex flex-col bg-black bg-opacity-20 items-center z-10 w-full h-full justify-center">
          <h1 className="text-6xl text-white">{props.Title}</h1>
        </div>
      </section>
    </>
  )
}
