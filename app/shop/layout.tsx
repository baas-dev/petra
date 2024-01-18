interface RootLayoutProps {
  children: React.ReactNode
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <>
      <div className="min-h-screen h-full bg-secondary">{children}</div>
    </>
  )
}
