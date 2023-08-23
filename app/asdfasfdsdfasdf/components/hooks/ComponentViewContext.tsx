// ComponentViewContext.tsx
import React, { createContext, useContext, useState } from "react"

interface ComponentViewContextData {
  selectedOption: string
  setSelectedOption: (option: string) => void
}

const ComponentViewContext = createContext<ComponentViewContextData | null>(
  null
)

const ComponentViewProvider = ({ children }) => {
  const [selectedOption, setSelectedOption] = useState<string>("Team")

  return (
    <ComponentViewContext.Provider
      value={{ selectedOption, setSelectedOption }}
    >
      {children}
    </ComponentViewContext.Provider>
  )
}

export const useComponentViewContext = (): ComponentViewContextData => {
  const context = useContext(ComponentViewContext)

  if (!context) {
    throw new Error(
      "useComponentViewContext must be used within a ComponentViewProvider"
    )
  }

  return context
}

export default ComponentViewProvider
