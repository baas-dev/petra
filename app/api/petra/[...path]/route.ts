import { NextRequest, NextResponse } from "next/server"

import {
  getPetraFAQs,
  getPetraResources,
  getPetraTeam,
  submitPetraForm,
} from "@/lib/petra-public-api"

export const dynamic = "force-dynamic"

export async function GET(
  _request: NextRequest,
  { params }: { params: { path: string[] } }
) {
  try {
    switch (params.path.join("/")) {
      case "team":
        return NextResponse.json(await getPetraTeam())
      case "resources":
        return NextResponse.json(await getPetraResources())
      case "faqs":
        return NextResponse.json(await getPetraFAQs())
      default:
        return NextResponse.json({ error: "Not found" }, { status: 404 })
    }
  } catch (error) {
    return NextResponse.json(
      { error: error instanceof Error ? error.message : "Request failed" },
      { status: 502 }
    )
  }
}

export async function POST(
  request: NextRequest,
  { params }: { params: { path: string[] } }
) {
  const route = params.path.join("/")
  const form =
    route === "forms/contact"
      ? "contact"
      : route === "forms/prequalification"
      ? "prequalification"
      : null
  if (!form) return NextResponse.json({ error: "Not found" }, { status: 404 })

  try {
    const values = await request.json()
    return NextResponse.json(await submitPetraForm(form, values))
  } catch (error) {
    return NextResponse.json(
      { error: error instanceof Error ? error.message : "Submission failed" },
      { status: 502 }
    )
  }
}
