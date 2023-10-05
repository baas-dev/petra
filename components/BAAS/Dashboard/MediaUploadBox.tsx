import { useState } from "react"
import Image from "next/image"
import { zodResolver } from "@hookform/resolvers/zod"
import { TableFooter } from "@mui/material"
import { File, Loader, Upload, UploadCloud } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import { toast } from "@/components/ui/use-toast"
import BACKEND from "@/app/API"

import CustomFileSelector from "./FileSelector"

export interface MediaItemOptions {
  title: string
  description: string
  type: string
}

type Props = {
  images: File[]
  callBack: (any) => void
}

export default function MediaUploadBox({ handleFileSelected }) {
  return (
    <>
      <div className="flex items-center justify-center w-full ">
        <label
          htmlFor="dropzone-file"
          className="flex flex-col items-center justify-center w-full h-32 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 dark:hover:bg-bray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600"
        >
          <div className="flex flex-col items-center justify-center pt-5 pb-6">
            <UploadCloud />
            <p className="mb-2 text-sm text-gray-500 dark:text-gray-400">
              <span className="font-semibold">Click to upload</span> or drag and
              drop
            </p>
          </div>

          <CustomFileSelector onChange={handleFileSelected} />
        </label>
      </div>
    </>
  )
}

export const FilePreview = ({ images, callBack }: Props) => {
  return (
    <Table className=" w-full bg-white h-full">
      {/* <TableCaption>A list of your recent invoices.</TableCaption> */}
      <TableHeader className="align-top">
        <TableRow>
          <TableHead>File Name</TableHead>
          <TableHead>File Type</TableHead>
          <TableHead>File Size</TableHead>
        </TableRow>
      </TableHeader>
      {/* {uploading ? (
        <>
          <Loader />
          {`uploading ${images.length} Files`}
        </>
      ) : ( */}
      <TableBody className="">
        {images.map((image) => {
          const src = URL.createObjectURL(image)
          return (
            <>
              <TableRow className="h-8">
                <TableCell>{image.name}</TableCell>
                <TableCell>{image.type}</TableCell>
                <TableCell>{image.size}</TableCell>
              </TableRow>
              {/* <div className="" key={image.name}></div> */}
            </>
          )
        })}
      </TableBody>
      {/* )} */}
    </Table>
  )
}

function _UploadText(Status) {
  switch (Status) {
    case "success":
      return "text-green-500"
    case "failure":
      return "text-desctructive"
    default:
      return "text-accent"
  }
}

/* {isImageByExtension(image.name) ? (
      // <Image
      //   src={src}
      //   alt={image.name}
      //   className="object-cover"
      //   fill
      // />
      <Card className="max-w-24 h-24">
        <Image
          src={src}
          alt={image.name}
          className="object-cover"
          fill
        />
      </Card>
    ) : (
      <Card className="max-w-24 w-24 flex justify-center items-center">
        <File className="h-full w-full" />
      </Card>
    )} */
