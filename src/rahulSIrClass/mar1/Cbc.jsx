import React, { Component } from 'react'

export default class Cbc extends Component {

    componentDidMount(){
        let form=document.querySelector("form")
        form.addEventListener("submit",(e)=>{
            e.preventDefault()

            let username=document.getElementById('username').value
            let password=document.getElementById('password').value
            console.log({username,password});
        })

    }


  render() {
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

            <button type="submit">SUBMIT</button>
        </form>
      </div>
    )
  }
}
