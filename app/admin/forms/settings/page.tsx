"use client"

import { useCallback, useEffect, useState } from "react"

// corrected import path

import { Button } from "@/components/ui/button"
import Banner from "@/components/BAAS/Banners/Banner"
import ManageDataDialog from "@/components/BAAS/Forms/Dialog"
import TableLoading from "@/components/BAAS/Loading/TableLoading"
import { DataTable } from "@/components/BAAS/Table/DataTable"
import BACKEND from "@/app/API"

import { useAdminTableContext } from "../../Context/TableContext"
import { columns } from "./columns"
import FormSettingsForm from "./form"

const api = new BACKEND()

async function getData() {
  return await api.GET({
    Route: "form-settings",
  })
}

export default function FAQAdmin() {
  const [loading, setLoading] = useState(true)
  const [data, setData] = useState<any[]>([])

  async function LoadData() {
    setLoading(true)
    await getData().then((val) => {
      if (val.data && val.data.length > 0) {
        let state = val.data
        setData(state) // Set the state directly
      }
    })
    setLoading(false)
  }

  useEffect(() => {
    LoadData()
  }, [])

  return (
    <>
      <Banner
        Subtitle="Get a copy of forms entered on your site"
        Title="Form Delivery Settings"
      >
        <ManageDataDialog
          Form={<FormSettingsForm />}
          data={null}
          Text={"Create"}
          Title={"Form Delivery Settings"}
          Description={"Get a copy of forms entered on your site"}
        />
      </Banner>

      {loading ? (
        <TableLoading />
      ) : (
        <DataTable
          columns={columns}
          data={data} // Use state-based data
        />
      )}
    </>
  )
}
