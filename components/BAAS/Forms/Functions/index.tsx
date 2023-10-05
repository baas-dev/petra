import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"

import { toast } from "@/components/ui/use-toast"
import BACKEND from "@/app/API"

import { SubmitFormConfig } from "../Types/FormConfig"

const api = new BACKEND()

export function GetFormContext(Schema: any) {
  return useForm<z.infer<typeof Schema>>({
    resolver: zodResolver(Schema),
  })
}

export async function SubmitForm(Config: SubmitFormConfig) {
  try {
    const result = Config.FormSchema.safeParse(Config.FormData)

    if (!result.success) {
      // Handle the validation errors
      throw new Error("Failed data structure check")
    }

    if (result.success) {
      let data = async () => {
        let res

        if (Config.SubmitType == "CREATE") {
          res = await api.CREATE({
            Route: Config.APIRoute,
            Body: JSON.stringify(Config.FormData),
            AccessToken: Config.AuthObject?.AccessToken,
          })
        }

        if (Config.SubmitType == "UPDATE") {
          res = await api.UPDATE({
            Route: Config.APIRoute,
            Body: JSON.stringify(Config.FormData),
            AccessToken: Config.AuthObject?.AccessToken,
          })
        }

        if (res.error == null) {
          toast({
            title: "Success!",
            description: <p>{Config.OnSuccess.Message}</p>,
          })

          if (Config.OnSuccess.GoToRecord) {
            Config.Router.push(`${Config.ClientPath}/${res.data.ID}`)
          }
        }

        if (res.error != null) {
          toast({
            variant: "destructive",
            title: "Something went wrong!",
            description: <p>{Config.OnFailure.Message}</p>,
          })
        }
      }

      await data()
    }
  } catch (err) {
    console.log(err)
  }
}
