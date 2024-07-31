import React from "react"
import { Outlet } from "react-router-dom"
import Navbar from "./components/Navbar/Navbar"
import Footer from "./components/Footer/Footer"
import  Expert from "./components/Experts/Expert"
function App() {
  return (
    <>
    <div className="">
    <Navbar/>
    <Outlet/>
    {/* <Expert/> */}
    <Footer/>
    </div>
    </>
  )
}

export default App
