import React from 'react'

const Fbc = () => {

    let handleForm= (e) => {

        e.preventDefault()

        let username=document.querySelector('#username').value
        let password=document.querySelector('#password').value
        console.log({username,password});

    }


  return (
   <div>
        <form action="">
            <label htmlFor="username">Username: </label>
            <br />
            <input type="text" id="username" />
            <br />

            <label htmlFor="password"> Password:</label>
            <br />
            <input type="text" id="password" />
            <br />

            <button type="submit" onClick={handleForm}>SUBMIT</button>
        </form>
      </div>
  )
}

export default Fbc
