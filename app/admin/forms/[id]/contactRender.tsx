import { CardContent } from "@mui/material"
import moment from "moment"

import {
  Card,
  CardDescription,
  CardFooter,
  CardTitle,
} from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { Separator } from "@/components/ui/separator"

interface DataReceived {
  name: string
  email: string
  message: string
}

export default function ContactRender(props: {
  Data: { SubmissionData: string; CreatedAt: string }
}) {
  let data: DataReceived = JSON.parse(props.Data.SubmissionData)
  console.log(data.email)
  return (
    <>
      <Card>
        <CardContent>
          <CardTitle>{data.name}</CardTitle>
          <CardDescription>{data.email}</CardDescription>
          <Separator />
          <div className="mt-4 p-8 italic">{data.message}</div>
        </CardContent>
        <CardFooter>{moment(props.Data.CreatedAt).calendar()}</CardFooter>
      </Card>
    </>
  )
}
