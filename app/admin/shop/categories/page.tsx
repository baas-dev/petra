"use client"

import { useEffect, useRef, useState } from "react"
import { useRouter } from "next/navigation"

import ManageDataDialog from "@/components/BAAS/Forms/Dialog"
import TableLoading from "@/components/BAAS/Loading/TableLoading"
import { DataTable } from "@/components/BAAS/Table/DataTable"
import BACKEND from "@/app/API"

import { columns } from "./columns"
import ArticleCategoryForm from "./form"

const api = new BACKEND()

async function getData() {
  return api.GET({
    Route: "categories?scope=shop",
  })
}

export default async function FAQAdmin() {
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
      setLoading(false)
    })
  }
  useEffect(() => {
    LoadData()
  }, [])

  return (
    <>
      {/* <ManageDataDialog form={<ArticleCategoryForm />}>
        Create Shop Category
      </ManageDataDialog> */}
      {loading ? (
        <TableLoading />
      ) : (
        <></>
        // <DataTable
        //   form={<ArticleCategoryForm />}
        //   columns={columns}
        //   data={dataRef.current ? dataRef.current : []}
        //   routePath="/categories"
        // />
      )}
    </>
  )
}
