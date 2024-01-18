"use client"

import { useEffect, useRef, useState } from "react"
import { useRouter } from "next/navigation"

import BACKEND from "../API"

const api = new BACKEND()

async function getData() {
  return await api.GET({
    Route: "events",
  })
}

interface Event {
  Scope: string
  Action: string
  PrimaryID: string
  SecondaryID: string
  CreatedAt: Date
}

export default function page() {
  const r = useRouter()

  const [loading, setLoading] = useState(true)

  const dataRef = useRef([])
  function setDataRef(data) {
    dataRef.current = data
  }
  const LoadData = async () => {
    await getData().then((val) => {
      if (val.data && val.data.length > 0) {
        setDataRef([...val.data])
      }
      setLoading(false)
    })
  }
  useEffect(() => {
    LoadData()
  }, [])
  return (
    <div className="container max-w-4xl">
      {dataRef.current.map((item: Event) => (
        <NotificationCard
          Action={item.Action}
          Scope={item.Scope}
          CreatedAt={item.CreatedAt}
        />
      ))}
    </div>
  )
}

function NotificationCard({ Action, Scope, CreatedAt }) {
  return (
    <div className="flex items-center justify-between p-4 mb-2 bg-white mx-auto">
      <div className="flex items-center">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="w-16 h-16 rounded-2xl p-3 border border-blue-100 text-blue-400 bg-blue-50"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
          ></path>
        </svg>
        <div className="flex flex-col ml-3">
          <div className="font-medium leading-none">{Action}</div>
          <p className="text-sm text-gray-600 leading-none mt-1">{Scope}</p>
        </div>
      </div>
    </div>
  )
}
