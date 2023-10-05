"use client"

import { useEffect, useState } from "react"
import { useRouter } from "next/navigation"
import { z } from "zod"

import Banner from "@/components/BAAS/Banners/Banner"
import ManageDataDialog from "@/components/BAAS/Forms/Dialog"
import TableLoading from "@/components/BAAS/Loading/TableLoading"
import { DataTable } from "@/components/BAAS/Table/DataTable"
import BACKEND from "@/app/API"

import { columns } from "./columns"
import ArticleInitForm, { ArticleFormSchema } from "./form"

const api = new BACKEND()

async function getData() {
  return await api.GET({
    Route: "articles",
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
      <Banner Title={"Articles"} Subtitle={"Posts available to your community"}>
        <ManageDataDialog
          Form={<ArticleInitForm />}
          data={null}
          Text={"Create Article"}
        />
      </Banner>

      {loading ? (
        <TableLoading />
      ) : (
        <DataTable
          columns={columns}
          data={data ? data : []}
          scope={{
            TableName: "BlogPosts",
            SearchName: "articles",
          }}
        />
      )}
    </>
  )
}
