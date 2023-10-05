"use client"

import {
  FC,
  ReactNode,
  createContext,
  useContext,
  useEffect,
  useState,
} from "react"

import BACKEND from "@/app/API"

// Corrected the import

export type AuthObjectType = {
  AccessToken: string
  RefreshToken: string
  ID: string
  Role: string
  Exp: number
}

const defaultAuthObject: AuthObjectType = {
  AccessToken: "",
  RefreshToken: "",
  ID: "",
  Role: "",
  Exp: 0,
}

type AuthContextType = {
  authObject: AuthObjectType
  setAuthObject: (value: AuthObjectType) => void
  logout: () => void
  RefreshToken: (refreshToken: string) => void
}

const AuthContext = createContext<AuthContextType | undefined>(undefined)

type AuthProviderProps = {
  children: ReactNode
}
const api = new BACKEND()

export function parseJwt(token: string) {
  try {
    const base64Url = token.split(".")[1]
    const base64 = base64Url.replace(/-/g, "+").replace(/_/g, "/")
    const jsonPayload = decodeURIComponent(
      atob(base64)
        .split("")
        .map((c) => "%" + ("00" + c.charCodeAt(0).toString(16)).slice(-2))
        .join("")
    )
    return JSON.parse(jsonPayload)
  } catch (error) {
    console.error("Failed to parse JWT", error)
    return null
  }
}

export const AuthProvider: FC<AuthProviderProps> = ({ children }) => {
  const [authObject, _setAuthObject] =
    useState<AuthObjectType>(defaultAuthObject)

  useEffect(() => {
    const initialObject = () => {
      try {
        const storedValue = localStorage.getItem("authObject")
        if (storedValue) {
          const jp = JSON.parse(storedValue)
          const jwtParsed = parseJwt(jp.AccessToken || "") || {}
          return {
            ID: jwtParsed.ID || "",
            Role: jwtParsed.Roles || "",
            Exp: jwtParsed.exp || 0,
            AccessToken: jp.AccessToken,
            RefreshToken: jp.RefreshToken,
          }
        }
      } catch (error) {
        console.error(
          "Failed to retrieve auth object from local storage",
          error
        )
      }
      return defaultAuthObject
    }

    _setAuthObject(initialObject())
  }, [])

  const setAuthObject = (value: AuthObjectType) => {
    localStorage.setItem("authObject", JSON.stringify(value))
    _setAuthObject(value)
  }
  const logout = () => {
    localStorage.removeItem("authObject")
    _setAuthObject(defaultAuthObject)
  }

  const RefreshToken = async (refresh: string) => {
    let res = await api.CREATE({
      Route: "auth/login/refresh",
      Body: JSON.stringify({
        RefreshToken: refresh,
      }),
    })

    if (res.data) {
      setAuthObject({
        ...authObject,
        AccessToken: res.data,
      })
    }

    if (!res.data) {
      logout()
    }
    window.location.reload()
  }

  useEffect(() => {
    const handleStorageChange = (e: StorageEvent) => {
      if (e.key === "authObject" && e.newValue) {
        _setAuthObject(JSON.parse(e.newValue))
      }
    }
    window.addEventListener("storage", handleStorageChange)
    return () => window.removeEventListener("storage", handleStorageChange)
  }, [])

  return (
    <AuthContext.Provider
      value={{ authObject, logout, RefreshToken, setAuthObject }}
    >
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
