import { useRouter } from "next/navigation"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"

import { Button } from "@/components/ui/button"
import {
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"
import { Form } from "@/components/ui/form"
import { toast } from "@/components/ui/use-toast"
import TextInput from "@/components/BAAS/Forms/Inputs/Text"
import CreateNewArticleSubmission from "@/app/API/ARTICLES"

export const ArticleFormSchema = z.object({
  Title: z.string().nonempty("Requirement for article generation"),
})

export default function ArticleAdminForm() {
  const r = useRouter()

  const ArticleFormCXT = useForm<z.infer<typeof ArticleFormSchema>>({
    resolver: zodResolver(ArticleFormSchema),
    defaultValues: {},
  })

  async function onSubmit(data: z.infer<typeof ArticleFormSchema>) {
    const result = ArticleFormSchema.safeParse(data)

    if (!result.success) {
      toast({
        title: "Errors Detected:",
        description: <p>Please fix errors!</p>,
      })
    }

    if (result.success) {
      let id = await CreateNewArticleSubmission(data)

      if (id != undefined) {
        toast({
          title: "You submitted the following values:",
          description: <p>{id}</p>,
        })
        let addr = `/admin/articles/${id}`
        r.push(addr)
      }

      if (id === undefined) {
        toast({
          variant: "destructive",
          title: "Could not properly create your article",
          description: <p>{id}</p>,
        })
      }
    }
  }
  // ID: string
  // Question: string
  // Answer: string
  // Published: boolean
  return (
    <>
      <DialogHeader>
        <DialogTitle>Create New Article</DialogTitle>
        <DialogDescription>
          Enter the title, and create a new draft article
        </DialogDescription>
      </DialogHeader>
      <Form {...ArticleFormCXT}>
        <form
          onSubmit={ArticleFormCXT.handleSubmit(onSubmit)}
          className="w-full space-y-6"
        >
          <TextInput
            form={ArticleFormCXT}
            options={{
              name: "Title",
              label: "Title",
            }}
          />

          <Button type="submit">Save changes</Button>
        </form>
      </Form>
    </>
  )
}
