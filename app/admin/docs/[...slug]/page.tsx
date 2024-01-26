import { FC } from "react"
import { Metadata } from "next"
import { notFound } from "next/navigation"
import { Doc, allDocs } from "@/content"
import { getMDXComponent } from "next-contentlayer/hooks"

import { Mdx } from "@/components/Markdown"

interface PageProps {
  params: {
    slug: string[]
  }
}

async function getPageFromParams(params: PageProps["params"]) {
  const slug = params?.slug?.join("/")
  const page = allDocs.find((page) => page.slugAsParams === slug)

  if (!page) {
    null
  }

  return page
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const page = await getPageFromParams(params)

  if (!page) {
    return {}
  }

  return {
    title: page.title,
    description: page.description,
  }
}

export async function generateStaticParams(): Promise<PageProps["params"][]> {
  return allDocs.map((page) => ({
    slug: page.slugAsParams.split("/"),
  }))
}

// interface PageProps {
//   params: {
//     slug: string
//   }
// }

// async function getDocFromParam(slug: string) {
//   const doc = allDocs.find((doc) => doc.slugAsParams === slug)

//   if (!doc) {
//     return notFound()
//   }
//   return doc
// }

const page = async ({ params }: PageProps) => {
  const doc = await getPageFromParams(params)

  if (!doc) {
    notFound()
  }

  const Content = getMDXComponent(doc.body.code)

  return (
    <div className="w-full p-8 bg-white shadow-lg rounded-xl ">
      <Mdx code={doc.body.code} />{" "}
    </div>
  )
}

export default page
