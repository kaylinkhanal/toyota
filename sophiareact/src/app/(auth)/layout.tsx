import SideBar from '@/components/sidebar'
import { NavigationMenu } from '@/components/ui/navigation-menu'
import React from 'react'

const Layout = ({children}) => {
  return (
    <div>
      <NavigationMenu className=''>
        <img src="logo.webp" alt='logo' className=' w-15 h-15 '></img>
        <text className='text-sm'>WhatsApp</text>
      </NavigationMenu>
    <div className='flex gap-0.5 '>
       <SideBar />
        {children}</div>
        </div>
  )
}

export default Layout