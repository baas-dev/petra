import moment from "moment"

import { Article } from "@/components/BAAS/Articles/Interfaces"
import BACKEND from "@/app/API"

const api = new BACKEND()

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

  return (
    <>
      {data ? (
        <>
          <div className="md:pt-24 pt-4 max-w-6xl mx-auto ">
            <div
              className="relative overflow-hidden rounded-xl bg-cover bg-no-repeat"
              // style={{
              //   backgroundPosition: "50%",
              //   backgroundImage: `url('${data.Image ? data.Image : '/images/petra-blue.svg'}')`,
              //   height: "350px",
              // }}
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
                className="bg-white p-4 rounded-xl shadow-sm w-full ProseMirror overflow-visible h-full "
                dangerouslySetInnerHTML={{ __html: data.Content }}
              />
            </div>
          </div>
        </>
      ) : (
        <></>
      )}
    </>
  )
}
