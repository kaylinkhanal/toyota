import React from 'react'
import ChatBar from './chatbar'
import Inbox from './inbox'

const Chat = () => {
  return (
    <div className="flex h-screen w-full">
      <ChatBar />
      <Inbox />
    </div>
  )
}

export default Chat