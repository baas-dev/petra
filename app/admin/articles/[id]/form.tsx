"use client"

import { useRouter } from "next/navigation"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"

import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Form } from "@/components/ui/form"
import { SubmitForm } from "@/components/BAAS/Forms"
import ImageSingleUpload from "@/components/BAAS/Forms/Inputs/ImageSingleUpload"
import RichTextEditor from "@/components/BAAS/RichTextEditor"
import SEOInformation from "@/components/BAAS/Shop/Admin/Sections/SEO"
import Status from "@/components/BAAS/Shop/Admin/Sections/Status"

export const ArticleFormSchema = z.object({
  ID: z.string(),
  Title: z.string().nonempty("Requirement for article generation"),
  Description: z.string(),
  Published: z.boolean(),
  Content: z.string(),
  ContentText: z.string().optional(),
  Image: z.string().optional(),
  CategoryID: z.string().nullable(),
})

export default function ArticleManagmentPage(props: {
  data?: any
  items?: any[]
}) {
  const r = useRouter()

  const ArticleFormCXT = useForm<z.infer<typeof ArticleFormSchema>>({
    resolver: zodResolver(ArticleFormSchema),
    defaultValues: {
      ...props.data,
      CategoryID: props.data.CategoryID ? props.data.CategoryID : "",
    },
  })

  async function onSubmit(data: z.infer<typeof ArticleFormSchema>) {
    if (ArticleFormCXT.getValues("CategoryID")?.length == 0) {
      ArticleFormCXT.setValue("CategoryID", null)
    }
    await SubmitForm({
      APIRoute: `articles/${ArticleFormCXT.getValues("ID")}`,
      // AuthObject: authObject,
      FormData: data,
      FormSchema: ArticleFormSchema,
      Router: r,
      ClientPath: "/admin/articles",
      OnSuccess: {
        Message: "Your Article Has Been" + props.data ? "UPDATED" : "CREATED",
        GoToRecord: false,
      },
      OnFailure: {
        Message: "Unable to perform this right now",
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
            className="w-full flex flex-col gap-2  pb-8"
          >
            <div className="w-full h-full">
              <div className=" gap-2 ">{/* Name */}</div>
              <div className="flex w-full gap-2">
                <Card className="w-1/3">
                  <ImageSingleUpload
                    form={ArticleFormCXT}
                    options={{
                      Name: "Image",
                    }}
                  />
                </Card>
                <div className="w-2/3">
                  <Status
                    form={ArticleFormCXT}
                    options={{
                      name: "Published",
                    }}
                  />
                  <SEOInformation
                    form={ArticleFormCXT}
                    items={props.items}
                    options={{
                      Description: {
                        Placeholder: "Describe what this article contains...",
                      },
                    }}
                  />
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
            <Button type="submit" className="mb-4">
              {props.data ? "UPDATE" : "CREATE"} changes
            </Button>
          </form>
        </Form>
      </div>
    </>
  )
}
