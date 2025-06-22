import SideBar from '@/components/sidebar'
import React from 'react'

const layout = ({children}) => {
  return (
    <div className='flex gap-1'>
       <SideBar/>
        {children}
        </div>
  )
}

export default layout