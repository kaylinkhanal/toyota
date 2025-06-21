import SideBar from '@/components/sidebar'
import React from 'react'

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex h-screen w-screen bg-[#111b21]">
      <SideBar />
      <div className="flex-1 flex flex-col ml-20">
        {children}
      </div>
    </div>
  )
}

export default Layout