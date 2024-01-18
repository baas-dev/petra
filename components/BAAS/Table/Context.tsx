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

type AdminTableContext = {
  ShouldDialogBeOpen?: boolean
  TableArrayData?: any
  ClientPath?: string
  ShouldReload?: boolean
}

type TableCXTType = {
  tableCXTObject: AdminTableContext
  setTableCXT: (value: AdminTableContext) => void
}

const TableContext = createContext<TableCXTType | undefined>(undefined)

type TableContextProviderProps = {
  children: ReactNode
}

export const TableContextProvider: FC<TableContextProviderProps> = ({
  children,
}) => {
  const router = useRouter()
  const initialObject = () => {
    return {
      ShouldReload: true,
      ShouldDialogBeOpen: false,
    }
  }

  const [tableCXTObject, _setTableCXTObject] =
    useState<AdminTableContext>(initialObject)

  const setTableCXT = (value: AdminTableContext) => {
    if (typeof window !== "undefined") {
      _setTableCXTObject(value)
    }
  }

  useEffect(() => {
    const handleStorageChange = (e: StorageEvent) => {
      if (e.key === "tableCXT" && e.newValue) {
        _setTableCXTObject(JSON.parse(e.newValue))
      }
    }

    window.addEventListener("storage", handleStorageChange)
    return () => window.removeEventListener("storage", handleStorageChange)
  }, [tableCXTObject])

  return (
    <TableContext.Provider value={{ tableCXTObject, setTableCXT }}>
      {children}
    </TableContext.Provider>
  )
}

export const useTableContext = (): TableCXTType => {
  const context = useContext(TableContext)
  if (!context) {
    throw new Error(
      "useTableContext must be used within an TableContextProvider"
    )
  }
  return context
}
