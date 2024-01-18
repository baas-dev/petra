import { Button } from "@/components/ui/button"
import { CardDescription, CardTitle } from "@/components/ui/card"
import { Label } from "@/components/ui/label"

export default function PreviousQuestionButton(props: {
  action: any
  isDisabled: boolean
}) {
  return (
    <div
      onClick={props.action}
      className=" mx-auto mb-4 flex w-full flex-row items-center rounded-xl border-2 bg-white p-4 text-center transition hover:animate-pulse hover:cursor-pointer md:w-1/2  "
    >
      <div className="w-full">
        <Label className="text-2xl text-primary underline ">
          Previous Question
        </Label>
      </div>
    </div>
  )
}
