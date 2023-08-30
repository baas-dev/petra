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

// Assuming you're using Next.js for routing

type AuthObjectType = {
  userId: string | null
}

type AuthContextType = {
  authObject: AuthObjectType
  setAuthObject: (value: AuthObjectType) => void
}

const AuthContext = createContext<AuthContextType | undefined>(undefined)

type AuthProviderProps = {
  children: ReactNode
}

export const AuthProvider: FC<AuthProviderProps> = ({ children }) => {
  const router = useRouter()
  const initialObject = () => {
    try {
      const storedValue = localStorage.getItem("authObject")
      return storedValue
        ? JSON.parse(storedValue)
        : {
            userId: null,
          }
    } catch (error) {
      return {
        userId: null,
      }
    }
  }

  const [authObject, _setAuthObject] = useState<AuthObjectType>(initialObject)

  const setAuthObject = (value: AuthObjectType) => {
    if (typeof window !== "undefined") {
      localStorage.setItem("authObject", JSON.stringify(value))
      _setAuthObject(value)
    }
  }

  useEffect(() => {
    if (!authObject.userId) {
      router.push("/signin") // Redirect to sign-in page if userId is not present
    }

    const handleStorageChange = (e: StorageEvent) => {
      if (e.key === "authObject" && e.newValue) {
        _setAuthObject(JSON.parse(e.newValue))
      }
    }

    window.addEventListener("storage", handleStorageChange)
    return () => window.removeEventListener("storage", handleStorageChange)
  }, [authObject])

  return (
    <AuthContext.Provider value={{ authObject, setAuthObject }}>
      {children}
    </AuthContext.Provider>
  )
}

export const useAuthContext = (): AuthContextType => {
  const context = useContext(AuthContext)
  if (!context) {
    throw new Error("useAuthContext must be used within an AuthProvider")
  }
  return context
}
