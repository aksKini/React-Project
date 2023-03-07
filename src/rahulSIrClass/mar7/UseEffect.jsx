import React,{useState,useEffect} from 'react'

const UseEffect = () => {

   let [count,setCount] = useState(0)
   let [input,setInput] = useState("")

   useEffect(
    function(){
        document.title=`you clicked ${count} times`
        console.log(`you clicked count ${count} times`)
        console.log(`you clicked input ${input.length} times`);
    },[input,count]
   )


  return (
    <div>
      <h1>{count}</h1>
      <input type="text" onChange={ (e)=>{
        setInput(e.target.value)
      }

      } />
      <button onClick={()=>{
        setCount(count+1)
      }}>+ Increment</button>
    </div>
  )
}

export default UseEffect
