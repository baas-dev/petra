interface RootLayoutProps {
  children: React.ReactNode
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <>
      <div className="max-w-4xl mx-auto">
        {/* <Banner
          Title={"Discounts on products"}
          Subtitle={"Coupon Management"}
        /> */}
        {children}
      </div>
    </>
  )
}
