import { Label } from "@/components/ui/label"

export default function QuestionHeader(props: { title: string; text: string }) {
  return (
    <div className=" mb-4 flex w-full flex-row items-center rounded-xl bg-white p-4 text-left  ">
      <div className="w-full">
        <Label className="text-md text-primary underline ">{props.title}</Label>
        <br />
        <Label className="text-xl font-light">{props.text}</Label>
      </div>
    </div>
  )
}
