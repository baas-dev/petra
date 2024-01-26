import Image from "next/image"

import { AspectRatio } from "@/components/ui/aspect-ratio"

interface IntroSection {
  Title?: string
  ImageURL: string
}

export default function IntroSection(props: IntroSection) {
  return (
    <>
      <section className="relative mb-8 h-full min-h-[300px]  w-full lg:h-[65vh]">
        <Image
          src={props.ImageURL}
          fill
          alt="Petra Page Background"
          className=" z-0 mx-auto  max-w-[2560px]  object-cover object-top xl:object-cover xl:object-center 2xl:object-center "
        />

        <div className="relative z-10 flex h-full w-full flex-col items-center justify-center bg-black/20">
          <h1 className="text-6xl text-white">{props.Title}</h1>
        </div>
      </section>
    </>
  )
}
