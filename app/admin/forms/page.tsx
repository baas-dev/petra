"use client"

import { useEffect, useRef, useState } from "react"
import { useRouter } from "next/navigation"

import Banner from "@/components/BAAS/Banners/Banner"
import ManageDataDialog from "@/components/BAAS/Forms/Dialog"
import TableLoading from "@/components/BAAS/Loading/TableLoading"
import { DataTable } from "@/components/BAAS/Table/DataTable"
import BACKEND from "@/app/API"

import { columns } from "./columns"

const api = new BACKEND()

async function getData() {
  return await api.GET({
    Route: "forms",
  })
}

export default function FormsAdmin() {
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
        Title={"Forms"}
        Subtitle={"Most common questions for the public to understand"}
      >
        <></>
      </Banner>

      {loading ? (
        <TableLoading />
      ) : (
        <DataTable
          columns={columns}
          data={dataRef.current ? dataRef.current : []}
        />
      )}
    </>
  )
}
