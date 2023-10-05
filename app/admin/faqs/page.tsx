"use client"

import { useEffect, useRef, useState } from "react"
import { useRouter } from "next/navigation"

import { Button } from "@/components/ui/button"
import Banner from "@/components/BAAS/Banners/Banner"
import ManageDataDialog from "@/components/BAAS/Forms/Dialog"
import TableLoading from "@/components/BAAS/Loading/TableLoading"
import { DataTable } from "@/components/BAAS/Table/DataTable"
import BACKEND from "@/app/API"

import { useAdminTableContext } from "../Context/TableContext"
import { columns } from "./columns"
import FAQForm from "./form"
import FAQFullForm from "./form"

const api = new BACKEND()

async function getData() {
  return await api.GET({
    Route: "faq",
  })
}

export default function FAQAdmin() {
  const r = useRouter()

  const [loading, setLoading] = useState(true)
  const [data, setData] = useState<any[]>([])

  const LoadData = async () => {
    await getData().then((val) => {
      if (val.data && val.data.length > 0) {
        setData(val.data)
      }
    })
    setLoading(false)
  }
  useEffect(() => {
    LoadData()
  }, [])

  return (
    <>
      <Banner Title={"FAQs"} Subtitle={"Frequently Asked Questions"}>
        <ManageDataDialog Form={<FAQFullForm />} data={null} Text={"Create"} />
      </Banner>

      {loading ? (
        <TableLoading />
      ) : (
        <DataTable
          columns={columns}
          data={data ? data : []}
          scope={{
            TableName: "FAQS",
            SearchName: "faqs",
          }}
        />
      )}
    </>
  )
}
