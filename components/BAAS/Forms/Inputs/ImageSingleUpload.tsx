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
  Label?: string
}

export default function ImageSingleUpload(props: {
  form: any
  options: ImageSingleUploadOptions
}) {
  return (
    <>
      <div className=" mb-4 w-full p-4">
        <MainImage
          form={props.form}
          name={props.options.Name}
          label={props.options.Label ? props.options.Label : ""}
        />
      </div>
    </>
  )
}

function MainImage({
  form,
  name,
  label,
}: {
  form: any
  name: string
  label: string
}) {
  let val = form.getValues(name)
  let url

  try {
    url = new URL(val)
  } catch (_) {}

  return (
    <>
      <div className="flex w-full items-center justify-center text-center">
        <div className="my-auto items-center ">
          <div className="mb-2">
            <MediaDialog />
          </div>
          <div className="mx-auto mb-4 h-48 w-48 bg-gray-200">
            {url ? (
              <Image
                src={val}
                alt={""}
                height={128}
                width={128}
                className="h-48 w-full  object-contain"
              />
            ) : (
              <></>
            )}
          </div>
          <div className="flex w-full gap-2">
            <TextInput
              form={form}
              options={{
                name: name,
                label: label,
                placeholder: "Link to image...",
              }}
            />
            {/* <Popover modal>
              <PopoverTrigger asChild>
                <Button
                  className="mx-auto text-center text-lg mb-2"
                  type="button"
                >
                  {`Set Main Image`}
                </Button>
              </PopoverTrigger>
              <PopoverContent className="w-80">
                <div className="flex gap-1 z-20">
                  <TextInput
                    form={form}
                    options={{
                      name: name,
                      placeholder: "Link to image...",
                    }}
                  />
                </div>
              </PopoverContent>
            </Popover> */}
          </div>
        </div>
      </div>
    </>
  )
}
