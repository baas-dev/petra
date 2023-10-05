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

import MediaDialog from "../../Dashboard/MediaDialog"
import TextInput from "./Text"

interface ImageSingleUploadOptions {
  Name: string
}

export default function ImageSingleUpload(props: {
  form: any
  options: ImageSingleUploadOptions
}) {
  return (
    <>
      <div className=" p-4 w-full mb-4">
        <MainImage form={props.form} name={props.options.Name} />
      </div>
    </>
  )
}

function MainImage({ form, name }: { form: any; name: string }) {
  let val = form.getValues(name)
  let url

  try {
    url = new URL(val)
  } catch (_) {}

  return (
    <>
      <div className="w-full text-center justify-center items-center flex">
        <div className="my-auto items-center ">
          <div className="mb-2">
            <MediaDialog />
          </div>
          <div className="w-48 h-48 bg-gray-200 mx-auto mb-4">
            {url ? (
              <Image
                src={val}
                alt={""}
                height={128}
                width={128}
                className="w-full h-48  object-contain"
              />
            ) : (
              <></>
            )}
          </div>
          <div className="flex gap-2 w-full">
            <Popover modal>
              <PopoverTrigger asChild>
                <Button
                  className="mx-auto text-center text-lg mb-2"
                  type="button"
                >
                  {`Set Main Image`}
                </Button>
              </PopoverTrigger>
              <PopoverContent className="w-80">
                <div className="flex gap-1 ">
                  <TextInput
                    form={form}
                    options={{
                      name: name,
                      placeholder: "Link to image...",
                    }}
                  />
                </div>
              </PopoverContent>
            </Popover>
          </div>
        </div>
      </div>
    </>
  )
}
