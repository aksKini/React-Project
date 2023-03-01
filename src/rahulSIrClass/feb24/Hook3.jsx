import React,{useState} from 'react'
import { faker } from '@faker-js/faker';

const Hook3 = () => {
    let[img,setImg] =useState(faker.image.avatar())

  return (
    <div>
        <img src={img} alt="" />
      <button onClick={()=>{
        setImg(faker.image.avatar())
      }}>CHANGE</button>
    </div>
  )
}

export default Hook3
