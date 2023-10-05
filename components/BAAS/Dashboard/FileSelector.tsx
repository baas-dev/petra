// components/CustomFileSelector.tsx

import React, { ComponentPropsWithRef } from "react"

import { cn } from "@/lib/utils"

type Props = ComponentPropsWithRef<"input">

const CustomFileSelector = (props: Props) => {
  return (
    <div className="hidden">
      <input
        {...props}
        type="file"
        id="dropzone-file"
        multiple
        className={cn({
          // Modify the Button shape, spacing, and colors using the `file`: directive
          // button colors

          "file:bg-violet-50 file:text-violet-500 hover:file:bg-violet-100":
            true,
          "file:rounded-lg file:rounded-tr-none file:rounded-br-none": true,
          "file:px-4 file:py-2 file:mr-4 file:border-none": true,
          // overall input styling
          "hover:cursor-pointer border rounded-lg text-gray-400": true,
        })}
      />
    </div>
  )
}

export default CustomFileSelector
