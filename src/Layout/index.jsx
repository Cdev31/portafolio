import { Footer } from "../Components/Footer"
import { Navbar } from "../Components/Navbar"




export const Layout = ({ children })=>{
    return (
        <div className=" w-full p-1 bg-gradient-to-b from-black to-blue-950">
            <Navbar/>
            { children }
            <Footer/>
        </div>
    )
}