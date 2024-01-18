import { z } from "zod"

import LongCardDetail from "@/components/BAAS/Cards/LongCardDetail"
import ProductCard from "@/components/BAAS/Shop/ProductCard"
import { IProduct } from "@/components/BAAS/Shop/Types"

import BACKEND from "../API"
import Sidebar from "./SideBar"
import HeaderBar from "./headerBar"

const api = new BACKEND()

let getData = async () => {
  return await api.GET({
    Route: "/products",
  })
}

export default async function Page() {
  const data = await getData().then((val) => val.data)

  return (
    <>
      <div className="pt-24 pb-8 container">
        <HeaderBar />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-5 w-full container">
        <div className="w-full">
          <Sidebar />
        </div>
        <div
          className={`w-full grid grid-cols-1 md:grid-cols-3 col-span-4 gap-2`}
        >
          {data && data.length > 0 ? (
            data.map((item, i) => {
              return (
                <>
                  <div className="w-full" key={i}>
                    <ProductCard data={item} />
                  </div>
                </>
              )
            })
          ) : (
            <div className="w-full col-span-4">
              {/* <LongCardDetail
                Title="Sorry!"
                Description="No items have been made available at this time"
              /> */}
            </div>
          )}
        </div>
      </div>
    </>
  )
}
