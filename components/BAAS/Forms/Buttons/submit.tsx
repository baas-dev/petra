import { useState } from "react"
import { RefreshCcw } from "lucide-react"

import { Button } from "@/components/ui/button"

export default function SubmitButton({ loading }: { loading: boolean }) {
  return (
    <Button disabled={loading ? true : false} type="submit">
      {loading ? <RefreshCcw className="mt-1 animate-spin" /> : "Submit"}
    </Button>
  )
}
