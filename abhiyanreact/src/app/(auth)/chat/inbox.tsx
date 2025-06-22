import { Badge } from '@/components/ui/badge'
import { Input } from '@/components/ui/input'
import { MessageCircle, Send } from 'lucide-react'
import React from 'react'

const Inbox = () => {
  return (
    <div className='bg-gray-100'>
        <div className='bg-gray-200 w-screen h-[60px] flex center '>
            <label className='m-4 font-bold text-[20px] cursor-text'>Abhiyan Paudel</label>
            <Badge variant="destructive" className='bg-green-300 font-bold h-[20px] mt-[22px]'>Online</Badge>
        </div>
        
        <div className='bg-gray-200 w-max h-[40px] p-2 m-3 border rounded-[25px]'>
        <span>Hello! How are you?</span>
        </div>

        <div className='flex gap-2 absolute bottom-3 ml-2 w-[100%]'>
        <Input type="text" placeholder="Message" className='w-[60%]'/>
        <Send className='justify-center cursor-pointer m-2 hover:text-green-500'/>
        </div>
    </div>
  )
}

export default Inbox