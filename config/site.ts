export type SiteConfig = typeof siteConfig

export const siteConfig = {
  name: "Petra Home Lending",
  description: "Top Rated Texas Home Mortgage Lender",
  mainNav: [
    {
      title: "Home",
      href: "/",
    },
    {
      title: "About Petra",
      href: "/about",
    },
    {
      title: "Articles",
      href: "/articles",
    },
    {
      title: "Resource Center",
      href: "/resources",
    },
    {
      title: "Contact Us",
      href: "/contact",
    },
  ],

  links: {
    twitter: "https://twitter.com/shadcn",
    github: "https://github.com/shadcn/ui",
    docs: "https://ui.shadcn.com",
  },
}
