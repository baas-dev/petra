interface NavItemGroup {
  title: string
  children: {
    title: string
    href: string
    description?: string
  }[]
}

const NavData: NavItemGroup[] = [
  {
    title: "Site Content",
    children: [
      {
        title: "Resources",
        href: "/admin/docs/resources",
      },
      {
        title: "Team Members",
        href: "/admin/docs/team",
      },
    ],
  },
  {
    title: "Form",
    children: [
      {
        title: "Delivery Settings",
        href: "/admin/docs/forms/delivery",
      },
      {
        title: "Contact",
        href: "/admin/docs/forms/contact",
      },
      {
        title: "Prequalification",
        href: "/admin/docs/forms/prequalification",
      },
    ],
  },
]

export default NavData
