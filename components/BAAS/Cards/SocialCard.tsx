import Image from "next/image"
import { Label } from "@radix-ui/react-label"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@radix-ui/react-select"

import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"

export function SocialCard() {
  return (
    <Card className="text-center pt-4">
      <div className="h-24 w-24 rounded mx-auto"></div>

      <CardHeader>
        <CardTitle>Create project</CardTitle>
        <CardDescription>Deploy your new project in one-click.</CardDescription>
      </CardHeader>
      {/* <CardContent> */}
      {/* <div>
          <p>Create Project</p>
        </div> */}
      {/* </CardContent> */}
      {/* <CardFooter className="flex justify-between">
        <Button variant="ghost">Cancel</Button>
        <Button>Deploy</Button>
      </CardFooter> */}
    </Card>
  )
}
