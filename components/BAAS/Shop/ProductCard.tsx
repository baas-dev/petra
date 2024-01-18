"use client"

import Image from "next/image"
import { useRouter } from "next/navigation"

import { Button } from "@/components/ui/button"
import { toast } from "@/components/ui/use-toast"

import { useCartContext } from "./Context/CartContext"
import { IProduct } from "./Types"
import Cart from "./components/Cart"

export default function ProductCard(props: { data: IProduct }) {
  const { CartObject, setCartObject } = useCartContext()
  const r = useRouter()

  function handleAddToCart() {
    let cart = CartObject
    cart.items.push(props.data)
    setCartObject({ ...cart })
    toast({
      className: "bg-primary text-white",
      title: "You added an item to your Cart!",
      description: (
        <>
          <div className="w-full">
            <h2>{props.data.Name}</h2>
            <p>${props.data.Price}</p>
            <div className="w-full">
              <Cart />
            </div>
          </div>
        </>
      ),
    })
  }
  return (
    <div
      className="mx-auto w-full"
      onClick={() => r.push("/shop/" + props.data.ID)}
    >
      <div className="max-w-sm rounded-lg bg-white shadow-md dark:border-gray-700 dark:bg-gray-800 ">
        <div className="h-80 w-full rounded-t-lg bg-gray-400">
          <Image
            src={props.data.Image}
            width={1000}
            height={1920}
            alt=""
            className="h-full w-full hover:cursor-pointer"
          />
          {/* <img
              className="rounded-t-lg p-8 h-64 w-full bg-gray"
              // src="https://flowbite.com/docs/images/products/product-1.png"
              alt="product image"
            /> */}
        </div>
        <div className="h-32 px-5 pb-5">
          <a href="#">
            <h3 className="pt-2 text-xl font-semibold tracking-tight text-gray-900 dark:text-white">
              {props.data.Name}
            </h3>
          </a>
          <div>
            <p>{props.data.Description ? props.data.Description : ""}</p>
          </div>
          <div className="bottom-0 flex items-center justify-between">
            <span className="text-3xl font-bold text-gray-900 dark:text-white">
              ${props.data.Price}
            </span>
            <Button onClick={handleAddToCart}>Add To Cart</Button>
          </div>
        </div>
      </div>
    </div>
  )
}
