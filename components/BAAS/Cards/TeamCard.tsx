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

export function TeamCard() {
  return (
    <Card className="w-64 border-none">
      <div className="mx-auto h-48 w-full rounded bg-gray-500"></div>

      <CardHeader className="px-0">
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
