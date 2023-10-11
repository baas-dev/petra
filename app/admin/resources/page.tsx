"use client"

import { useEffect, useRef, useState } from "react"
import { useRouter } from "next/navigation"

import Banner from "@/components/BAAS/Banners/Banner"
import ManageDataDialog from "@/components/BAAS/Forms/Dialog"
import TableLoading from "@/components/BAAS/Loading/TableLoading"
import { DataTable } from "@/components/BAAS/Table/DataTable"
import BACKEND from "@/app/API"

import { columns } from "./columns"
import ResourcesForm from "./form"

const api = new BACKEND()

async function getData() {
  return await api.GET({
    Route: "resources",
  })
}

export default function FAQAdmin() {
  const r = useRouter()

  const [loading, setLoading] = useState(true)

  const dataRef = useRef()
  function setDataRef(data) {
    dataRef.current = data
  }
  const LoadData = async () => {
    await getData().then((val) => {
      if (val.data && val.data.length > 0) {
        setDataRef([...val.data])
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
        Title={"Resources"}
        Subtitle={"Downloads, documents, and more for the public to use"}
      >
        <ManageDataDialog
          Form={<ResourcesForm />}
          data={null}
          Text={"Create"}
          Title={"Resources Form"}
          Description={"Give visitors resources to succeed"}
        />
      </Banner>

      {loading ? (
        <TableLoading />
      ) : (
        <DataTable
          columns={columns}
          data={dataRef.current ? dataRef.current : []}
          scope={{
            TableName: "Resources",
            SearchName: "resources",
          }}
        />
      )}
    </>
  )
}
