import { Loader2 } from "lucide-react"

interface Props {
  className?: string
}

const Spinner = ({ className = "", ...props }: Props) => {
  return <Loader2 className={`animate-spin ${className}`} {...props} />
}

export default Spinner
