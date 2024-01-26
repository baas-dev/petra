"use client"

import ResourceInitForm from "@/app/admin/resources/form"
import TeamInitForm from "@/app/admin/team/form"
import TestimonialsInitForm from "@/app/admin/testimonials/form"

function RenderSwitch(ComponentName: string, data?) {
  switch (ComponentName) {
    case "resourceInit":
      return <ResourceInitForm />

    case "testimonialInit":
      return <TestimonialsInitForm />
    case "teamInit":
      return <TeamInitForm />
    default:
      return <div></div>
  }
}

export function BodyRenderer({ ComponentName, data }) {
  return RenderSwitch(ComponentName, data)
}
