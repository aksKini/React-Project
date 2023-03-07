import React from 'react'
import "./App.css"
import Nav from "./Nav"
import {BrowserRouter as Router,Routes,Route} from "react-router-dom"
import Home from "./components/Home"
import Login from "./components/Login"
import Menu from "./components/Menu"
import Signup from "./components/Signup"
import PageNotFound from "./components/PageNotFound"



const App = () => {
  return (
   <>
   <Router>
    <Nav />
    <Routes>

      <Route path="/" element={<Login />}  /> 
      {/* <Route path="/login" element={<Login />}  />  */}
      <Route path="/signup" element={<Signup />}  /> 
      <Route path="/menu" element={<Menu />}  /> 
      <Route path="*" element={<PageNotFound />}  /> 
      


    </Routes>
   </Router>
   </>
  )
}

export default App
