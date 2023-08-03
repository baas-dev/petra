"use client"

// MortCalcContext.tsx
import React, { createContext, useContext, useState } from "react"
import { number } from "zod"

export interface Expense {
  key: string
  amount: number
}

export interface MortgageCalcForm {
  downPaymentPercentage: number
  interestPercentage: number
  propertyTaxPercentage: number
  loanDurationTerm: number
  totalCost: number
}

interface MortCalcContext {
  data: MortgageCalcForm
  setCalcData: (option: MortgageCalcForm) => void
}

const MortCalcContext = createContext<MortCalcContext | null>(null)

const MortgageCalcProvider = ({ children }) => {
  const [data, setCalcData] = useState<MortgageCalcForm>({
    downPaymentPercentage: 15,
    interestPercentage: 7.3,
    propertyTaxPercentage: 2,
    loanDurationTerm: 360,
    totalCost: 250000,
  })

  return (
    <MortCalcContext.Provider value={{ data, setCalcData }}>
      {children}
    </MortCalcContext.Provider>
  )
}

export const useMortgageCalcContext = (): MortCalcContext => {
  const context = useContext(MortCalcContext)

  if (!context) {
    throw new Error(
      "useMortgageCalcContext must be used within a MortgageCalcProvider"
    )
  }

  return context
}

export default MortgageCalcProvider
