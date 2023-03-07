import React, {useState} from 'react'
import Card from './Card'
import LOGIN from "./loginModule.css"

function Signup(props) {
  let [email, setemail] = useState("")
  let [password, setpassword] = useState("")

  let emailHandler =(e)=>{
     setemail(e.target.value)
  }
  let passwordHandler =(e)=>{
    setpassword(e.target.value)
 }
 let submitHandler =(e)=>{
  e.preventDefault()
    props.onDetails({email, password})
 }

  return (
    <>
        <img src="https://static.xx.fbcdn.net/rsrc.php/y8/r/dF5SId3UHWd.svg" alt="" />
        <form action="" onSubmit={submitHandler}>
        <Card className={LOGIN.parent_box}>
            <h2>Welcome to facebook</h2><br />
            <h1>Sign up to Facebook</h1><br />
            <input type="text" name="" id="" placeholder="Email address or phone number" onChange={emailHandler} style={{marginBottom: "10px"}} />
            <br /><input type="password" name="" id="" placeholder='Password' onChange={passwordHandler}/>
            <br /><button type="submit">Sign Up</button>
            <br /><br />
            <div className={LOGIN.anchor}>
                <a href="#">Forgotten account?</a><br />
                <a href="#">Sign up for Facebook</a>
            </div>       
        </Card>
        </form>
    </>
  )
}

export default Signup
