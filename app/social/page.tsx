import Link from "next/link"

import { SearchInput } from "@/components/ui/searchInput"
import { Separator } from "@/components/ui/separator"
import { Skeleton } from "@/components/ui/skeleton"
import LongCardDetail from "@/components/BAAS/Cards/LongCardDetail"
import { TeamCard } from "@/components/BAAS/Cards/TeamCard"

import Sidebar from "./sidebar"

async function getData() {
  let response

  try {
    response = await fetch("http://localhost:4000/blog", {
      cache: "no-cache",
    })
  } catch (error) {
    console.log("There was an error", error)
  }

  // Uses the 'optional chaining' operator
  if (response?.ok) {
    return response.json()
  } else {
    console.log(`HTTP Response Code: ${response?.status}`)
    return []
  }
}

export default async function BlogPage() {
  let data = await getData()

  return (
    <section className="container max-w-6xl grid items-center gap-6 pb-8 pt-6 ">
      <div className="grid grid-cols-1 align-center px-4">
        <div className="">
          <Sidebar />
          {/* <SearchInput /> */}
          <Separator className="mt-4" />
        </div>
        <div className="md:col-span-6 grid w-full grid-cols-1">
          {data.length ? (
            <></>
          ) : (
            <p className="mx-auto mt-8">Could not load any results.</p>
          )}
          {data.map((item, i) => (
            <>
              <Link href="/social/test">
                <LongCardDetail Title={item.Title} />
              </Link>
            </>
          ))}
        </div>
      </div>
    </section>
  )
}
