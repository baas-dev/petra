import { getSession, signOut } from "next-auth/react"

import { CreateRequest, Response } from "./TYPES"
import { DeleteRequest, GetRequest } from "./TYPES/request"

export default class BACKEND {
  async GET(options: GetRequest): Promise<Response> {
    const session = await getSession()

    let res: Response = {
      data: null,
      error: null,
      code: 0,
    }

    try {
      let headers: HeadersInit = {
        "Content-Type": "application/json",
        Authorization: session?.token ? "Bearer " + session.token : " ",
      }

      let apiResponse = await fetch(`/backend/${options.Route}`, {
        cache: "no-cache",
        headers: headers,
      })
      res.code = apiResponse.status
      if (res.code == 403) {
        signOut({
          redirect: true,
          callbackUrl: `/admin`,
        })
      }

      if (apiResponse.ok) {
        res.data = await apiResponse.json()
      }

      if (!apiResponse.ok) {
        res.error = "Failed to Complete This Request"
      }
    } catch (err) {
      res.error = "cannot process"
    }
    return res
  }

  async CREATE(options: CreateRequest): Promise<Response> {
    const session = await getSession()

    let res: Response = {
      data: null,
      error: null,
      code: 0,
    }

    try {
      let headers: HeadersInit = {
        "Content-Type": "application/json",
        Authorization: session?.token ? "Bearer " + session.token : " ",
      }
      let apiResponse = await fetch(`/backend/${options.Route}`, {
        method: "POST",
        headers: headers,
        body: options.Body,
      })
      res.code = apiResponse.status
      if (res.code == 403) {
        signOut({
          redirect: true,
          callbackUrl: `/admin`,
        })
      }

      if (apiResponse.ok) {
        res.data = await apiResponse.json()
      }

      if (!apiResponse.ok) {
        res.error = "Failed to Complete This Request"
      }
    } catch (err) {
      res.error = "cannot process"
    }
    return res
  }
  async UPDATE(options: CreateRequest): Promise<Response> {
    const session = await getSession()

    let res: Response = {
      data: null,
      error: null,
      code: 0,
    }

    try {
      let headers: HeadersInit = {
        "Content-Type": "application/json",
        Authorization: session?.token ? "Bearer " + session.token : " ",
      }
      let apiResponse = await fetch(`/backend/${options.Route}`, {
        method: "PUT",
        headers: headers,
        body: options.Body,
      })
      res.code = apiResponse.status

      if (res.code == 403) {
        signOut({
          redirect: true,
          callbackUrl: `${process?.env.NEXT_PUBLIC_LOGIN_PAGE}/admin`,
        })
      }

      if (apiResponse.ok) {
        res.data = await apiResponse.json()
      }

      if (!apiResponse.ok) {
        res.error = "Failed to Complete This Request"
      }
    } catch (err) {
      res.error = "cannot process"
    }
    return res
  }
  async DELETE(options: DeleteRequest): Promise<Response> {
    const session = await getSession()

    let res: Response = {
      data: null,
      error: null,
      code: 0,
    }

    try {
      let headers: HeadersInit = {
        "Content-Type": "application/json",
        Authorization: session?.token ? "Bearer " + session.token : " ",
      }
      let apiResponse = await fetch(`/backend/${options.Route}`, {
        method: "DELETE",
        headers: headers,
        body: options.Body,
      })
      res.code = apiResponse.status
      if (res.code == 403) {
        signOut({
          redirect: true,
          callbackUrl: `${process?.env.NEXT_PUBLIC_LOGIN_PAGE}/admin`,
        })
      }

      if (apiResponse.ok) {
        res.data = await apiResponse.json()
      }

      if (!apiResponse.ok) {
        res.error = "Failed to Complete This Request"
      }
    } catch (err) {
      res.error = "cannot process"
    }
    return res
  }
}
