"use client"

import { useEffect, useState } from "react"
import { useParams } from "next/navigation"

import TableLoading from "@/components/BAAS/Loading/TableLoading"
import BACKEND from "@/app/API"

import ArticleFullForm from "./form"

const api = new BACKEND()

async function getArticleData(id: string) {
  return await api.GET({
    Route: "articles/" + id,
  })
}
async function getCategoriesData() {
  return await api.GET({
    Route: "categories?scope=articles",
  })
}
export default function ArticlesEditPage() {
  const [articleData, setArticleData] = useState()
  const [categoryData, setCategoryData] = useState<any[]>([])
  let { id } = useParams()

  async function LoadData() {
    if (typeof id == "string") {
      await getArticleData(id).then((val) => {
        let state = val.data
        setArticleData(state) // Set the state directly
      })
    }
  }

  function GetItems(data: any[]): { label: string; value: string }[] {
    let res: { label: string; value: string }[] = []
    if (data.length > 0) {
      data.forEach((item, i) => {
        res.push({
          label: item.Title,
          value: item.ID,
        })
      })
    }
    res.push({
      label: "None",
      value: "",
    })
    return res
  }

  async function LoadItems() {
    await getCategoriesData().then((val) => {
      console.log(val.data)
      let state: { label: string; value: string }[] = []
      if (val.data && val.data.length > 0) {
        state = GetItems(val.data)
      }
      setCategoryData(state)
    })
  }

  useEffect(() => {
    LoadData()
    LoadItems()
  }, [])

  return (
    <>
      <div className="pb-8">
        {articleData !== undefined ? (
          <ArticleFullForm
            data={articleData}
            items={categoryData ? categoryData : []}
          />
        ) : (
          <>
            <TableLoading />
          </>
        )}
      </div>
    </>
  )
}
