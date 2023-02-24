import React from 'react'
import {useState} from "react"

const Hook1 = () => {

    let[name2,setName]= useState("akshay")

  return (
    

    <div>
      <h1>{name2}</h1>
      <button onClick={()=>{
        setName("Virat")
      }}>CLICK</button>
    </div>
  )
}

export default Hook1

