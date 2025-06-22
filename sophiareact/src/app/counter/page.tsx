'use client'
import React, { useState } from 'react'

const Counter = () => {
    const [count,setCount] = useState(10) 
const increment = ()=> {
  if(count <10 )
  {  setCount(count+1)}
  else {
    alert("Cannot Increment")
  }
}

const decrement = ()=>{
  if(count>0 )
  {  setCount(count -1)}
  else {
    alert("Cannot Decrement")
  }

}

const reset = ()=>{
    setCount(10)
  }

  return (
    <div> 
        {count}
        <button className='p-2 bg-black text-white m-2'
         onClick={increment} >Increment</button>

         <button className='p-2 bg-black text-white m-2' onClick={decrement}>Decrement</button>
         <button className='p-2 bg-black text-white m-2' onClick={reset}>Reset</button>


        </div>
  )
}

export default Counter