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
    <Card className="border-0 my-4 " style={{ background: "none" }}>
      <CardHeader className="-mb-4">
        {icon}
        <CardTitle className="text-xl font-semibold text-center">
          {title}
        </CardTitle>
      </CardHeader>
      {/* <CardContent>
            <div>
              <p>Create Project</p>
            </div>
          </CardContent> */}
      <CardContent>
        <CardDescription className="text-center max-w-sm mx-auto">
          {subtext}
        </CardDescription>
      </CardContent>
    </Card>
  )
}
