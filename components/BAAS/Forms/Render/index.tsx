"use client"

import ArticleAdminForm from "@/app/asdfasfdsdfasdf/articles/form"
import FAQFullForm from "@/app/asdfasfdsdfasdf/faqs/[ID]/form"
import FAQAdminForm from "@/app/asdfasfdsdfasdf/faqs/[ID]/form"
import FAQInitForm from "@/app/asdfasfdsdfasdf/faqs/form"
import ResourceFullForm from "@/app/asdfasfdsdfasdf/resources/[ID]/form"
import ResourceInitForm from "@/app/asdfasfdsdfasdf/resources/form"
import ProductFullForm from "@/app/asdfasfdsdfasdf/shop/products/[ID]/form"
import ProductInitForm from "@/app/asdfasfdsdfasdf/shop/products/form"

function RenderSwitch(ComponentName: string, data?) {
  switch (ComponentName) {
    case "faq":
      return <FAQFullForm data={data} />
    case "faqInit":
      return <FAQInitForm />

    case "resourceInit":
      return <ResourceInitForm />
    case "resource":
      return <ResourceFullForm data={data} />

    case "articleInit":
      return <ArticleAdminForm />
    case "article":
      return <ArticleAdminForm />

    case "productInit":
      return <ProductInitForm />
    case "product":
      return <ProductFullForm data={data} />
    default:
      return <div></div>
  }
}

export function BodyRenderer({ ComponentName, data }) {
  return RenderSwitch(ComponentName, data)
}
