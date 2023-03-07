import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import "./app.css"
import Home from './Home';
import Login from './Login';
import Signin from './Signin';

function App() {
  return (
  <Router>
      <Routes>
         <Route path="/" element={<Home />}/>
         <Route path="/login" element={<Login />}/>
         <Route path="/signin" element={<Signin/>}/>
      </Routes>
  </Router>
  ) 
}
export default App
