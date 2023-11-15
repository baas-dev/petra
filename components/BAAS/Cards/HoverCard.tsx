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
    <div className="w-full mb-4 p-2 h-full transform transition duration-500  hover:scale-110">
      <Image
        src={image}
        height={1500}
        width={500}
        alt={""}
        className="  object-fill  rounded-t-lg h-96 w-full max-w-sm mx-auto"
      />
      <div className="w-full max-w-sm p-4 mx-auto bg-secondary rounded-b-lg">
        <CardTitle className="text-2xl text-black">{title}</CardTitle>
        <CardDescription>{desc}</CardDescription>
      </div>
    </div>
  )
}
