// PreqFormContext.tsx

import React, { createContext, useContext, useState } from "react"

import { Borrower } from "@/app/prequalification/components/formContext"

export interface Expense {
  key: string
  amount: number
}

export interface PreqForm {
  Address: string | null
  Borrowers: Borrower[]
}

interface PreqFormContext {
  data: PreqForm
  setFormData: (option: PreqForm) => void
}

const PreqFormContext = createContext<PreqFormContext | null>(null)

const PrequalificationFormProvider = ({ children }) => {
  const [data, setFormData] = useState<PreqForm>({
    Borrowers: [
      {
        FirstName: "Main",
        LastName: "Borrower",
        MaritalStatus: "single",
        CreditScore: "",
        Expenses: [],
        AnnualIncome: "0",
        DOB: {
          day: "",
          month: "",
          year: "",
        },
      },
    ],
    Address: null,
  })

  return (
    <PreqFormContext.Provider value={{ data, setFormData }}>
      {children}
    </PreqFormContext.Provider>
  )
}

export const usePreqFormContext = (): PreqFormContext => {
  const context = useContext(PreqFormContext)

  if (!context) {
    throw new Error(
      "usePreqFormContext must be used within a PrequalificationFormProvider"
    )
  }

  return context
}

export default PrequalificationFormProvider
