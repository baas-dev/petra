interface RootLayoutProps {
  children: React.ReactNode
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <>
      <div className="mx-auto max-w-6xl">{children}</div>
    </>
  )
}
