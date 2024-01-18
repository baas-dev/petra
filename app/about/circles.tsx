// components/Circles.js
import React from "react"

const Circles = () => {
  return (
    <div className="relative">
      {/* Center Circle */}
      <div className="flex h-16 w-16 items-center justify-center rounded-full bg-blue-500">
        <span className="font-bold text-white">Center</span>
      </div>

      {/* Surrounding Circles */}
      <div className="absolute left-0 top-0">
        {[1, 2, 3, 4, 5, 6].map((index) => (
          <div key={index} className="circle">
            {index}
          </div>
        ))}
      </div>
    </div>
  )
}

export default Circles
