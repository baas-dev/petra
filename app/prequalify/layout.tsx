interface RootLayoutProps {
  children: React.ReactNode
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <>
      <div className=" bg-secondary min-h-screen`">{children}</div>
    </>
  )
}
