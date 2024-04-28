import { Navbar } from "../Components/Navbar"




export const Layout = ({ children })=>{
    return (
        <div className="h-[100vh] w-full p-1 bg-gradient-to-b from-black to-blue-950">
            <Navbar/>
            { children }
        </div>
    )
}