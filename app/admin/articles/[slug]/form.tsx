"use client"

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"

import { Form } from "@/components/ui/form"
import { toast } from "@/components/ui/use-toast"
import ArticleDescriptionInput from "@/components/BAAS/Articles/Components/DescriptionInput"
import ImageMultiUploadInput from "@/components/BAAS/Forms/Inputs/ImageMultiUpload"
import RichTextEditorInput from "@/components/BAAS/Forms/Inputs/RichTextEditor"
import ProductDetails from "@/components/BAAS/Shop/Admin/Sections/ProductDetails"
import ProductSEO from "@/components/BAAS/Shop/Admin/Sections/ProductSEO"
import Status from "@/components/BAAS/Shop/Admin/Sections/Status"
import CreateNewArticleSubmission from "@/app/API/ARTICLES"

export const ArticleFormSchema = z.object({
  Title: z.string().nonempty("Requirement for article generation"),
})

export default function ArticleManagmentPage() {
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

  return (
    <>
      <div className="w-full flex gap-2">
        <Form {...ArticleFormCXT}>
          <form
            onSubmit={ArticleFormCXT.handleSubmit(onSubmit)}
            className="w-full flex gap-2"
          >
            <div className="w-9/12 h-full">
              <div className=" gap-2 ">{/* Name */}</div>
              <RichTextEditorInput />
              <ImageMultiUploadInput form={ArticleFormCXT} options={{}} />
            </div>
            <div className="w-3/12">
              <Status form={ArticleFormCXT} />
              <ArticleDescriptionInput ProductForm={ArticleFormCXT} />

              <ProductSEO ProductForm={ArticleFormCXT} />
            </div>
          </form>
        </Form>
      </div>
    </>
  )
}
