import Image from "next/image"
import { zodResolver } from "@hookform/resolvers/zod"
import Cart from "lucide-react"
import { useForm } from "react-hook-form"
import { z } from "zod"

import { toast } from "@/components/ui/use-toast"
import SelectInput from "@/components/BAAS/Forms/Inputs/Select"
import { useCartContext } from "@/components/BAAS/Shop/Context/CartContext"
import { IProduct } from "@/components/BAAS/Shop/Types"
import form from "@/app/contact/form"

import ProductImages from "./ProductImages"
import AddToCart from "./addToCart"
import ProductPageForm from "./form"

async function getData(id): Promise<IProduct> {
  let data = await fetch("http://localhost:4000/products/" + id, {
    cache: "no-cache",
  })

  const res = await data.json()

  return res
}

export default async function ShopPage({ params }) {
  const data = await getData(params.slug)

  return (
    <section className="pt-12 pb-24 bg-blueGray-100 rounded-b-10xl overflow-hidden">
      <div className="container px-4 mx-auto">
        <div className="flex flex-wrap -mx-4">
          <div className="w-full px-4">
            {/* <ul className="flex flex-wrap items-center mb-16">
              <li className="mr-6">
                <a
                  className="flex items-center text-sm font-medium text-gray-400 hover:text-gray-500"
                  href="#"
                >
                  <span>Home</span>
                  <svg
                    className="ml-6"
                    width="4"
                    height="7"
                    viewBox="0 0 4 7"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M0.150291 0.898704C-0.0500975 0.692525 -0.0500975 0.359292 0.150291 0.154634C0.35068 -0.0507836 0.674443 -0.0523053 0.874831 0.154634L3.7386 3.12787C3.93899 3.33329 3.93899 3.66576 3.7386 3.8727L0.874832 6.84594C0.675191 7.05135 0.35068 7.05135 0.150292 6.84594C-0.0500972 6.63976 -0.0500972 6.30652 0.150292 6.10187L2.49888 3.49914L0.150291 0.898704Z"
                      fill="currentColor"
                    ></path>
                  </svg>
                </a>
              </li>
              <li className="mr-6">
                <a
                  className="flex items-center text-sm font-medium text-gray-400 hover:text-gray-500"
                  href="#"
                >
                  <span>Store</span>
                  <svg
                    className="ml-6"
                    width="4"
                    height="7"
                    viewBox="0 0 4 7"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M0.150291 0.898704C-0.0500975 0.692525 -0.0500975 0.359292 0.150291 0.154634C0.35068 -0.0507836 0.674443 -0.0523053 0.874831 0.154634L3.7386 3.12787C3.93899 3.33329 3.93899 3.66576 3.7386 3.8727L0.874832 6.84594C0.675191 7.05135 0.35068 7.05135 0.150292 6.84594C-0.0500972 6.63976 -0.0500972 6.30652 0.150292 6.10187L2.49888 3.49914L0.150291 0.898704Z"
                      fill="currentColor"
                    ></path>
                  </svg>
                </a>
              </li>
              <li>
                <a
                  className="text-sm font-medium text-indigo-500 hover:text-indigo-600"
                  href="#"
                >
                  Apple iPhone 12 PRO
                </a>
              </li>
            </ul> */}
          </div>
          <div className="w-full lg:w-1/2 px-4 my-16 lg:mb-0">
            <div className="flex -mx-4 flex-wrap items-center justify-between lg:justify-start lg:items-start xl:items-center">
              <ProductImages data={data} />
              <div className="w-full sm:w-auto min-w-max px-4 text-center flex sm:flex-col items-center justify-center">
                <div className="flex gap-2 mb-2">
                  <Image
                    src={data.Image}
                    height={500}
                    width={500}
                    alt=""
                    className="w-16 h-16"
                  />
                  {data.SecondaryImages &&
                    data.SecondaryImages.map((item, i) => (
                      <Image
                        src={item.Image}
                        height={500}
                        width={500}
                        alt=""
                        className="w-16 h-16"
                      />
                    ))}
                </div>
              </div>
            </div>
          </div>
          <div className="w-full lg:w-1/2 px-4 mt-4">
            <div className="max-w-md">
              <h2 className="mt-6 mb-4 text-2xl font-heading font-medium">
                {data.Name}
              </h2>
              <p className="flex items-center mb-6">
                <span className="mr-2 text-sm text-blue-500 font-medium">
                  $
                </span>
                <span className="text-3xl text-blue-500 font-medium">
                  {data.Price}
                </span>
              </p>
              <p className="text-lg text-gray-400">{data.Description}</p>
            </div>

            <div className="my-4">
              <ProductPageForm />
            </div>

            <div className="flex flex-wrap -mx-2 mb-12">
              <AddToCart data={data} />
              {/* <div className="w-full md:w-1/3 px-2">
                <a
                  className="flex w-full py-4 px-2 items-center justify-center leading-8 font-heading font-medium tracking-tighter text-xl text-center bg-white focus:ring-2 focus:ring-gray-200 focus:ring-opacity-50 hover:bg-opacity-60 rounded-xl"
                  href="#"
                >
                  <span className="mr-2">Wishlist</span>
                  <svg
                    width="23"
                    height="22"
                    viewBox="0 0 23 22"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M11.3235 20.1324L2.52488 10.8515C1.75232 10.0706 1.24237 9.06367 1.06728 7.97339C0.8922 6.88311 1.06086 5.76477 1.54936 4.7768V4.7768C1.91837 4.03089 2.45739 3.3843 3.12201 2.89033C3.78663 2.39635 4.55781 2.06911 5.37203 1.93558C6.18626 1.80205 7.0202 1.86605 7.80517 2.1223C8.59013 2.37855 9.30364 2.81972 9.88691 3.40946L11.3235 4.86204L12.7601 3.40946C13.3434 2.81972 14.0569 2.37855 14.8419 2.1223C15.6269 1.86605 16.4608 1.80205 17.275 1.93558C18.0892 2.06911 18.8604 2.39635 19.525 2.89033C20.1897 3.3843 20.7287 4.03089 21.0977 4.7768V4.7768C21.5862 5.76477 21.7549 6.88311 21.5798 7.97339C21.4047 9.06367 20.8947 10.0706 20.1222 10.8515L11.3235 20.1324Z"
                      stroke="black"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    ></path>
                  </svg>
                </a>
              </div> */}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
