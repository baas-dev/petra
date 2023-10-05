import { Label } from "@radix-ui/react-menubar"

export default function QuestionNext({ action }) {
  return (
    <div
      onClick={action}
      className=" mb-4 flex w-full flex-row items-center border-2 bg-green-200 mx-auto hover:scale-110 transform transition md:w-1/2 text-center hover:cursor-pointer rounded-xl  p-4  "
    >
      <div className="w-full">
        <Label className="text-2xl text-dark underline ">Next Question</Label>
      </div>
    </div>
  )
}
