"use client"

import * as React from "react"
import { CardBody } from "@material-tailwind/react"

import { Card } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { Progress } from "@/components/ui/progress"
import { Separator } from "@/components/ui/separator"

export default function MediaStorage() {
  const [progress, setProgress] = React.useState(13)

  React.useEffect(() => {
    const timer = setTimeout(() => setProgress(66), 500)
    return () => clearTimeout(timer)
  }, [])

  return (
    <Card>
      <CardBody>
        <h2>Your Storage</h2>
        <Label className="text-md font-light">sdfosdpofk</Label>
        <Separator className="my-4" />
        <div>
          <div className="flex justify-between">
            <Progress value={progress} className="w-[60%]" />

            <Label className="text-md ">13.4%</Label>
          </div>
        </div>
        <Label className="text-sm">25m of 50GB</Label>
      </CardBody>
    </Card>
  )
}
