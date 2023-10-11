import { Link } from "lucide-react"
import moment from "moment"

import { Button } from "@/components/ui/button"
import { Label } from "@/components/ui/label"
import { Separator } from "@/components/ui/separator"
import { Article } from "@/components/BAAS/Articles/Interfaces"
import BACKEND from "@/app/API"

const api = new BACKEND()
async function GetCategories() {
  let res = await api.GET({
    Route: "categories?scope=articles",
  })

  return res
}
async function GetArticles(ID: string): Promise<Article | null> {
  let res = await api
    .GET({
      Route: `articles/${ID}`,
    })
    .then((val) => {
      return val.data
    })
    .catch((err) => {
      let obj: Article
      return null
    })

  return res
}

let TimeRep = (props: { time }) => <div>{moment(props.time).calendar()}</div>

export default async function SocialDetailPage({ params }) {
  let data = await GetArticles(params.slug)
    .then((val) => val)
    .catch((err) => {})
  let categories = await GetCategories()
    .then((val) => val.data)
    .catch((err) => [])

  return (
    <>
      {data ? (
        <>
          <div className="md:pt-16 pt-4  mx-auto ">
            <div
              className="relative overflow-hidden  bg-cover bg-no-repeat"
              style={{
                backgroundPosition: "50%",
                backgroundImage: `url('${
                  data.Image ? data.Image : "/images/petra-blue.svg"
                }')`,
                height: "350px",
              }}
            >
              <div
                className="absolute bottom-0 left-0 right-0 top-0 h-full w-full overflow-hidden bg-fixed"
                style={{ backgroundColor: "rgba(0, 0, 0, 0.75)" }}
              >
                <div className="flex h-full items-center justify-center">
                  <div className="px-6 text-center text-white md:px-12">
                    <h1 className="mb-6 text-4xl font-bold">{data.Title}</h1>
                    <h3 className="mb-8 text-2xl  text-light">
                      {data.Description}
                    </h3>
                    <div className="w-full">
                      <strong className="block font-normal font-secondary">
                        Published:
                      </strong>
                      <span className="text-sm font-light">
                        <TimeRep time={data.CreatedAt} />
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col lg:flex-row lg:space-x-12  pb-8 max-w-6xl mx-auto">
            <div className="px-4 lg:px-0 mt-4 text-gray-700 text-lg leading-relaxed w-full ">
              <div
                className="bg-white p-4 rounded-xl shadow-lg w-full border ProseMirror overflow-visible h-full "
                dangerouslySetInnerHTML={{ __html: data.Content }}
              />
            </div>
            <div>
              <div className=" w-full h-min mb-8 mt-4 bg-white rounded-xl border p-4">
                <h3 className="font-semibold mb-2 ">
                  Want to know more about Petra Lending?
                </h3>
                <p className="font-light mb-2">
                  We are excited to introduce our company & team to you!
                </p>
                <Separator className="border-2 mb-2" />
                <Button className="w-full">Read Now</Button>
              </div>
              <div className=" w-full h-min bg-white rounded-xl border">
                <ul className=" flex flex-col">
                  <Label className="p-4 font-bold bg-primary/20 rounded-t-xl">
                    Categories
                  </Label>
                  {categories &&
                    categories.map((item, i) => {
                      return (
                        <Link
                          href=""
                          className="inline-flex items-center gap-x-2 py-3 px-4 text-sm font-medium bg-white border text-gray-800 -mt-px first:rounded-t-lg first:mt-0 last:rounded-b-lg dark:bg-gray-800 dark:border-gray-700 dark:text-white"
                        >
                          {item.Title}
                        </Link>
                      )
                    })}
                </ul>
              </div>
            </div>
          </div>
        </>
      ) : (
        <></>
      )}
    </>
  )
}
