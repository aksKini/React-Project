import React from 'react'
import {useState,useEffect} from 'react'

const UseEffect1 = () => {
   
     let [width,setWidth]=useState(window.innerWidth)   
     let [height,setHeight]=useState(window.innerHeight)   

     useEffect(
        function(){
            window.addEventListener("resize", (e)=>{
                console.log({width,height})
                
                setWidth(e.target.innerWidth)
                setHeight(e.target.innerHeight)
            }

            )

        },[width,height]
     )


  return (
    <div>
      <h1>{width}</h1>
      <h1>{height}</h1>
    </div>
  )
}

export default UseEffect1
