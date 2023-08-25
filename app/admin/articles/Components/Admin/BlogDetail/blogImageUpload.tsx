import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

export function InputFile() {
  return (
    <div className="grid w-full mt-4 items-center gap-1.5">
      <Label htmlFor="picture" className="text-lg font-light">
        Picture
      </Label>
      <Input id="picture" type="file" className="bg-white" />
    </div>
  )
}
