interface RootLayoutProps {
  children: React.ReactNode
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <>
      <div className="max-w-6xl mx-auto">{children}</div>
    </>
  )
}
