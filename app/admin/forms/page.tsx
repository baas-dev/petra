"use client"

import { useEffect, useRef, useState } from "react"
import { useRouter } from "next/navigation"

import { Label } from "@/components/ui/label"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import Banner from "@/components/BAAS/Banners/Banner"
import ManageDataDialog from "@/components/BAAS/Forms/Dialog"
import TableLoading from "@/components/BAAS/Loading/TableLoading"
import { DataTable } from "@/components/BAAS/Table/DataTable"
import BACKEND from "@/app/API"

import { columns } from "./columns"
import { ColumnsAlt } from "./columns-alt"

const api = new BACKEND()

async function getData() {
  return await api.GET({
    Route: "forms",
  })
}

export default function FormsAdmin() {
  const r = useRouter()
  const [contactData, setContactData] = useState([])
  const [prequalData, setPrequalData] = useState([])

  const [loading, setLoading] = useState(true)

  const LoadData = async () => {
    await getData().then((val) => {
      if (val.data && val.data.length > 0) {
        let contactArr: any = []
        let prequalArr: any = []
        console.log(val.data)
        val.data.forEach((item, i) => {
          if (item.Type == "contact") {
            contactArr.push(item)
          }
          if (item.Type == "prequalification") {
            prequalArr.push(item)
          }
        })
        setContactData(contactArr)
        setPrequalData(prequalArr)
      }
    })
    setLoading(false)
  }
  useEffect(() => {
    LoadData()
  }, [])

  return (
    <>
      <Banner
        Title={"Forms"}
        Subtitle={"Most common questions for the public to understand"}
      >
        <></>
      </Banner>

      {loading ? (
        <TableLoading />
      ) : (
        <>
          <Tabs defaultValue="contact" className="w-full">
            <div className="rounded-xl bg-white p-2 shadow-md">
              <Label>Selected Records:</Label>
              <TabsList className="grid w-full grid-cols-2 gap-2">
                <TabsTrigger value="contact">Contact Form</TabsTrigger>
                <TabsTrigger value="prequalification">
                  Prequalification Form
                </TabsTrigger>
              </TabsList>
            </div>
            <TabsContent value="contact" className="w-full">
              <DataTable
                columns={ColumnsAlt}
                data={contactData ? contactData : []}
                scope={{
                  TableName: "Forms",
                }}
              />
            </TabsContent>
            <TabsContent value="prequalification">
              <DataTable
                columns={columns}
                data={prequalData ? prequalData : []}
                scope={{
                  TableName: "Forms",
                }}
              />
            </TabsContent>
          </Tabs>
        </>
      )}
    </>
  )
}
