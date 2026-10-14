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
    const values: unknown = await request.json()
    if (!values || typeof values !== "object" || Array.isArray(values)) {
      return NextResponse.json(
        { error: "Submission values must be an object" },
        { status: 400 }
      )
    }
    return NextResponse.json(
      await submitPetraForm(form, values as Record<string, unknown>)
    )
  } catch (error) {
    return NextResponse.json(
      { error: error instanceof Error ? error.message : "Submission failed" },
      { status: 502 }
    )
  }
}
