"use client"

import { toast } from "@/components/ui/use-toast"

export default function PhoneAddress() {
  const links = "+12144320443"
  const copylink = () => {
    navigator.clipboard.writeText(links)

    toast({
      variant: "default",
      title: "Phone Number has been copied to clipboard!",
    })
  }
  return (
    <>
      <div className="w-full">
        <h2 className="text-dark text-lg"> Phone Number</h2>
        <p className="text-body-color text-md font-light">
          <a
            href="tel:214-432-0443"
            className="flex text-xl text-blue-600 underline hover:underline"
            onClick={() => {
              copylink()
            }}
          >
            (+1) 214 432-0443
          </a>
        </p>
      </div>
    </>
  )
}
