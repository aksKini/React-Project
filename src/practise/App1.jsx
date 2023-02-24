import React, { Component } from 'react'

 class App1 extends Component {

  state={
    name: "ShankarNarayana",
    subject: [
        "java",
        "python",
        "c++",
        "javaScript",
        "Marketing",
        "Sales",
        "acting",
        "cinema",
        "IT"
    ],
   netWorth: "200 crore",
   trainers:{
    prog: "Siddhesh",
    java:"Preetham",
    project: "HS Kirana",
    hr: "Darling Deepa"
   }
  }



  render() {
    return (
      <div>
        <h1>{this.state.name}</h1>
        <ul>
            {this.state.subject.map( (x) => {
             return   <li>{x}</li>
            })}
        </ul>
 
        <p> <strong> {this.state.trainers.java} </strong> </p>
      </div>
    )
  }
}


export default App1