import React from 'react'
import { Chatbar } from './chatbar'
import Inbox from './inbox'

const Chat = () => {
  return (
    <div className='flex gap-2'>
    <Chatbar/>
    <Inbox/>
    </div>
  )
}

export default Chat