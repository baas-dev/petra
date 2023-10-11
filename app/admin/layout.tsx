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
      <div className=" min-h-screen pt-8 gap-4 bg-secondary ">
        {loading ? (
          <div className="flex mt-24 align-middle justify-center">
            <Loader2 className="animate-spin text-lg text-accent mr-2" />
            <Label className="text-xl">Loading...</Label>
          </div>
        ) : status == "authenticated" ? (
          <AdminTableProvider>
            <div className="md:pt-20 md:px-0 px-2">
              <AdminNav />
              <div className="w-full mx-auto rounded-lg ">{children}</div>
            </div>
          </AdminTableProvider>
        ) : (
          <AuthPage />
        )}
      </div>
    </>
  )
}
