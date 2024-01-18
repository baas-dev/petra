import MortgageCalcProvider from "./mortgage-calculator/components/formContext"

interface RootLayoutProps {
  children: React.ReactNode
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <>
      <MortgageCalcProvider>
        <div className="mb-16 h-full min-h-screen">{children}</div>
      </MortgageCalcProvider>
    </>
  )
}
