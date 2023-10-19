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
      const response = await fetch("/backend/media", {
        method: "POST",
        credentials: "include",
        body: formData,
      })

      const data = await response.json()
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
      <div className="grid overflow-y-scroll h-11/12 md: grid-cols-1 md:grid-cols-3 max-h-[800px] w-full">
        <div>
          <div className="flex flex-wrap mb-4 gap-2 max-h-32 overflow-y-scroll">
            <MediaUploadBox handleFileSelected={handleFileSelected} />
            {/* <UppyComponent /> */}
            {/* <ImagePreview images={images} /> */}
          </div>
          <div className="h-64 mb-4">
            {images.length == 0 ? (
              <>
                <div className="w-full h-64 flex items-center  justify-center border-2 border-gray-300 border-dashed rounded-lg shadow-sm bg-white">
                  <File className="mr-2" />
                  <Label className="text-lg">
                    Files You Upload Will Show Here
                  </Label>
                </div>
              </>
            ) : (
              <>
                <div className="w-full  border-2 mb-2  overflow-y-scroll h-48 border-gray-300 border-dashed rounded-lg shadow-sm bg-white">
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
        <div className=" md:col-span-2 w-full mb-4 ">
          {filesLoading ? (
            <Loader2 className="text-accent text-2xl animate-spin m-auto" />
          ) : (
            <>
              <div className="px-4  grid grid-cols-3 gap-2 w-full max-h-[600px] overflow-y-scroll ">
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
                  <div className="w-full col-span-3 flex justify-center items-center h-full  border-2 border-gray-300 border-dashed rounded-lg shadow-sm bg-white">
                    <h3>No Files Found</h3>
                  </div>
                )}
              </div>
              <div className="w-full bg-white pt-4 pb-4">
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
    <Card className="text-center p-2 w-full mb-2">
      <h3 className="text-sm mb-2 text-center font-semibold underline">
        {name}
      </h3>
      {isImageByExtension(name) ? (
        <>
          <Image
            src={url}
            alt=""
            height={64}
            width={128}
            className=" mx-auto h-32 w-32 object-contain mb-4"
          />
        </>
      ) : (
        <>
          <Files className="h-32 w-32 mx-auto mb-4" />
        </>
      )}
      {/* {type} */}
      <div className="flex gap-2 ">
        {loading ? (
          <Button>
            <Loader2 className="animate-spin text-center mx-auto" />
          </Button>
        ) : (
          <Button
            className="w-full mb-2"
            variant={"destructive"}
            onClick={() => handleDelete(id)}
          >
            <Delete className="mr-2 h-4 w-4" /> Delete File
          </Button>
        )}
        <Button
          className="w-full mb-2"
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
