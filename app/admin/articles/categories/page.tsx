"use client"

import { useCallback, useEffect, useState } from "react"

// corrected import path

import { Button } from "@/components/ui/button"
import Banner from "@/components/BAAS/Banners/Banner"
import ManageDataDialog from "@/components/BAAS/Forms/Dialog"
import TableLoading from "@/components/BAAS/Loading/TableLoading"
import { DataTable } from "@/components/BAAS/Table/DataTable"
import BACKEND from "@/app/API"

import { useAdminTableContext } from "../../Context/TableContext"
import { columns } from "./columns"
import ArticleCategoryForm from "./form"

const api = new BACKEND()

async function getData() {
  return await api.GET({
    Route: "categories?scope=articles",
  })
}

export default function FAQAdmin() {
  const [loading, setLoading] = useState(true)
  const [data, setData] = useState<any[]>([])

  async function LoadData() {
    setLoading(true)
    await getData().then((val) => {
      if (val.data && val.data.length > 0) {
        let state = val.data
        setData(state) // Set the state directly
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
        Subtitle="Classify posts and allow easier sorting"
        Title="Article Categories"
      >
        <ManageDataDialog
          Form={<ArticleCategoryForm />}
          data={null}
          Text={"Create"}
        />
      </Banner>

      {loading ? (
        <TableLoading />
      ) : (
        <DataTable
          columns={columns}
          data={data} // Use state-based data
          scope={{
            TableName: "Categories",
          }}
        />
      )}
    </>
  )
}
