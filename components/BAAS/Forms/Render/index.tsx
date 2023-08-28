"use client"

import ArticleAdminForm from "@/app/admin/articles/form"
import FAQFullForm from "@/app/admin/faqs/form"
import ResourceInitForm from "@/app/admin/resources/form"
import AttributesForm from "@/app/admin/shop/attributes/[ID]/form"
import AttributesInitForm from "@/app/admin/shop/attributes/form"
import ProductFullForm from "@/app/admin/shop/products/[ID]/form"
import ProductInitForm from "@/app/admin/shop/products/form"
import TeamInitForm from "@/app/admin/team/form"
import TestimonialsInitForm from "@/app/admin/testimonials/form"

function RenderSwitch(ComponentName: string, data?) {
  switch (ComponentName) {
    case "attributeInit":
      return <AttributesInitForm />
    case "attribute":
      return <AttributesForm data={data} />

    case "resourceInit":
      return <ResourceInitForm />

    case "articleInit":
      return <ArticleAdminForm />
    case "article":
      return <ArticleAdminForm />

    case "testimonialInit":
      return <TestimonialsInitForm />
    case "teamInit":
      return <TeamInitForm />
    case "productInit":
      return <ProductInitForm data={data} />
    case "product":
      return <ProductFullForm data={data} />
    default:
      return <div></div>
  }
}

export function BodyRenderer({ ComponentName, data }) {
  return RenderSwitch(ComponentName, data)
}
