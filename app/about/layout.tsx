import IntroSection from "@/components/Sections/General/IntroSection"

interface RootLayoutProps {
  children: React.ReactNode
}

export default function AboutLayout({ children }: RootLayoutProps) {
  return (
    <>
      <div className="mb-16">{children}</div>
    </>
  )
}
