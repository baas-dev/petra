import BACKEND from "@/app/API"

import ArticleFullForm from "./form"

const api = new BACKEND()

const GetData = async (route: string) => {
  let val = await api.GET({
    Route: route,
  })

  return val
}

export default async function ArticlesEditPage({ params }) {
  let res = await GetData(`articles/${params.ID}`)
    .then((val) => val.data)
    .catch((err) => [])

  let items = await GetData(`categories?scope=articles`)
    .then((val) => val.data)
    .catch((err) => [])

  function GetItems(items) {
    let res: any[] = []
    items.forEach((item, i) => {
      res.push({
        label: item.Title,
        value: item.ID,
      })
      return
    })

    return res
  }
  return (
    <>
      <section>
        <ArticleFullForm
          data={res ? res : []}
          items={GetItems(items ? items : [])}
        />
      </section>
    </>
  )
}
