import { FC } from "react"
import { notFound } from "next/navigation"
import { allDocs } from "contentlayer/generated"

import { Mdx } from "@/components/Markdown"

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
  return (
    <div>
      <Mdx code={doc.body.code} />{" "}
    </div>
  )
}

export default page
