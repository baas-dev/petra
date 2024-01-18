import {
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

interface SwitchOptions {
  name: string
  placeholder?: string
  label?: string
  description?: string
  defaultValue?: string
  value?: string
  items?: {
    value: string
    label: string
  }[]
}

export default function SelectInput(props: {
  form: any
  options: SwitchOptions
}) {
  return (
    <FormField
      control={props.form.control}
      name={props.options.name}
      render={({ field }) => (
        <FormItem className=" rounded-xl w-full   ">
          <Select
            value={props.options.value ? props.options.value : field.value}
            onValueChange={field.onChange}
            defaultValue={field.value}
          >
            <FormLabel className="">{props.options.label}</FormLabel>

            <FormControl>
              <SelectTrigger className="bg-white w-full">
                <SelectValue
                  defaultValue={props.options.defaultValue}
                  placeholder={props.options.placeholder}
                />
              </SelectTrigger>
            </FormControl>
            <SelectContent className="max-h-48 overflow-y-scroll">
              {props.options.items &&
                props.options.items.map((item, i) => (
                  <>
                    <SelectItem value={item.value}>{item.label}</SelectItem>
                  </>
                ))}
            </SelectContent>
          </Select>
          <FormMessage />
        </FormItem>
      )}
    />
  )
}
