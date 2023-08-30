"use client"

import { useRouter } from "next/navigation"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"

import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Form } from "@/components/ui/form"
import { toast } from "@/components/ui/use-toast"
import ArticleDescriptionInput from "@/components/BAAS/Articles/Components/DescriptionInput"
import { Article } from "@/components/BAAS/Articles/Interfaces"
import { SubmitForm } from "@/components/BAAS/Forms"
import ImageMultiUploadInput from "@/components/BAAS/Forms/Inputs/ImageMultiUpload"
import ImageSingleUpload from "@/components/BAAS/Forms/Inputs/ImageSingleUpload"
import RichTextEditor from "@/components/BAAS/RichTextEditor"
// import RichTextEditorInput from "@/components/BAAS/Forms/Inputs/RichTextEditor"
import ProductDetails from "@/components/BAAS/Shop/Admin/Sections/ProductDetails"
import SEOInformation from "@/components/BAAS/Shop/Admin/Sections/ProductSEO"
import Status from "@/components/BAAS/Shop/Admin/Sections/Status"
import CreateNewArticleSubmission from "@/app/API/ARTICLES"

export const ArticleFormSchema = z.object({
  ID: z.string(),
  Title: z.string().nonempty("Requirement for article generation"),
  Description: z.string(),
  Visible: z.boolean(),
  Content: z.string(),
})

export default function ArticleManagmentPage(props: {
  data: any
  items: { Title; Description }[]
}) {
  const r = useRouter()
  console.log(props.data)

  const ArticleFormCXT = useForm<z.infer<typeof ArticleFormSchema>>({
    resolver: zodResolver(ArticleFormSchema),
    defaultValues: {
      ID: props.data?.ID ? props.data.ID : "",
      Title: props.data?.Title ? props.data.Title : "",
      Description: props.data?.Description ? props.data.Description : "",
      Visible: props.data?.Visible ? props.data.Visible : false,
      Content: props.data?.Content ? props.data.Content : false,
    },
  })

  async function onSubmit(data: z.infer<typeof ArticleFormSchema>) {
    console.log(ArticleFormCXT.getValues())
    await SubmitForm({
      APIRoute:
        ArticleFormCXT.getValues("ID") === ""
          ? "articles"
          : `articles/${ArticleFormCXT.getValues("ID")}`,
      FormData: data,
      FormSchema: ArticleFormSchema,
      Router: r,
      ClientPath: "/admin/articles",
      OnSuccess: {
        Message: "Your Article Has Been" + props.data ? "UPDATED" : "CREATED",
        GoToRecord: false,
      },
      OnFailure: {
        Message: "Unable to Create This Right Now",
      },
      SubmitType: props.data ? "UPDATE" : "CREATE",
    })
  }

  return (
    <>
      <div className="w-full flex gap-2">
        <Form {...ArticleFormCXT}>
          <form
            onSubmit={ArticleFormCXT.handleSubmit(onSubmit)}
            className="w-full flex flex-col gap-2"
          >
            <div className="w-full h-full">
              <div className=" gap-2 ">{/* Name */}</div>
              <div className="flex w-full gap-2">
                <Card className="w-1/3">
                  <ImageSingleUpload form={ArticleFormCXT} options={{}} />
                </Card>
                <div className="w-2/3">
                  <Status form={ArticleFormCXT} />
                  <SEOInformation form={ArticleFormCXT} items={props.items} />
                </div>
              </div>
              <div className="mt-4">
                <RichTextEditor
                  form={ArticleFormCXT}
                  options={{
                    name: "Content",
                  }}
                />
              </div>
              {/* <RichTextEditorInput form={ArticleFormCXT} /> */}
            </div>
            <Button type="submit">
              {props.data ? "UPDATE" : "CREATE"} changes
            </Button>
          </form>
        </Form>
      </div>
    </>
  )
}
