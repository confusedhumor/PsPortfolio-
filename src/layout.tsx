import Navbar from "./components/navbar";
import Footer from "./components/footer";
import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <div className='bg-black text-gray-200 min-h-screen flex flex-col'>
      <Navbar/>
      <main className="flex-grow flex flex-col">
        <Outlet/>
      </main>
      <Footer/>
    </div>
  )
}

export default Layout