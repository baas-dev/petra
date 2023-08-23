import { CreateRequest, Response } from "./TYPES"
import { GetRequest } from "./TYPES/request"

export default class BACKEND {
  async GET(options: GetRequest): Promise<Response> {
    let res: Response = {
      data: null,
      error: null,
    }
    try {
      let apiResponse = await fetch(`http://localhost:4000/${options.Route}`, {
        cache: "no-cache",
      })

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
    let res: Response = {
      data: null,
      error: null,
    }

    try {
      let apiResponse = await fetch(`http://localhost:4000/${options.Route}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          // 'Content-Type': 'application/x-www-Articles-urlencoded',
        },
        body: options.Body,
      })

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
    let res: Response = {
      data: null,
      error: null,
    }

    try {
      let apiResponse = await fetch(`http://localhost:4000/${options.Route}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          // 'Content-Type': 'application/x-www-Articles-urlencoded',
        },
        body: options.Body,
      })

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
  DeleteRequest(options) {}
}
