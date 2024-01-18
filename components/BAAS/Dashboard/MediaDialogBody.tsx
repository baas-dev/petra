"use client"

import { useEffect, useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { useSearchParams } from "next/navigation"
import {
  BellRing,
  Check,
  ChevronDownIcon,
  CircleIcon,
  Delete,
  DollarSign,
  Download,
  File,
  Files,
  Folder,
  Loader2,
  LucideStickyNote,
  Trash,
  Upload,
} from "lucide-react"

import { cn } from "@/lib/utils"
import { AspectRatio } from "@/components/ui/aspect-ratio"
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { toast } from "@/components/ui/use-toast"
import BACKEND from "@/app/API"
import { Pagination } from "@/app/API/TYPES"

import PaginationComponent from "../Table/PaginationComponent"
import MediaStorage from "./MediaStorage"
import MediaUploadBox, { FilePreview } from "./MediaUploadBox"

const api = new BACKEND()

const LoadData = async (page: string | null) => {
  let res = await api.GET({
    Route: page ? `media?limit=12&page=${page}` : `media?limit=12`,
  })

  return res
}

export default function MediaDialogBody() {
  let searchParams = useSearchParams()

  const [loadedFiles, setLoadedFiles] = useState<any[]>([])
  const [images, setImages] = useState<File[]>([])
  const [uploading, setUploading] = useState(false)
  const [pagination, setPagination] = useState<Pagination>({
    Limit: 12,
    Page: 1,
    Sort: "",
    TotalPages: 1,
    TotalRows: 0,
  })

  const [filesLoading, setFilesLoading] = useState(true)
  useEffect(() => {
    let sortParam = searchParams.get("MediaPage")
    console.log(sortParam)
    setFilesLoading(true)
    LoadData(sortParam).then((val) => {
      if (val.data) {
        setLoadedFiles(val.data.rows)
        setPagination({
          ...pagination,
          Limit: val.data.meta.Limit,
          Page: val.data.meta.Page,
          TotalPages: val.data.meta.TotalPages,
          TotalRows: val.data.meta.TotalRows,
        })
        console.log(val.data)
      }
    })

    setFilesLoading(false)
  }, [searchParams])

  const handleFileSelected = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      //convert `FileList` to `File[]`
      const _files = Array.from(e.target.files)
      setImages(_files)
    }
  }

  async function HandleUpload() {
    setUploading(true)
    const formData = new FormData()

    // Append all selected files to FormData
    images.forEach((file) => {
      formData.append("files", file)
    })

    try {
      const response = await fetch(`${process.env.NEXT_PUBLIC_APIURL}/media`, {
        method: "POST",
        credentials: "include",
        body: formData,
      })

      // const data = await response.json()
      toast({
        className: "bg-primary text-white",
        title: "Successfully uploaded!",
      })
    } catch (err) {}
    LoadData(null).then((val) => {
      setFilesLoading(true)

      if (val.data) {
        setLoadedFiles(val.data)
        setPagination({
          ...pagination,
          Limit: val.data.meta.Limit,
          Page: val.data.meta.Page,
          TotalPages: val.data.meta.TotalPages,
          TotalRows: val.data.meta.TotalRows,
        })

        console.log(val.data)
      }
    })
    setFilesLoading(false)
    setUploading(false)
  }

  return (
    <>
      <div className="h-11/12 md: grid max-h-[800px] w-full grid-cols-1 overflow-y-scroll md:grid-cols-3">
        <div>
          <div className="mb-4 flex max-h-32 flex-wrap gap-2 overflow-y-scroll">
            <MediaUploadBox handleFileSelected={handleFileSelected} />
            {/* <UppyComponent /> */}
            {/* <ImagePreview images={images} /> */}
          </div>
          <div className="mb-4 h-64">
            {images.length == 0 ? (
              <>
                <div className="flex h-64 w-full items-center  justify-center rounded-lg border-2 border-dashed border-gray-300 bg-white shadow-sm">
                  <File className="mr-2" />
                  <Label className="text-lg">
                    Files You Upload Will Show Here
                  </Label>
                </div>
              </>
            ) : (
              <>
                <div className="mb-2  h-48 w-full  overflow-y-scroll rounded-lg border-2 border-dashed border-gray-300 bg-white shadow-sm">
                  <FilePreview images={images} callBack={setImages} />
                </div>
                {uploading ? (
                  <Button disabled>
                    <Loader2 className="animate-spin text-center" />
                  </Button>
                ) : (
                  <div>
                    <Button
                      className="w-full bg-accent/60 hover:bg-accent"
                      onClick={HandleUpload}
                    >
                      <Upload /> Begin Upload
                    </Button>
                  </div>
                )}
              </>
            )}
          </div>
          {/* <div className="w-full   border-2 border-gray-300 border-dashed rounded-lg shadow-sm bg-white">
            <MediaStorage />
          </div> */}
        </div>
        <div className=" mb-4 w-full md:col-span-2 ">
          {filesLoading ? (
            <Loader2 className="m-auto animate-spin text-2xl text-accent" />
          ) : (
            <>
              <div className="grid  max-h-[600px] w-full grid-cols-3 gap-2 overflow-y-scroll px-4 ">
                {loadedFiles && loadedFiles.length > 0 ? (
                  <>
                    {loadedFiles.map((item, i) => (
                      <FileCard
                        name={item.FileName}
                        type={item.FileType}
                        url={item.URL}
                        id={item.ID}
                        size={item.FileSize}
                        reload={() => {
                          LoadData(null).then((val) => {
                            if (val.data) {
                              setLoadedFiles(val.data)
                              console.log(val.data)
                            }
                          })
                        }}
                      />
                    ))}
                  </>
                ) : (
                  <div className="col-span-3 flex h-full w-full items-center justify-center  rounded-lg border-2 border-dashed border-gray-300 bg-white shadow-sm">
                    <h3>No Files Found</h3>
                  </div>
                )}
              </div>
              <div className="w-full bg-white py-4">
                <PaginationComponent
                  PageID="MediaPage"
                  TotalHits={pagination.TotalRows}
                  CurrentPage={pagination.Page}
                  TotalPages={pagination.TotalPages}
                  Limit={pagination.Limit}
                />
              </div>
            </>
          )}
        </div>
      </div>
    </>
  )
}

