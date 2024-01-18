import { Label } from "@radix-ui/react-menubar"

export default function QuestionNext({ action }) {
  return (
    <div
      onClick={action}
      className=" mx-auto flex w-full flex-row items-center rounded-xl border-2 bg-green-200 p-4 text-center transition hover:animate-pulse hover:cursor-pointer md:w-1/2  "
    >
      <div className="w-full">
        <Label className="text-dark text-2xl underline ">Next Question</Label>
      </div>
    </div>
  )
}
