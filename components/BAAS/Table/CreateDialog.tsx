import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

export function CreateDialog(props: {
  Form: JSX.Element
  title?: string
  description?: string
}) {
  let { Form } = props
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button className="bg-accent">Create New</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        {Form}
        <DialogFooter></DialogFooter>
      </DialogContent>
    </Dialog>
  )
}
