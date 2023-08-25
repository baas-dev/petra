import { z } from "zod"

import { ResourceFormSchema } from "@/app/admin/resources/form"

export async function GetAllResources() {
  let response

  try {
    response = await fetch("http://localhost:4000/resources", {
      cache: "no-cache",
    })
  } catch (error) {
    console.log("There was an error", error)
    return []
  }

  // Uses the 'optional chaining' operator
  if (response?.ok) {
    return response.json()
  } else {
    console.log(`HTTP Response Code: ${response?.status}`)
    return []
  }
  return []
}

export default async function CreateResource(
  body: z.infer<typeof ResourceFormSchema>
) {
  console.log(body)
  try {
    let response = await fetch(`http://localhost:4000/resources`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        // 'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: JSON.stringify(body),
    })
    const result = await response.json()
    return result.ID
  } catch (err) {
    console.log(err)
  }
}
