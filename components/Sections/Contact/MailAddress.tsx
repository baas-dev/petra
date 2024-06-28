"use client"

import { useState } from "react"

import { toast } from "@/components/ui/use-toast"

export default function MailAddress() {
  const [show, setShow] = useState(false)

  const links = "contactus@petralending.com"
  const copylink = () => {
    navigator.clipboard.writeText(links)

    toast({
      variant: "default",
      title: "Email Address has been copied to clipboard!",
    })
  }
  return (
    <>
      <div className="w-full">
        <h2 className="text-dark   text-lg"> Email Address</h2>
        <p className="text-body-color text-md font-light">
          <button>
            <a
              href="mailto:contactus@petralending.com"
              className="flex text-xl text-blue-600 underline hover:underline"
              onClick={() => {
                setShow(true)
                copylink()
              }}
            >
              contactus@petralending.com
            </a>
          </button>
        </p>
      </div>
    </>
  )
}
