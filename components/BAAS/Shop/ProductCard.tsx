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
      <div className="bg-white shadow-md rounded-lg max-w-sm dark:bg-gray-800 dark:border-gray-700 ">
        <div className="bg-gray-400 w-full h-80 rounded-t-lg">
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
        <div className="px-5 pb-5 h-32">
          <a href="#">
            <h3 className="text-gray-900 font-semibold text-xl tracking-tight pt-2 dark:text-white">
              {props.data.Name}
            </h3>
          </a>
          <div>
            <p>{props.data.Description ? props.data.Description : ""}</p>
          </div>
          <div className="flex items-center justify-between bottom-0">
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
