import MortgageCalcProvider from "./mortgage-calculator/components/formContext"

interface RootLayoutProps {
  children: React.ReactNode
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <>
      <MortgageCalcProvider>
        <div className="min-h-screen mb-16 h-full">{children}</div>
      </MortgageCalcProvider>
    </>
  )
}
