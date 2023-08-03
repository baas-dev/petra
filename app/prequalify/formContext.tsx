// PreqFormContext.tsx
import React, { createContext, useContext, useState } from "react"

export interface Expense {
  key: string
  amount: number
}

export interface Borrower {
  FirstName: string
  LastName: string
  DOB: string
  MaritalStatus:
    | "single"
    | "married"
    | "divorced"
    | "seperated"
    | "domestic partnership"
  AnnualIncome: number
  CreditScore: string
  Expenses: Expense[]
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
        DOB: "",
        MaritalStatus: "single",
        AnnualIncome: 0,
        CreditScore: "",
        Expenses: [],
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
