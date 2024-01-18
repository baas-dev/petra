import { useState } from "react"
import { useRouter } from "next/navigation"
import { ShoppingCart } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"

import { useCartContext } from "../Context/CartContext"
import ProductCard from "../ProductCard"
import CartItem from "./CartItem"

export default function Cart() {
  const router = useRouter()
  const { CartObject, setCartObject } = useCartContext()

  const [open, setOpen] = useState(false)
  function GetSubtotal(): number {
    let subtotal = 0
    CartObject.items.forEach((item, i) => {
      subtotal = subtotal + item.Price
    })
    return subtotal
  }

  function GetTaxAmount(): number {
    let tax = 0.0825

    let sub = GetSubtotal()

    sub = sub * tax

    return sub
  }
  function GetTotal(): number {
    let res = GetSubtotal() + GetTaxAmount()
    res.toFixed(2)
    return res
  }
  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild>
        <Button className="mb-2 w-full border bg-accent">
          <ShoppingCart className="mr-4" /> View Cart ({CartObject.items.length}
          )
        </Button>
      </SheetTrigger>
      <SheetContent className="max-w-lg bg-secondary">
        <SheetHeader>
          <SheetTitle>Shopping Cart</SheetTitle>
          <SheetDescription>Your cart items are below</SheetDescription>
        </SheetHeader>
        <div className="w-full">
          <Button
            className="mx-auto mb-4 mt-2"
            onClick={() => {
              setCartObject({
                items: [],
              })
            }}
          >
            Clear Cart
          </Button>
        </div>
        <div className=" max-h-96 space-y-2 overflow-y-scroll">
          {CartObject.items.length > 0 ? (
            CartObject.items.map((item, i) => {
              return <CartItem data={item} />
            })
          ) : (
            <div className="mb-8 rounded-xl border bg-white p-4 shadow-md">
              <p>No Items Have Been Added.</p>
              <p>Go To Our Shop To Add Some Now!</p>
            </div>
          )}
        </div>
        <div>
          <div className="flex w-full justify-between">
            <Label className="text-xl font-light">Sub Total</Label>
            <Label className="text-xl font-semibold">${GetSubtotal()}</Label>
          </div>
          <div className="flex w-full justify-between">
            <Label className="text-xl font-light">Tax</Label>
            <Label className="text-xl font-semibold">
              ${GetTaxAmount().toFixed(2)}
            </Label>
          </div>
          <div className="flex w-full justify-between ">
            <Label className="text-2xl font-light">Total:</Label>
            <Label className="text-2xl font-semibold">
              ${GetTotal().toFixed(2)}
            </Label>
          </div>
        </div>
        <Button
          onClick={() => {
            router.push("/shop/checkout"), setOpen(false)
          }}
          className="w-full text-lg"
          type="submit"
        >
          Checkout
        </Button>
        <SheetFooter>
          <SheetClose asChild></SheetClose>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  )
}
