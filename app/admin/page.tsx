"use client"

import { usePathname, useRouter } from "next/navigation"

export default function DashboardHome() {
  const r = useRouter()
  r.push("/admin/faqs")

  return (
    <>
      <div>Hello</div>
    </>
  )
}
