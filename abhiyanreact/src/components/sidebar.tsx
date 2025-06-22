import { MessageCircle, Settings, User } from 'lucide-react'
import React from 'react'

const Sidebar = () => {
  return (
    <div className='flex flex-col bg-gray-100 w-[50px] h-screen gap-2 '>
        <label ><MessageCircle className='m-3 cursor-pointer'/></label>
        <label><User className='m-3 cursor-pointer'/></label>
        <label><Settings className='m-3 cursor-pointer'/></label>
    </div>
  )
}

export default Sidebar