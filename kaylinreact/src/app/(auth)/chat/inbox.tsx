import { Input } from '@/components/ui/input'
import { Send } from 'lucide-react'
import React from 'react'

const Inbox = () => {
  return (
    <div>
        <div className='absolute bottom-10 flex gap-2'>
        <Input className='w-[70vw]' placeholder='Enter Message'/>
        <Send/>
        </div>

    </div>
  )
}

export default Inbox