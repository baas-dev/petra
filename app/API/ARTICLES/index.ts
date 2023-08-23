import { z } from "zod"

import { ArticleFormSchema } from "@/app/asdfasfdsdfasdf/articles/form"

export default async function CreateNewArticleSubmission(body) {
  try {
    console.log(body)
    let response = await fetch(`http://localhost:4000/articles`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        // 'Content-Type': 'application/x-www-Articles-urlencoded',
      },
      body: JSON.stringify({ Title: body.Title }),
    })
    const result = await response.json()
    return result.ID
  } catch (err) {
    console.log(err)
  }
}

export async function GetAllArticlesSubmissions(specific?: string) {
  let response

  try {
    response = await fetch("http://localhost:4000/articles", {
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
}
