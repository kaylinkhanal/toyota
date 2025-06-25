'use client'
import { ThumbsUp } from 'lucide-react'
import React, { useState } from 'react'

const Facebook = () => {
  const [reaction, setReaction] = useState('')
  const handleReaction =(type) =>{
    console.log(reaction);
    switch(type){
      case 'like':
        setReaction('like') 
        break

      default :
        setReaction(reaction === type ? '' : type)
        break
    
    }
  }
  return (
    <div >
      <button onClick={()=>{handleReaction('like')}}
        className= {`${reaction === 'like' ? 'text-blue-500' : '' } p-5 m-10`} >
      <span className= ' flex ' >
        <ThumbsUp   color={`${reaction === 'like' ? 'blue' : ''}`}/>Like
      </span>
      </button>
    </div>
  )
}

export default Facebook