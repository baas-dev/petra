"use client"

// CartContext.tsx
import {
  FC,
  ReactNode,
  createContext,
  useContext,
  useEffect,
  useState,
} from "react"

import { IProduct } from "../Types"

// Define the shape of our example object
type CartObjectType = {
  items: IProduct[]
}

// Define the shape of our context value
type CartContextType = {
  CartObject: CartObjectType
  setCartObject: (value: CartObjectType) => void
}

const CartContext = createContext<CartContextType | undefined>(undefined)

type CartProviderProps = {
  children: ReactNode
}

export const CartProvider: FC<CartProviderProps> = ({ children }) => {
  const initialObject = () => {
    try {
      const storedValue = localStorage.getItem("CartObject")
      return storedValue
        ? JSON.parse(storedValue)
        : {
            items: [],
          }
    } catch (error) {
      return {
        items: [],
      }
    }
  }

  const [CartObject, _setCartObject] = useState<CartObjectType>(initialObject)

  const setCartObject = (value: CartObjectType) => {
    if (typeof window !== "undefined") {
      localStorage.setItem("CartObject", JSON.stringify(value))
      _setCartObject(value)
    }
  }

  useEffect(() => {
    // This effect listens for changes in other tabs/windows
    const handleStorageChange = (e: StorageEvent) => {
      if (e.key === "myObject" && e.newValue) {
        _setCartObject(JSON.parse(e.newValue))
      }
    }

    window.addEventListener("storage", handleStorageChange)
    return () => window.removeEventListener("storage", handleStorageChange)
  }, [])

  return (
    <CartContext.Provider value={{ CartObject, setCartObject }}>
      {children}
    </CartContext.Provider>
  )
}

export const useCartContext = (): CartContextType => {
  const context = useContext(CartContext)
  if (!context) {
    throw new Error("useCartContext must be used within a CartProvider")
  }
  return context
}
