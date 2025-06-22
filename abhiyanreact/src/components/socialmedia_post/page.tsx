import React from 'react'
import { Button } from '../ui/button'

const Post = (props) => {
  return (
    <div className='shadow-sm bg-white w-[300px] h-[400px] border rounded-[15px] m-[20px]'>
        <div className='flex m-[2px] items-center'>
            <img src= {props.element.pfp} alt="PFP" className='w-[45px] h-[45px] border rounded-[50%] m-[10px]'/>
            <label className='text-black font-bold'>@{props.element.username}</label>
        </div>
        <img src={props.element.post} alt="" className='w-[300px] h-[275px] mb-[10px]'/>

        <div>
          {/* <Button className='cursor-pointer bg-yellow-500 text-black hover:bg-black hover:text-white'>Hello</Button> */}
            <label className='m-[10px] cursor-pointer text-2xl'>❤️</label>
            <label className='m-[10px] cursor-pointer text-2xl'>💬</label>
             <label className='m-[10px] cursor-pointer text-2xl'>✈️</label>

        </div>
    </div>
  )
}

export default Post