import { z } from "zod"

import { ContactFormSchema } from "@/app/contact/form"

export async function CreateNewFormSubmission(body) {
  console.log(body)
  try {
    let response = await fetch(`http://localhost:4000/forms`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        // 'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: JSON.stringify({ SubmissionData: JSON.stringify(body) }),
    })
    const result = await response.json()
    return result.ID
  } catch (err) {
    console.log(err)
  }
}

export async function GetAllFormSubmissions(specific?: string) {
  let response

  try {
    response = await fetch("http://localhost:4000/Contacts", {
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
