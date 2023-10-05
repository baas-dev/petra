"use client"

import { useEffect, useRef, useState } from "react"
import { useRouter } from "next/navigation"

import { Button } from "@/components/ui/button"
import Banner from "@/components/BAAS/Banners/Banner"
import ManageDataDialog from "@/components/BAAS/Forms/Dialog"
import TableLoading from "@/components/BAAS/Loading/TableLoading"
import { DataTable } from "@/components/BAAS/Table/DataTable"
import BACKEND from "@/app/API"

import { useAuthContext } from "../Context/AuthContext"
import { useAdminTableContext } from "../Context/TableContext"
import { columns } from "./columns"
import UserManagementForm from "./form"
import UserManagementFormInit from "./formInit"

const api = new BACKEND()

async function getData(
  authObject: { AccessToken: string; RefreshToken: string },
  refresh
) {
  return await api.GET({
    Route: "users",
    AccessToken: authObject.AccessToken,
    RefreshToken: authObject.RefreshToken,
    RefreshFunc: refresh,
  })
}

export default function UsersAdmin() {
  const [loading, setLoading] = useState(true)
  const [data, setData] = useState([])
  const { authObject, RefreshToken } = useAuthContext()

  const LoadData = async () => {
    await getData(authObject, RefreshToken)
      .then((val) => {
        if (val.code === 403) {
          RefreshToken(authObject.RefreshToken)
        }
        if (val.data && val.data.length > 0) {
          setData(val.data)
        }
      })
      .catch((err) => {
        console.log(err)
      })
    setLoading(false)
  }
  useEffect(() => {
    LoadData()
  }, [])

  return (
    <>
      <Banner Title={"user Members"} Subtitle={"Show off Your user"}>
        <ManageDataDialog
          Form={<UserManagementFormInit />}
          data={null}
          Text={"Create"}
        />
      </Banner>

      {loading ? (
        <TableLoading />
      ) : (
        <DataTable columns={columns} data={data ? data : []} />
      )}
    </>
  )
}
