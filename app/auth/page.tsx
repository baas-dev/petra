import { useEffect, useState } from "react"
import { useRouter } from "next/navigation"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"

import { Button } from "@/components/ui/button"
import { Form } from "@/components/ui/form"
import { toast } from "@/components/ui/use-toast"
import { SubmitForm } from "@/components/BAAS/Forms"
import PasswordInput from "@/components/BAAS/Forms/Inputs/PasswordInput"
import TextInput from "@/components/BAAS/Forms/Inputs/Text"
import TableLoading from "@/components/BAAS/Loading/TableLoading"

import BACKEND from "../API"
import { parseJwt, useAuthContext } from "../admin/Context/AuthContext"

export const AuthFormSchema = z.object({
  Email: z.string().email(),
  Password: z.string(),
})
const api = new BACKEND()
export default function AuthPage() {
  const [stateUserData, setUserData] = useState<{ ID: string | null }>({
    ID: null,
  })
  const r = useRouter()
  const { authObject, setAuthObject } = useAuthContext()
  const AuthFormCXT = useForm<z.infer<typeof AuthFormSchema>>({
    resolver: zodResolver(AuthFormSchema),
  })

  async function getData() {
    return await api.GET({
      Route: "auth/me",
      AccessToken: authObject.AccessToken,
    })
  }
  async function onSubmit(data: z.infer<typeof AuthFormSchema>) {
    let res = await api
      .CREATE({
        Body: JSON.stringify(data),
        Route: "auth/login",
      })
      .then((val) => {
        console.log(val)
        if (val.code !== 200) {
          toast({
            variant: "destructive",
            title: "Login Failed!",
            description: (
              <>
                <p>Could not sign in. Please try again! </p>
                <p>If you continue to have issues, please contact an admin. </p>
              </>
              // <pre className="mt-2 w-[340px] rounded-md bg-slate-950 p-4">
              //   <code className="text-white">{JSON.stringify(data, null, 2)}</code>
              // </pre>
            ),
          })
        }

        return val.data
      })
      .catch((err) => {
        return null
      })

    if (res) {
      const jwtParsed = parseJwt(res.AccessToken || "") || {}

      setAuthObject({
        AccessToken: res.AccessToken,
        RefreshToken: res.RefreshToken,
        ID: jwtParsed.ID || "",
        Role: jwtParsed.Roles || "",
        Exp: jwtParsed.exp || 0,
      })
    }
  }

  useEffect(() => {
    setUserData({
      ID: authObject.ID,
    })
  }, [authObject])
  return (
    <div className="flex flex-col bg-gray-100 max-w-lg mx-auto justify-center">
      <div className="grid place-items-center  sm:my-auto">
        <div
          className="w-full container
            px-6 py-10 sm:px-10 sm:py-6 
            bg-white rounded-lg shadow-md lg:shadow-lg"
        >
          {stateUserData.ID !== null ? (
            <Form {...AuthFormCXT}>
              <form
                onSubmit={AuthFormCXT.handleSubmit(onSubmit)}
                className="w-full space-y-6"
              >
                <h2 className="text-center font-light text-1xl lg:text-4xl text-primary">
                  Admin Portal Login
                </h2>

                <TextInput
                  form={AuthFormCXT}
                  options={{
                    name: "Email",
                    label: "Email Address",
                    placeholder: "example@email.com",
                  }}
                />
                <PasswordInput
                  form={AuthFormCXT}
                  options={{
                    name: "Password",
                    label: "Password",
                    placeholder: "Enter your password...",
                  }}
                />

                <Button
                  type="submit"
                  className="w-full py-3 mt-10 bg-gray-800 rounded-sm
                    font-medium text-white uppercase
                    focus:outline-none hover:bg-gray-700 hover:shadow-none"
                >
                  Login
                </Button>
              </form>
            </Form>
          ) : (
            <>
              <TableLoading />
            </>
          )}
        </div>
      </div>
    </div>
  )
}
