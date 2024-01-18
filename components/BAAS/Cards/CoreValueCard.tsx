import Image from "next/image"
import { LucideIcon } from "lucide-react"

import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

export default function CoreValueCard(props: {
  title: string
  subtext: string
  icon?: JSX.Element
}) {
  let { title, subtext, icon } = props
  return (
    <Card className="my-4 border-0 " style={{ background: "none" }}>
      <CardHeader className="-mb-4">
        {icon}
        <CardTitle className="text-center text-xl font-semibold">
          {title}
        </CardTitle>
      </CardHeader>
      {/* <CardContent>
            <div>
              <p>Create Project</p>
            </div>
          </CardContent> */}
      <CardContent>
        <CardDescription className="mx-auto max-w-sm text-center">
          {subtext}
        </CardDescription>
      </CardContent>
    </Card>
  )
}
