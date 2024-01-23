"use client"

import { useEffect, useRef, useState } from "react"
import { useRouter } from "next/navigation"

import Banner from "@/components/BAAS/Banners/Banner"
import ManageDataDialog from "@/components/BAAS/Forms/Dialog"
import TableLoading from "@/components/BAAS/Loading/TableLoading"
import { DataTable } from "@/components/BAAS/Table/DataTable"
import BACKEND from "@/app/api"

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
    CreatedAt: "",
  })

  const LoadData = async () => {
    await getData(params.id).then((val) => {
      setData(val.data)
      console.log(JSON.parse(val.data.SubmissionData))
    })
    setLoading(false)
  }
  useEffect(() => {
    LoadData()
  }, [])

  return (
    <>
      {loading ? (
        <TableLoading />
      ) : data.Type == "contact" ? (
        <ContactRender Data={data} />
      ) : (
        <PrequalRender Data={data.SubmissionData} />
      )}
    </>
  )
}
