import { CircleUserRound, ListFilter, SquarePen } from 'lucide-react'
import React from 'react'
const users= [
    {
        id: 1,
        name: 'John Doe',
        image: 'https://via.placeholder.com/150'
    },
    {
        id: 2,
        name: 'Jane Smith',
        image: 'https://via.placeholder.com/150'
    },
    {
        id: 3,
        name: 'Alice Johnson',
        image: 'https://via.placeholder.com/150'
    }
]

const ChatBar = () => {
  return (
    <div className='bg-gray-50 w-80 h-screen  shadow-inner  rounded-md border-2'>
        <div className='flex flex-row mb-6 mt-3'>
            <span className='font-bold text-xl ml-5 mr-37'>Chats</span>
            <SquarePen className='mr-5'/>
                 <ListFilter/>
        </div>
       {users.map((item, id)=>{
        return (
            <div className='flex gap-5 mb-2 ml-5' key={id}>
                <CircleUserRound/>
                <span className=' text-md'>  {item.name}</span>
             </div>
        )
       })}
      
        </div>
  )
}

export default ChatBar



