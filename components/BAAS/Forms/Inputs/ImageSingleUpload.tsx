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

interface ImageSingleUploadOptions {}

export default function ImageSingleUpload(props: {
  form: any
  options: ImageSingleUploadOptions
}) {
  return (
    <>
      <div className=" p-4 w-full mb-4">
        <MainImage form={props.form} />
      </div>
    </>
  )
}

function MainImage({ form }: { form: any }) {
  return (
    <>
      <div className="w-full text-center justify-center items-center flex">
        <div className="my-auto items-center ">
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
                <div className="mt-2">
                  <Button className="w-full">
                    <Plus className="" /> Save
                  </Button>
                </div>
              </div>
            </PopoverContent>

            <div className="w-48 h-48 bg-gray-200 mx-auto">
              <Image src={""} alt={""} />
            </div>
          </Popover>
        </div>
      </div>
    </>
  )
}
