import SideBar from '@/components/sidebar'
import React from 'react'

const layout = ({children}) => {
  return (
    <div className='flex gap-2'>
       <SideBar />
        {children}</div>
  )
}

export default layout