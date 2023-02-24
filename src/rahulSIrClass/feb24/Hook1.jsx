import React from 'react'
import {useState} from "react"
import { faker } from '@faker-js/faker';

const Hook1 = () => {

    let[name2,setName]= useState("akshay")

  return (
    

    <div>
      <h1>{name2}</h1>
      <button onClick={()=>{
        setName(faker.internet.email())
      }}>CLICK</button>
    </div>
  )
}

export default Hook1

