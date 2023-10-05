"use client"

import {
  FC,
  ReactNode,
  createContext,
  useContext,
  useEffect,
  useState,
} from "react"
import { useRouter } from "next/navigation"

type TableObjectType = {
  Data: any | null
}

type TableContextType = {
  adminTableCXT: TableObjectType
  setAdminTableCXT: (value: TableObjectType) => void
}

const TableContext = createContext<TableContextType | undefined>(undefined)

type TableProviderProps = {
  children: ReactNode
}

export const AdminTableProvider: FC<TableProviderProps> = ({ children }) => {
  const initialObject = () => {
    return {
      Data: null,
    }
  }

  const [adminTableCXT, _setAdminTableCXT] =
    useState<TableObjectType>(initialObject)

  const setAdminTableCXT = (value: TableObjectType) => {
    console.log
    _setAdminTableCXT(value)
  }

  useEffect(() => {}, [adminTableCXT])

  return (
    <TableContext.Provider value={{ adminTableCXT, setAdminTableCXT }}>
      {children}
    </TableContext.Provider>
  )
}

export const useAdminTableContext = (): TableContextType => {
  const context = useContext(TableContext)
  if (!context) {
    throw new Error("useTableContext must be used within an TableProvider")
  }
  return context
}
