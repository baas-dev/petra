"use client"

import { useRouter } from "next/navigation"

export default function AdminHome() {
  let r = useRouter()
  r.push("/admin/docs/resources")
}
