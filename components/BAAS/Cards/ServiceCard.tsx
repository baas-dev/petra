import Image from "next/image"
import { LucideIcon } from "lucide-react"

import { Button } from "@/components/ui/button"
import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

export default function ContactCard(props: {
  icon: JSX.Element
  title: string
  actionText: string
  description?: string
}) {
  let { title, actionText, icon, description } = props
  return (
    <Card className="mb-1">
      <CardHeader className="-mb-4 text-center">
        <div className="mx-auto">{icon}</div>
        <CardTitle className="text-md md:text-lg  font-light text-center">
          {title}
        </CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardHeader>
      {/* <CardContent>
            <div>
              <p>Create Project</p>
            </div>
          </CardContent> */}
      <CardFooter className="flex w-full mx-auto text-center">
        <Button variant={"outline"} className="mx-auto">
          {actionText}
        </Button>
        {/* <Button>Deploy</Button> */}
      </CardFooter>
    </Card>
  )
}
