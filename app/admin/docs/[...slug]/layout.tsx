import { Mdx } from "@/components/Markdown"
import { Label } from "@/components/ui/label"
import { allDocs } from "@/content"
import Link from "next/link"
import { notFound } from "next/navigation"
import NavData from "../navdata"

interface ExtractedContentData {
    location: string
    title: string
}


async function getAllDocTitles() {
    const doc = allDocs

    if (!doc) {
        return []
    }

    let list: ExtractedContentData[] = []
    doc.forEach((item, idx) => {
        list.push({
            location: item.group,
            title: item.title
        })
    })
    return list
}



function SideBar() {
    return (
        <nav className=" space-y-1 w-full max-w-64 py-4 h-min bg-white rounded-xl shadow-lg">


            {NavData.map((item, idx) => (
                <>
                    <div className="mb-8">
                        <Label key={idx} className="px-4 pt-4 text-md font-semibold text-gray-400 uppercase">
                            {item.title} Docs
                        </Label>
                        <ul>
                            {item.children.map((subitem, jdx) => {
                                return (
                                    <li>
                                    <Link key={jdx} href={subitem.href} className="inline-flex items-center  w-full px-4 py-2 mt-1 text-md text-gray-500 transition duration-200 ease-in-out transform border-l-4 border-transparent focus:shadow-outline hover:bg-blue-100 hover:border-blue-500 hover:scale-95 hover:text-blue-500">
                                            <span className="ml-4">
                                                {subitem.title}
                                            </span>
                                    </Link>
                                    </li>
                                )
                            })}


                        </ul>
                    </div>
                </>
            ))}
        </nav>
    )
}
export default async function Layout({ children }) {
    const doc = await getAllDocTitles()
    console.log(doc)

    return (
        <div className="max-w-6xl mx-auto flex gap-4">
            <SideBar />
            {children}
        </div>
    )
}
