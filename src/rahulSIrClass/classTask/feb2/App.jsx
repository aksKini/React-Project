import React, {useState} from 'react'
import "./app.css"
import Login from './Login'
import Signup from './Signup'

function App() {
  let[isLoggedIn , setIsLoggedIn] = useState(false)
  let[isSignedUp, setSignedUp] = useState(false)

  let signupdetails =(details)=>{
     if(details.email.includes("@") && details.password.length>4) {
        localStorage.setItem("email", details.email)
        localStorage.setItem("password", details.password)
        setSignedUp(true)
     }
  }
  let loginDetails = (details)=>{
    let email = localStorage.getItem("email")
    let password = localStorage.getItem("password")
    console.log(details);
    if(details.email === email && details.password=== password) {
        setIsLoggedIn(true)
    } else {
      alert("Invalid email or password")
    }
  }

  return (
    <div className="body">
        {!isSignedUp && <Signup onDetails={signupdetails}/>}
        {isSignedUp && !isLoggedIn && <Login onLogin={loginDetails}/>}
        {isSignedUp && isLoggedIn && (
  <div className="welcome-container">
    <h1>WELCOME TO FACEBOOK</h1>
  </div>
)}

    </div>
  )
}

export default App