function FileCard({ name, type, url, id, size, reload }) {
  const [loading, setLoading] = useState<boolean>(false)
  function isImageByExtension(fileName: string): boolean {
    const imageExtensions = [
      ".jpg",
      ".jpeg",
      ".png",
      ".gif",
      ".bmp",
      ".svg",
      ".webp",
    ] // Add more extensions as needed
    const fileExtension = fileName.toLowerCase().split(".").pop()

    if (fileExtension && imageExtensions.includes(`.${fileExtension}`)) {
      return true
    }

    return false
  }

  async function handleDelete(givenID: string) {
    setLoading(true)
    let res = await api.DELETE({
      Route: "media",
      ID: givenID,
      Body: {},
    })
    if (res.data) {
      toast({
        className: "bg-primary text-white",
        title: "Successfully Deleted!",
      })
    }
    reload()
    setLoading(false)
  }

  return (
    <Card className="mb-2 w-full p-2 text-center">
      <h3 className="mb-2 text-center text-sm font-semibold underline">
        {name}
      </h3>
      {isImageByExtension(name) ? (
        <>
          <Image
            src={url}
            alt=""
            height={64}
            width={128}
            className=" mx-auto mb-4 h-32 w-32 object-contain"
          />
        </>
      ) : (
        <>
          <Files className="mx-auto mb-4 h-32 w-32" />
        </>
      )}
      {/* {type} */}
      <div className="flex gap-2 ">
        {loading ? (
          <Button>
            <Loader2 className="mx-auto animate-spin text-center" />
          </Button>
        ) : (
          <Button
            className="mb-2 w-full"
            variant={"destructive"}
            onClick={() => handleDelete(id)}
          >
            <Delete className="mr-2 h-4 w-4" /> Delete File
          </Button>
        )}
        <Button
          className="mb-2 w-full"
          onClick={() => {
            navigator.clipboard.writeText(url)

            toast({
              title: "Link Copied!",
              description: <div>You can now paste the media link</div>,
            })
          }}
        >
          <LucideStickyNote className="mr-2 h-4 w-4 " /> Copy Link
        </Button>

        {/* <Link href={url} className="w-full" target="_blank">
            <Button className="w-full">
              <Download className="mr-2 h-4 w-4 " /> Download
            </Button>
          </Link> */}
      </div>
    </Card>
  )
}
