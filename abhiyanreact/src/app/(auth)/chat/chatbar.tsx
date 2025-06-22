import { Input } from '@/components/ui/input'
import React from 'react'
const userName = [
    { id: 1, name: 'Abhiyan Paudel', message: 'Hello! How are you?' },
    { id: 2, name: 'Deeparshan Mainali', message: 'You: WhatsUp?' },
    { id: 3, name: 'Shyam Shrestha', message: 'You: Hahaahhaha' }

]
export const Chatbar = () => {
    return (
        <div className='w-115 bg-gray-100'>
            <Input type="search" placeholder='Search' className='m-3 w-110'></Input>
            {
                userName.map((items,index)=>{
                    return(
                        <div key={index} className='flex flex-col m-2 bg-gray-200 p-2 cursor-pointer'>
                            <label className='font-bold text-[20px] cursor-pointer'>{items.name}</label>
                            <label>{items.message}</label>
                        </div>
                    )
                })
            }
        </div>
    )
}
