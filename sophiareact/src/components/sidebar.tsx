import { ChartArea, CircleUserRound, MessageCircle, Phone, Settings} from 'lucide-react'
import Link from 'next/link'
import React from 'react'

const SideBar = () => {
  return (
    <div>
        <div className='bg-gray-200 shadow-sm h-screen w-12 p-4'>
            <ul className='mt-6 '>
            <li className='mb-3 '><Link href='/chat' className='text-gray-700'>
            <MessageCircle/> </Link></li>
            <li> <Link href='/setting' className='text-gray-700'> <Phone/></Link></li>
            </ul>
             <ul className='mt-80'>
            <li className='mb-3'> <Link href='/setting' className='text-gray-700'> <Settings/></Link></li>
            <li className=''><Link href='/profile' className='text-gray-700'>
                <CircleUserRound/>
            </Link></li>
            </ul>
        </div>
    </div>
  )
}

export default SideBar