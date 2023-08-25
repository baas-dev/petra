import { useRouter } from "next/navigation"
import { z } from "zod"

import { Button } from "@/components/ui/button"
import { Form } from "@/components/ui/form"
import { GetFormContext, SubmitForm } from "@/components/BAAS/Forms"
import TextInput from "@/components/BAAS/Forms/Inputs/Text"
import { FormConfig } from "@/components/BAAS/Forms/Types"

export const TeamFormSchema = z.object({
  Name: z.string().min(2, "Please complete first name"),
})

export default function TeamInitForm() {
  const teamFormCXT = GetFormContext(TeamFormSchema)

  const r = useRouter()
  async function onSubmit(data: z.infer<typeof TeamFormSchema>) {
    await SubmitForm({
      APIRoute: "team",
      FormData: data,
      FormSchema: TeamFormSchema,
      Router: r,
      ClientPath: "/admin/team",
      OnSuccess: {
        Message: "Your Team Has Been Created",
        GoToRecord: true,
      },
      OnFailure: {
        Message: "Unable to Create This Right Now",
      },
      SubmitType: "CREATE",
    })
  }

  return (
    <Form {...teamFormCXT}>
      <form
        onSubmit={teamFormCXT.handleSubmit(onSubmit)}
        className="w-full space-y-6"
      >
        <TextInput
          form={teamFormCXT}
          options={{
            name: "Name",
            label: "Name",
          }}
        />

        <Button type="submit">Save changes</Button>
      </form>
    </Form>
  )
}
