import React from 'react'
import {useState} from "react"

const Hook1 = () => {

    let[name1,setName]= useState("akshay")

  return (
    

    <div>
      <h1>{name1}</h1>
      <button onClick={()=>{
        setName("Virat")
      }}>CLICK</button>
    </div>
  )
}

export default Hook1

