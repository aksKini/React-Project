import React, { Component } from 'react'

 class App2 extends Component {

    state={
        "userId":"nirani",
        "jobTitleName":"Developer",
        "firstName":"Neil",
        "lastName":"Irani",
        "preferredFullName":"Neil Irani",
        "employeeCode":"E2",
        "region":"CA",
        "phoneNumber":"408-1111111",
        "emailAddress":"neilrirani@gmail.com"
        }

        
  render() {

   


    return (
      <table border="2px" cellPadding={"20px"}>
       <th>userId</th>
       <th>jobTitleName</th>
       <th>firstName</th>
       <th>lastName</th>
       <th>preferredFullName</th>
       <th>employeeCode</th>
       <th>region</th>
       <th>phoneNumber</th>
       <th>emailAddress</th>



       <tr>
        <td>{this.state.userId}</td>
        <td>{this.state.jobTitleName}</td>
        <td>{this.state.firstName}</td>
        <td>{this.state.lastName}</td>
        <td>{this.state.preferredFullName}</td>
        <td>{this.state.employeeCode}</td>
        <td>{this.state.region}</td>
        <td>{this.state.phoneNumber}</td>
        <td>{this.state.emailAddress}</td>
       </tr>




      </table>
    )
  }
}

export default App2