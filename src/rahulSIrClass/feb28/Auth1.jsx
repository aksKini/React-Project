import React,{useState} from 'react'

const Auth1 = () => {

    let [authUser,setAuthUser] = useState(false)

    let AcceptedUser = ()=>{
        return (
            <>
            <nav>
                <ol>
                    <li>Logo</li>
                    <li>Menu</li>
                    <li>Contact</li>
                    <li>Search</li>
                </ol>
            </nav>
            </>
        )
    }

    let NOtAcceptedUser = ()=>{
        return (
            <>
            <nav>
                <ol>
                    <li>Login</li>
                    <li>Signup</li>
                    <li>Forgot Password</li>
                    
                </ol>
            </nav>
            </>
        )
    }




  return (

    <>
    {
        authUser ? <AcceptedUser /> : <NOtAcceptedUser />
    }
    </>
   
  )
}

export default Auth1
