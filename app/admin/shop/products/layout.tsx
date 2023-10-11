interface RootLayoutProps {
  children: React.ReactNode
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <>
      <div className="max-w-4xl mx-auto">{children}</div>
    </>
  )
}
