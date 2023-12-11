// components/Circles.js
import React from "react"

const Circles = () => {
  return (
    <div className="relative">
      {/* Center Circle */}
      <div className="w-16 h-16 bg-blue-500 rounded-full flex items-center justify-center">
        <span className="text-white font-bold">Center</span>
      </div>

      {/* Surrounding Circles */}
      <div className="absolute top-0 left-0">
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
