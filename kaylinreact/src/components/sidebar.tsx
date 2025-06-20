import { ChartArea, MessageCircle, User2 } from 'lucide-react'
import Link from 'next/link'
import React from 'react'

const SideBar = () => {
  return (
    <div>
        <div className='bg-white shadow-sm h-screen w-12 p-4'>
            <ul className='mt-4'>
            <li className='mb-2'><Link href='/chat' className='text-gray-800'>
            <MessageCircle/> </Link></li>
            <li className='mb-2'><Link href='/profile' className='text-gray-600'>
                <User2/>
            </Link></li>
            </ul>
        </div>
    </div>
  )
}

export default SideBar