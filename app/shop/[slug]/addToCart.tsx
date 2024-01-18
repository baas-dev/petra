"use client"

import { Button } from "@/components/ui/button"
import { toast } from "@/components/ui/use-toast"
import { useCartContext } from "@/components/BAAS/Shop/Context/CartContext"
import Cart from "@/components/BAAS/Shop/components/Cart"

export default function AddToCart({ data }) {
  const { CartObject, setCartObject } = useCartContext()
  function handleAddToCart() {
    let cart = CartObject
    cart.items.push(data)
    setCartObject({ ...cart })
    toast({
      className: "bg-primary text-white",
      title: "You added an item to your Cart!",
      description: (
        <>
          <div className="w-full">
            <h2>{data.Name}</h2>
            <p>${data.Price}</p>
            <div className="w-full">
              <Cart />
            </div>
          </div>
        </>
      ),
    })
  }
  return <Button onClick={handleAddToCart}>Add To Cart</Button>
}
