import Link from "next/link"

import { SearchInput } from "@/components/ui/searchInput"
import { Skeleton } from "@/components/ui/skeleton"
import LongCardDetail from "@/components/BAAS/Cards/LongCardDetail"
import { TeamCard } from "@/components/BAAS/Cards/TeamCard"

import Sidebar from "./sidebar"

export default function AboutPage() {
  return (
    <section className="container max-w-6xl grid items-center gap-6 pb-8 pt-6 md:py-10">
      <div className="grid grid-cols-1 align-center px-4">
        <div className="">
          <Sidebar />
          {/* <SearchInput /> */}
        </div>
        <div className="md:col-span-6 grid w-full grid-cols-1">
          <Link href="/social/test">
            <LongCardDetail title="Test Article 1" />
          </Link>
          <Link href="/social/test">
            <LongCardDetail title="Test Article 2" />
          </Link>

          <Link href="/social/test">
            <LongCardDetail title="Test Article 3" />
          </Link>

          <Link href="/social/test">
            <LongCardDetail title="Test Article 4" />
          </Link>

          <Link href="/social/test">
            <LongCardDetail title="Test Article 5" />
          </Link>

          <Link href="/social/test">
            <LongCardDetail title="Test Article 6" />
          </Link>
        </div>
      </div>
    </section>
  )
}
