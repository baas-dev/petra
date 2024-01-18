import Image from "next/image"
import { Plus } from "lucide-react"

import { Button } from "@/components/ui/button"
import { FormLabel } from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"
import { Separator } from "@/components/ui/separator"

import TextInput from "./Text"

interface ImageMultiUploadOptions {}

export default function ImageMultiUploadInput(props: {
  form: any
  options: ImageMultiUploadOptions
}) {
  return (
    <>
      <div className="flex  gap-2">
        <div className="bg-white p-4 w-full md:w-1/3 rounded-xl shadow-md mb-4">
          <div>
            <MainImage form={props.form} />
          </div>
        </div>
        <div className="bg-white p-4 w-full md:w-2/3 roundex-cl shadow-md mb-4">
          <SecondaryImages />
        </div>
      </div>
    </>
  )
}

function MainImage({ form }: { form: any }) {
  return (
    <>
      <div className="w-full text-center">
        <Popover>
          <PopoverTrigger asChild>
            <Button className="mx-auto text-center mb-2" type="button">
              {`Set Main Image`}
            </Button>
          </PopoverTrigger>
          <PopoverContent className="w-80">
            <div className="flex gap-1 ">
              <TextInput
                form={form}
                options={{
                  name: "MainImage",
                  placeholder: "Link to image...",
                }}
              />
            </div>
          </PopoverContent>

          <div className="w-48 h-48 bg-gray-200 mx-auto">
            <Image src={""} alt={""} />
          </div>
        </Popover>
      </div>
    </>
  )
}

function SecondaryImages() {
  return (
    <>
      <div className="w-full text-center">
        <Button
          type="button"
          variant={"outline"}
          className="mx-auto text-center"
        >{`(0) Add Secondary Images`}</Button>
        <div className="w-full h-48 mt-2 bg-gray-200 mx-auto mb-2"></div>
      </div>
    </>
  )
}
