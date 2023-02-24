import React from 'react'

const Employee = (props) => {
    

    let data= props.empDetails1
    console.log(data)
  return (
    <div>
      <table className='tableBox' border={"1px"} cellSpacing={"2px"} cellPadding={"2px"}  style={{backgroundColor: 'pink'}}>
        <tr cellSpacing={"10px"} >
            <th>Emp_id</th>
            <th>Emp_name</th>
            <th>Emp_sal</th>
            <th>Emp_des</th>
            <th>Emp_gender</th>
            <th>Emp_education</th>
            <th>Emp_ex</th>
            <th>Emp_companies</th>
            <th>Emp_image</th>
            <th>Emp_skills</th>
            <th>Emp_city</th>

        </tr>

        {data.map((x) => {
            return (
                <tr>
                    <td>{x.emp_id}</td>
                    <td>{x.emp_name}</td>
                    <td>{x.emp_sal}</td>
                    <td>{x.emp_des}</td>
                    <td>{x.emp_gender}</td>
                    <td>{x.emp_education}</td>
                    <td>{x.emp_ex}</td>

                    <td>
                        <ul>
                            <li>{x.emp_companies.previous}</li>
                            <li>{x.emp_companies.current}</li>
                        </ul>
                    </td>

                    <td>
                        <img src={x.emp_image} alt="" width={"100px"} />
                    </td>

                    <td>
                        <ul style={{listStyle: 'none'}}>
                        {x.emp_skills.map((x)=> {
                            return <li>{x}</li>
                        })}
                            </ul>
                        </td>


                    <td>{x.emp_city}</td>
                </tr>
            )
        } )}

      </table>
    </div>
  )
}

export default Employee
