import Image from "next/image"

import { Button } from "@/components/ui/button"
import { FormLabel } from "@/components/ui/form"
import { Label } from "@/components/ui/label"

interface ImageMultiUploadOptions {}

export default function ImageMultiUploadInput(props: {
  form: any
  options: ImageMultiUploadOptions
}) {
  return (
    <div className="my-4 bg-white w-full px-4">
      <FormLabel className="text-base">Media</FormLabel>
      <MainImage />
      <SecondaryImages />
    </div>
  )
}

function MainImage() {
  return (
    <>
      <div className="w-full mt-4">
        <div className="w-48  mx-auto h-48 bg-gray-200">
          <Image src={""} alt={""} />
        </div>
      </div>
    </>
  )
}

function SecondaryImages() {
  const divs = new Array(10).fill(null)
  return (
    <div className="py-2 flex justify-center gap-2">
      <Button>{`Set Main Image`}</Button>

      <Button variant={"outline"}>{`(0) Secondary Images`}</Button>
    </div>
  )
}
