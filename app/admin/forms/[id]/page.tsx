"use client"

import { useEffect, useRef, useState } from "react"
import { useRouter } from "next/navigation"

import Banner from "@/components/BAAS/Banners/Banner"
import ManageDataDialog from "@/components/BAAS/Forms/Dialog"
import TableLoading from "@/components/BAAS/Loading/TableLoading"
import { DataTable } from "@/components/BAAS/Table/DataTable"
import BACKEND from "@/app/API"

import ContactRender from "./contactRender"
import PrequalRender from "./prequalRender"

const api = new BACKEND()

async function getData(id) {
  return await api.GET({
    Route: `forms/${id}`,
  })
}

export default function FormsAdmin({ params }) {
  const [loading, setLoading] = useState(true)
  const [data, setData] = useState({
    SubmissionData: "",
    Type: "",
  })

  const LoadData = async () => {
    await getData(params.id).then((val) => {
      setData(val.data)
    })
    setLoading(false)
  }
  useEffect(() => {
    LoadData()
  }, [])

  console.log("data", data)
  return (
    <>
      {loading ? (
        <TableLoading />
      ) : data.Type == "contact" ? (
        <ContactRender Data={data.SubmissionData} />
      ) : (
        <PrequalRender Data={data.SubmissionData} />
      )}
    </>
  )
}
