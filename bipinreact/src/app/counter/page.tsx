'use client'

import React, { useState } from 'react'

const Counter = () => {
  let[a,setA] = useState(10)
  
    
    const increment = () =>{
      if(a<10){
setA(a+1);

      }
      if(a==10){
        alert("cannot be more than 10")
      }
       
     
        console.log(a);
    }
    const decrement = () =>{
      setA(a-1);
      console.log(a);
    }
  return (
    <div>{a}
    <button onClick={increment} className='p-2 bg-amber-500' >client this button</button>
    <button onClick={decrement} className='p-2 bg-amber-950'>Decrement</button>
    </div>
  )
}

export default Counter