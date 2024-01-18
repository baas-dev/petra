import Image from "next/image"

import { CardDescription, CardTitle } from "@/components/ui/card"

export default function HoverCard({
  image,
  title,
  desc,
}: {
  image: string
  title
  desc
}) {
  return (
    <div className="mb-4 h-full w-full p-2 transition duration-500 hover:scale-110">
      <Image
        src={image}
        height={1500}
        width={500}
        alt={""}
        className="  mx-auto  h-96 w-full max-w-sm rounded-t-lg object-fill"
      />
      <div className="mx-auto w-full max-w-sm rounded-b-lg bg-secondary p-4">
        <CardTitle className="text-2xl text-black">{title}</CardTitle>
        <CardDescription>{desc}</CardDescription>
      </div>
    </div>
  )
}
