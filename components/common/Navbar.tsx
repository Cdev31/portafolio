import Link from "next/link"


export const Navbar = ()=>{
    return (
        <nav className="absolute -right-1 ml-1 bottom-32">
            <ul className="flex flex-col gap-1 text-2xl font-semibold text-white/80">
                <li className="bg-gray-900 border-b-2 border-b-red-900 p-1 pr-2 rounded-md hover:scale-[1.1]">
                    <Link href="/">Home</Link>
                </li>
                <li className="bg-gray-900 border-b-2 border-b-red-900 p-1 pr-2 rounded-md hover:scale-[1.1]">
                    <Link  href="/">Projects</Link>
                </li>
                <li className="bg-gray-900 border-b-2 border-b-red-900 p-1 pr-2 rounded-md hover:scale-[1.1]">
                    <Link  href="/">Tutorials</Link>
                </li>
                <li className="bg-gray-900 border-b-2 border-b-red-900 p-1 pr-2 rounded-md hover:scale-[1.1]">
                    <Link  href="/">About me</Link>
                </li>
            </ul>
        </nav>
    )
}