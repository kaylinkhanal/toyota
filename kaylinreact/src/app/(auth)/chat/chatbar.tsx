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
    <div className='bg-gray-100 w-72 h-screen'>
       
       {users.map((item, id)=>{
        return (
            <div key={id}>
                {item.name}
             </div>
        )
       })}
        </div>
  )
}

export default ChatBar