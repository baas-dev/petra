import { AppRouterInstance } from "next/dist/shared/lib/app-router-context"

import { AuthObjectType } from "@/app/admin/Context/AuthContext"

export type FormConfig = {
  APIRoute: string
}

export interface SubmitFormConfig {
  APIRoute: string
  AuthObject?: AuthObjectType
  FormData: any
  FormSchema: any
  Router: AppRouterInstance
  ClientPath: string
  SubmitType: "CREATE" | "UPDATE"
  OnSuccess: {
    Message: string
    GoToRecord?: boolean
  }
  OnFailure: {
    Message: string
  }
}
