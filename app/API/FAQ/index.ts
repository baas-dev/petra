import { z } from "zod"

import { FAQFormSchema } from "@/app/asdfasfdsdfasdf/faqs/form"

export async function CreateFAQ(body: z.infer<typeof FAQFormSchema>) {
  console.log(body)
  try {
    let response = await fetch(`http://localhost:4000/faq`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        // 'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: JSON.stringify({ Question: body.Question, Answer: body.Answer }),
    })
    const result = await response.json()
    return result.ID
  } catch (err) {
    console.log(err)
  }
}
