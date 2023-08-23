import { z } from "zod"

import LongCardDetail from "@/components/BAAS/Cards/LongCardDetail"
import ProductCard from "@/components/BAAS/Shop/ProductCard"
import { IProduct } from "@/components/BAAS/Shop/Types"

async function getData(): Promise<IProduct[]> {
  let data = await fetch("http://localhost:4000/products", {
    cache: "no-cache",
  })

  const res = data.json()

  return res
}

export default async function Page() {
  const data = await getData()

  return (
    <div className={`pt-24 container grid grid-cols-1 md:grid-cols-3 gap-2`}>
      {data.length > 0 ? (
        data.map((item, i) => {
          return (
            <>
              <ProductCard data={item} key={i} />
            </>
          )
        })
      ) : (
        <>
          <div></div>
          <LongCardDetail
            Title="Sorry!"
            Description="No items have been made available at this time"
          />
          <div></div>
        </>
      )}
    </div>
  )
}
