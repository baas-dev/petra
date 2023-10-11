"use client"

import { useEffect, useState } from "react"
import Link from "next/link"
import { useSearchParams } from "next/navigation"

import { Button } from "@/components/ui/button"
import { Label } from "@/components/ui/label"
import { Separator } from "@/components/ui/separator"
import Banner from "@/components/BAAS/Banners/BannerSite"
import LongCardDetail from "@/components/BAAS/Cards/LongCardDetail"
import Pagination from "@/components/BAAS/Table/Pagination"

import BACKEND from "../API"
import Sidebar from "./sidebar"

const api = new BACKEND()

export default function BlogPage() {
  const [categories, setCategories]: any[] = useState([])

  const [articles, setArticles] = useState<{
    Results: any[]
    Meta: {
      Limit: number
      CurrentPage: 3
      TotalHits: number
      TotalPages: number
    }
  }>()

  let searchParams = useSearchParams()
  function GetItems(items) {
    let res: any[] = []
    items.forEach((item, i) => {
      res.push({
        label: item.Title,
        value: item.ID,
      })
      return
    })
    return res
  }

  async function GetCategories() {
    let res = await api.GET({
      Route: "categories?scope=articles",
    })

    setCategories(res.data)
  }

  async function GetArticles(sort: string | null, categories) {
    let sortParam = searchParams.get("sort")
    let queryParams = searchParams.get("query")
    let categoryParams = searchParams.get("categories")
    let pageParams = searchParams.get("page")

    let sortSplit: string[] = []
    let catSplit: string[] = []

    let SearchOBJ: {
      direction: string | null
      orderBy: string | null
      query: string | null
      categories: string | null
      page: string | null
    } = {
      direction: null,
      orderBy: null,
      query: null,
      categories: null,
      page: null,
    }

    if (sortParam) {
      sortSplit = sortParam.split("+")
      SearchOBJ.orderBy = sortSplit[0]
      SearchOBJ.direction = sortSplit[1]
    }

    if (queryParams) {
      SearchOBJ.query = queryParams[0]
    }
    if (categories) {
      SearchOBJ.categories = categoryParams
    }

    if (pageParams) {
      SearchOBJ.page = pageParams
    }
    // new params for actual search
    const params = new URLSearchParams()

    if (SearchOBJ.orderBy) {
      params.set("orderBy", SearchOBJ.orderBy)
    }
    if (SearchOBJ.direction) {
      params.set("direction", SearchOBJ.direction)
    }

    if (SearchOBJ.query) {
      params.set("query", SearchOBJ.query)
    }

    if (SearchOBJ.page) {
      params.set("page", SearchOBJ.page)
    }
    params.set("limit", "5")

    if (SearchOBJ.categories) {
      catSplit = SearchOBJ.categories.split("+")

      console.log(catSplit)

      let final = ""

      catSplit.forEach((item, i) => {
        if (i == 0) {
          final += item
        }

        if (i != 0) {
          final += "," + item
        }
      })
      params.set("categories", final)
    }

    let res = await api.GET({
      Route: "search/articles?" + params.toString(),
    })

    setArticles(res.data)
  }

  useEffect(() => {
    GetCategories()
    GetArticles("", searchParams.get("categories"))
  }, [searchParams])

  console.log(articles?.Meta)
  return (
    <div className="min-h-screen pt-4 w-full md:pt-24  ">
      <Banner
        Title={"Article Posts"}
        Subtitle={"News, Information, & More from the Petra Team"}
      >
        <></>
      </Banner>

      <div className="container">
        <Sidebar
          loadedParams={{
            categories: searchParams.get("categories")
              ? searchParams.get("categories")
              : null,
            query: searchParams.get("query") ? searchParams.get("query") : null,
            sort: searchParams.get("sort") ? searchParams.get("sort") : null,
          }}
          items={GetItems(categories ? categories : [])}
        />
        <Separator className="my-4" />
      </div>
      <div className="grid grid-cols-4 align-center gap-2 container">
        <div className=" grid w-full col-span-3 mb-4  ">
          {articles?.Results && articles.Results.length === 0 ? (
            <p className="mx-auto mt-8">Could not load any results.</p>
          ) : (
            <>
              {articles?.Results.map((item, i) => (
                <Link href={`/articles/${item.ID}`}>
                  <LongCardDetail
                    Key={i}
                    MainImage={item.Image}
                    Title={item.Title}
                    Description={item.Description}
                    Category={{
                      Title: item.Category.Title,
                    }}
                    CreatedAt={item.PublishedAt}
                    UpdatedAt={item.UpdatedAt}
                  />
                </Link>
              ))}
            </>
          )}
        </div>
        <div className="">
          <div className=" w-full h-min mb-8 bg-white rounded-xl border p-4">
            <h3 className="font-semibold mb-2 ">
              Want to know more about Petra Lending?
            </h3>
            <p className="font-light mb-2">
              We are excited to introduce our company & team to you!
            </p>
            <Separator className="border-2 mb-2" />
            <Button className="w-full">Read Now</Button>
          </div>
          <div className=" w-full h-min bg-white rounded-xl border">
            <ul className=" flex flex-col">
              <Label className="p-4 font-bold bg-primary/20 rounded-t-xl">
                Categories
              </Label>
              {categories.map((item, i) => {
                return (
                  <Link
                    href={`/articles?categories=${item.ID}`}
                    className="inline-flex items-center gap-x-2 py-3 px-4 text-sm font-medium bg-white border text-gray-800 -mt-px first:rounded-t-lg first:mt-0 last:rounded-b-lg dark:bg-gray-800 dark:border-gray-700 dark:text-white"
                  >
                    {item.Title}
                  </Link>
                )
              })}
            </ul>
          </div>
        </div>
      </div>

      <Separator className="my-4" />
      <Pagination
        TotalHits={articles?.Meta.TotalHits ? articles.Meta.TotalHits : 0}
        TotalPages={articles?.Meta.TotalPages ? articles.Meta.TotalPages : 0}
        CurrentPage={articles?.Meta.CurrentPage ? articles.Meta.CurrentPage : 0}
      />
    </div>
  )
}
