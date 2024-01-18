import {
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
} from "@/components/ui/form"
import { Switch } from "@/components/ui/switch"

interface SwitchOptions {
  name: string
  placeholder?: string
  label?: string
  description?: string
}
export default function SwitchInput(props: {
  form: any
  options: SwitchOptions
}) {
  return (
    <FormField
      control={props.form.control}
      name={props.options.name}
      render={({ field }) => (
        <FormItem className="flex flex-row items-center justify-between bg-white rounded-lg border p-4">
          <div className="space-y-0.5">
            <FormLabel className="text-base">{props.options.label}</FormLabel>
            <FormDescription>{props.options.description}</FormDescription>
          </div>
          <FormControl>
            <Switch
              checked={field.value}
              onCheckedChange={field.onChange}
              aria-readonly
            />
          </FormControl>
        </FormItem>
      )}
    />
  )
}
