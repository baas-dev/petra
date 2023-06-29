"use client"

import { CoreValueCard } from "@/components/BAAS/Cards/CoreValueCard"
import { SocialCard } from "@/components/BAAS/Cards/SocialCard"

export default function CoreValues() {
  return (
    <div className="align-center container mb-28 w-full">
      <div className="mx-auto grid w-full grid-cols-3 gap-2">
        <SocialCard />
      </div>
    </div>
  )
}
