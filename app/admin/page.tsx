"use client"

import { useEffect } from "react"
import { useRouter } from "next/navigation"

export default function AdminHome() {
  let r = useRouter()
  r.push("/admin/faqs")
}
