"use client"

import { useEffect, useState } from "react"
import { Label } from "@radix-ui/react-label"
import jwt_decode from "jwt-decode"
import { Loader2 } from "lucide-react"
import moment from "moment"
import { useSession } from "next-auth/react"

import AdminNav from "@/components/BAAS/Nav/AdminNav"

import AuthPage from "../auth/page"
import { AdminTableProvider } from "./Context/TableContext"

interface SettingsLayoutProps {
  children: React.ReactNode
}

export default function SettingsLayout({ children }: SettingsLayoutProps) {
  const [loading, setLoading] = useState(true)
  const { data: session, status } = useSession()

  console.log(session)
  useEffect(() => {
    if (status == "loading") {
      setLoading(true)
    }
    if (status != "loading") {
      setLoading(false)
    }
  }, [status])

  return (
    <>
      {/* Media Popover */}
      <div className=" min-h-screen gap-4 bg-secondary ">
        {loading ? (
          <div className="mt-24 flex justify-center align-middle">
            <Loader2 className="mr-2 animate-spin text-lg text-accent" />
            <Label className="text-xl">Loading...</Label>
          </div>
        ) : status == "authenticated" ? (
          <AdminTableProvider>
            <div className="px-2 md:px-0 md:pt-8">
              <AdminNav />
              <div className="mx-auto w-full rounded-lg ">{children}</div>
            </div>
          </AdminTableProvider>
        ) : (
          <AuthPage />
        )}
      </div>
    </>
  )
}
