import { FC } from "react"
import { notFound } from "next/navigation"
import { allDocs, Doc} from "@/content"

import { Mdx } from "@/components/Markdown"
import { getMDXComponent } from "next-contentlayer/hooks";

interface PageProps {
  params: {
    slug: string
  }
}



async function getDocFromParam(slug: string) {
  const doc = allDocs.find((doc) => doc.slugAsParams === slug)

  if (!doc) {
    return notFound()
  }
  return doc
}

const page = async ({ params }: PageProps) => {
  const doc = await getDocFromParam(params.slug)
  const Content = getMDXComponent(doc.body.code);

  return (
    <div className="w-full p-8 bg-white shadow-lg rounded-xl ">
      <Mdx code={doc.body.code} />{" "}
    
    </div>
  )
}

export default page
