import MortgageCalcProvider from "./mortgage-calculator/components/formContext"

interface RootLayoutProps {
  children: React.ReactNode
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <>
      <MortgageCalcProvider>
        <div className=" bg-secondary min-h-screen h-full">{children}</div>
      </MortgageCalcProvider>
    </>
  )
}
