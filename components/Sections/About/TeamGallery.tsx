"use client"

import React, { useState } from "react"

import { Button } from "@/components/ui/button"
import { TeamCard } from "@/components/BAAS/Cards/TeamCard"

const TeamGallery = ({ data }: any) => {
  const [index, setIndex] = useState(0)

  // Clamping the index so it cannot go less than 0 or more than data.length - 1
  const next = () => setIndex(Math.min(index + 1, data.length - 4.7))
  const prev = () => setIndex(Math.max(index - 1, 0))

  return (
    <div className="container">
      <Button onClick={prev}>Previous</Button>
      <Button onClick={next}>Next</Button>

      <div style={{ overflow: "auto", whiteSpace: "nowrap" }}>
        {data.map((item: any, i: number) => (
          <div
            key={i}
            style={{
              display: "inline-block",
              transform: `translateX(${-index * 100}%)`,
              transition: "transform 0.5s",
              marginInlineEnd: 16,
            }}
          >
            {/* Assuming each item in data array is a URL for an image */}
            <TeamCard />
          </div>
        ))}
      </div>
    </div>
  )
}

export default TeamGallery
