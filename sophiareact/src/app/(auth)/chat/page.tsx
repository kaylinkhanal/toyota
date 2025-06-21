import SideBar from '@/components/sidebar'
import React from 'react'
import ChatBar from './chatbar'
import Inbox from './inbox'

const Chat = () => {
  return (
    <div>
      <div className='flex gap-2'>
      <ChatBar/>
      <Inbox/>
      </div>
    </div>
  )
}

export default Chat