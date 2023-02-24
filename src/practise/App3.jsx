import React, { Component } from 'react'
import JSON from "./task.json"
import Employee from "./Employee.jsx"
import "./global.css"


 class App3 extends Component {

    constructor(){
        super()
        this.state = { empDetails: JSON}
    }
    

  render() {
    return (
      <div>
        <Employee empDetails1={this.state.empDetails} />
      </div>
    )
  }
}

export default App3