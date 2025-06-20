import { Input } from '@/components/ui/input'
import { Send } from 'lucide-react'
import React from 'react'

const meesagesList= [
    {
        id: 1,
        message: 'Hello, how are you?',
        sender: 'user',
        timestamp: '2023-10-01 10:00'
    },
    {
        id: 2,
        message: 'I am fine, thank you! How about you?',
        sender: 'others',
        timestamp: '2023-10-01 10:01'
    },
    {
        id: 3,
        message: 'I am doing well, thanks for asking!',
        sender: 'user',
        timestamp: '2023-10-01 10:02'
    }
]
const Inbox = () => {
  return (
    <div>
        <div className='flex flex-col'>
        {meesagesList.map((item, id) => {
                return (
                    <div key={id}>
                        {item.sender === 'user' ? (
                                <div className='bg-green-200 ml-4'>
                                    {item.message}
                                    </div>
                        ): ( 
                            <div className='bg-blue-200'>
                                {item.message}
                                </div>
                        )}
                        </div>
                )
            })}
        </div>
  
        <div className='absolute bottom-10 flex gap-2'>

            
        <Input className='w-256' placeholder='Enter Message'/>
        <Send/>
        </div>

    </div>
  )
}

export default Inbox