"use client"

import { useEffect, useRef, useState } from "react"
import { useRouter } from "next/navigation"

import { Button } from "@/components/ui/button"
import Banner from "@/components/BAAS/Banners/Banner"
import ManageDataDialog from "@/components/BAAS/Forms/Dialog"
import TableLoading from "@/components/BAAS/Loading/TableLoading"
import { DataTable } from "@/components/BAAS/Table/DataTable"
import BACKEND from "@/app/api"

import { useAdminTableContext } from "../Context/TableContext"
import { columns } from "./columns"
import TeamForm from "./form"

const api = new BACKEND()

async function getData() {
  return await api.GET({
    Route: "team",
  })
}

export default function FAQAdmin() {
  const r = useRouter()

  const [loading, setLoading] = useState(true)

  const { adminTableCXT, setAdminTableCXT } = useAdminTableContext()
  const dataRef = useRef()
  function setDataRef(data) {
    dataRef.current = data
  }
  const LoadData = async () => {
    await getData().then((val) => {
      if (val.data && val.data.length > 0) {
        setDataRef([...val.data])
      }
    })
    setLoading(false)
  }
  useEffect(() => {
    LoadData()
  }, [])

  return (
    <>
      <Banner Title={"Team Members"} Subtitle={"Show off Your Team"}>
        <ManageDataDialog
          Form={<TeamForm />}
          data={null}
          Text={"Create"}
          Title={"Team Member Form"}
          Description={"Managing individual biographies"}
        />
      </Banner>

      {loading ? (
        <TableLoading />
      ) : (
        <DataTable
          columns={columns}
          data={dataRef.current ? dataRef.current : []}
          scope={{
            TableName: "TeamMembers",
          }}
          filters={[
            {
              label: "Name",
              value: "Name",
            },
            {
              label: "Title",
              value: "Title",
            },
          ]}
        />
      )}
    </>
  )
}
