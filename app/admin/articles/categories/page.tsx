import Banner from "@/components/BAAS/Banners/Banner"
import { DataTable } from "@/components/BAAS/Table/DataTable"
import TableActions from "@/components/BAAS/Table/TableActions"
import { GetAllArticlesSubmissions } from "@/app/API/ARTICLES"

import { columns } from "./columns"

const GetData = async () => {
  let val = await GetAllArticlesSubmissions()

  return val
}

export default async function AdminResourcePage() {
  let data = await GetData()
  return (
    <>
      <div className="max-w-4xl mx-auto">
        <Banner
          Title={"Categorize Content For Your Users"}
          Subtitle={"Article Category Management"}
        />
        <TableActions apiPath="/articles" formName="articleInit" />

        <DataTable
          columns={columns}
          data={data ? data : []}
          routePath="articles"
        />
      </div>
    </>
  )
}
