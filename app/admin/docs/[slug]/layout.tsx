import { Mdx } from "@/components/Markdown"
import { allDocs } from "@/content"
import { notFound } from "next/navigation"

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
        <nav className=" space-y-1 bg-white">
            <p className="px-4 pt-4 text-xs font-semibold text-gray-400 uppercase">
                Site Content
            </p>
            <ul>
                <li>
                    <a className="inline-flex items-center w-full px-4 py-2 mt-1 text-sm text-gray-500 transition duration-200 ease-in-out transform border-l-4 border-transparent focus:shadow-outline hover:border-blue-500 hover:scale-95 hover:text-blue-500" href="#">
                        <span className="ml-4">
                            Resources
                        </span>
                    </a>
                </li>
                <li>
                    <a className="inline-flex items-center w-full px-4 py-2 mt-1 text-sm text-gray-500 transition duration-200 ease-in-out transform border-l-4 border-transparent focus:shadow-outline hover:border-blue-500 hover:scale-95 hover:text-blue-500" href="#">
                        <span className="ml-4">
                            Team Members
                        </span>
                    </a>
                </li>
                <li>
                    <a className="inline-flex items-center w-full px-4 py-2 mt-1 text-sm text-gray-500 transition duration-200 ease-in-out transform border-l-4 border-transparent focus:shadow-outline hover:border-blue-500 hover:scale-95 hover:text-blue-500" href="#">
                        <span className="ml-4">
                            Testimonials
                        </span>
                    </a>
                </li>
            </ul>
            <p className="px-4 pt-4 text-xs font-semibold text-gray-400 uppercase">
                Forms
            </p>
            <ul>
                <li>
                    <a className="inline-flex items-center w-full px-4 py-2 mt-1 text-sm text-gray-500 transition duration-200 ease-in-out transform border-l-4 border-transparent focus:shadow-outline hover:border-blue-500 hover:scale-95 hover:text-blue-500" href="#">
                        <span className="ml-4">
                            Viewing
                        </span>
                    </a>
                </li>
                <li>
                    <a className="inline-flex items-center w-full px-4 py-2 mt-1 text-sm text-gray-500 transition duration-200 ease-in-out transform border-l-4 border-transparent focus:shadow-outline hover:border-blue-500 hover:scale-95 hover:text-blue-500" href="#">
                        <span className="ml-4">
                            Settings
                        </span>
                        {/* <span className="inline-flex ml-auto items-center rounded-full bg-blue-50 px-2.5 py-0.5 text-xs font-medium text-blue-500">
                            25
                        </span> */}
                    </a>
                </li>
           
            </ul>
            <p className="px-4 pt-4 text-xs font-semibold text-gray-400 uppercase">
                Admin
            </p>
            <ul>
                <li>
                    <a className="inline-flex items-center w-full px-4 py-2 mt-1 text-sm text-gray-500 transition duration-200 ease-in-out transform border-l-4 border-transparent focus:shadow-outline hover:border-blue-500 hover:scale-95 hover:text-blue-500" href="#">
                        <span className="ml-4">
                            Users
                        </span>
                    </a>
                </li>
                <li>
                    <a className="inline-flex items-center w-full px-4 py-2 mt-1 text-sm text-gray-500 transition duration-200 ease-in-out transform border-l-4 border-transparent focus:shadow-outline hover:border-blue-500 hover:scale-95 hover:text-blue-500" href="#">
                        <span className="ml-4">
                            Roles
                        </span>
                        {/* <span className="inline-flex ml-auto items-center rounded-full bg-blue-50 px-2.5 py-0.5 text-xs font-medium text-blue-500">
                            25
                        </span> */}
                    </a>
                </li>
           
            </ul>
        </nav>
    )
}
export default async function Layout({ children }) {
    const doc = await getAllDocTitles()
    console.log(doc)

    return (
        <div className="max-w-6xl mx-auto md:pt-16 flex gap-4">
            <SideBar />
            {children}
        </div>
    )
}
