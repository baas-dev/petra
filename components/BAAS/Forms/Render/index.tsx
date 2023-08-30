"use client"

import ArticleAdminForm from "@/app/adminrrrrr/articles/form"
import FAQFullForm from "@/app/adminrrrrr/faqs/form"
import ResourceInitForm from "@/app/adminrrrrr/resources/form"
import AttributesForm from "@/app/adminrrrrr/shop/attributes/[ID]/form"
import AttributesInitForm from "@/app/adminrrrrr/shop/attributes/form"
import ProductFullForm from "@/app/adminrrrrr/shop/products/[ID]/form"
import ProductInitForm from "@/app/adminrrrrr/shop/products/form"
import TeamInitForm from "@/app/adminrrrrr/team/form"
import TestimonialsInitForm from "@/app/adminrrrrr/testimonials/form"

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
