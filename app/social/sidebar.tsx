"use client"

import { zodResolver } from "@hookform/resolvers/zod"
import { Bold, Facebook } from "lucide-react"
import { useForm } from "react-hook-form"
import { z } from "zod"

import { Button } from "@/components/ui/button"
import { Checkbox } from "@/components/ui/checkbox"
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { Toggle } from "@/components/ui/toggle"
import { toast } from "@/components/ui/use-toast"

function Sidebar({ items }) {
  return (
    <div className="w-full">
      <SearchComponent />

      <div className="flex w-full gap-1">
        <SortByComponent />
        <CategoryPopover items={items} />
      </div>
    </div>
  )
}

function SearchComponent() {
  return (
    <div className="mb-4 w-full">
      <Label htmlFor="searchInput" className="text-lg">
        Search
      </Label>
      <div className="flex w-full items-center space-x-2">
        <Input
          type="email"
          placeholder="Search titles, content, etc"
          className="bg-white rounded-lg"
        />
      </div>
    </div>
  )
}

const CategoryPopover = ({ items }) => {
  const FormSchema = z.object({
    items: z.array(z.string()).refine((value) => value.some((item) => item), {
      message: "You have to select at least one item.",
    }),
  })

  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      items: ["recents", "home"],
    },
  })

  function onSubmit(data: z.infer<typeof FormSchema>) {
    toast({
      title: "You submitted the following values:",
      description: (
        <pre className="mt-2 w-[340px] rounded-md bg-slate-950 p-4">
          <code className="text-white">{JSON.stringify(data, null, 2)}</code>
        </pre>
      ),
    })
  }

  return (
    <>
      <div className="w-full">
        <Label className="text-lg ">Categories :</Label>
        <Popover>
          <PopoverTrigger asChild>
            <Button variant="outline" className="w-full bg-white text-left">
              Categories
            </Button>
          </PopoverTrigger>
          <PopoverContent className="w-80">
            <Form {...form}>
              <form
                onSubmit={form.handleSubmit(onSubmit)}
                className="space-y-8"
              >
                <FormField
                  control={form.control}
                  name="items"
                  render={() => (
                    <FormItem>
                      <div className="mb-4">
                        <FormLabel className="text-base">Sidebar</FormLabel>
                        <FormDescription>
                          Select the items you want to display in the sidebar.
                        </FormDescription>
                      </div>
                      {items.map((item) => (
                        <FormField
                          key={item.id}
                          control={form.control}
                          name="items"
                          render={({ field }) => {
                            return (
                              <FormItem
                                key={item.id}
                                className="flex flex-row items-start space-x-3 space-y-0"
                              >
                                <FormControl>
                                  <Checkbox
                                    checked={field.value?.includes(item.id)}
                                    onCheckedChange={(checked) => {
                                      return checked
                                        ? field.onChange([
                                            ...field.value,
                                            item.id,
                                          ])
                                        : field.onChange(
                                            field.value?.filter(
                                              (value) => value !== item.id
                                            )
                                          )
                                    }}
                                  />
                                </FormControl>
                                <FormLabel className="font-normal">
                                  {item.label}
                                </FormLabel>
                              </FormItem>
                            )
                          }}
                        />
                      ))}
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </form>
            </Form>
          </PopoverContent>
        </Popover>
      </div>
    </>
  )
}

const SourceChoice = () => {
  return (
    <>
      <div className="w-full flex flex-wrap">
        {" "}
        <Label className="text-lg w-full -mb-4">Sources :</Label>
        <div className="w-full gap-2">
          <Toggle className="bg-white" aria-label="Toggle italic">
            <Facebook className="h-4 w-4" />
          </Toggle>
          <Toggle aria-label="Toggle italic">
            <Bold className="h-4 w-4" />
          </Toggle>
          <Toggle aria-label="Toggle italic">
            <Bold className="h-4 w-4" />
          </Toggle>
          <Toggle aria-label="Toggle italic">
            <Bold className="h-4 w-4" />
          </Toggle>
        </div>
      </div>
    </>
  )
}

function SortByComponent() {
  return (
    <>
      <div className="mb-4 w-full">
        {/* <Label htmlFor="searchInput" className="text-lg ">
          Sort By:
        </Label> */}
        <Label htmlFor="sort" className="text-lg">
          Sort By:
        </Label>
        <div className="flex w-full">
          <Select>
            <SelectTrigger className="bg-white">
              <SelectValue placeholder="Date Posted" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="light">Category</SelectItem>
              <SelectItem value="dark">Date Posted</SelectItem>
              <SelectItem value="system">Title</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>
    </>
  )
}

export default Sidebar
