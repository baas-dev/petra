"use client"

import { useRouter } from "next/navigation"

import AdminNav from "@/components/BAAS/Nav/AdminNav"

import AuthPage from "../auth/page"
import { useAuthContext } from "./Context/AuthContext"
import { AdminTableProvider } from "./Context/TableContext"

interface SettingsLayoutProps {
  children: React.ReactNode
}

export default function SettingsLayout({ children }: SettingsLayoutProps) {
  let { authObject, setAuthObject } = useAuthContext()

  return (
    <>
      {/* Media Popover */}
      <div className=" min-h-screen pt-8 md:pt-24 gap-4 bg-secondary ">
        <>
          {authObject.Exp == 0 ? <AuthPage /> : <></>}
          {authObject.AccessToken == "" ? (
            // <AuthPage />
            <></>
          ) : (
            <>
              <AdminTableProvider>
                <AdminNav />
                <div className="w-full mx-auto rounded-lg ">{children}</div>
              </AdminTableProvider>
            </>
          )}
        </>
      </div>
    </>
  )
}
