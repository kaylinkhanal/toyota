import React from 'react'

const Inbox = () => {
  return (
    <div className="flex-1 h-screen bg-[#222e35] flex flex-col">
      {/* Chat header */}
      <div className="h-16 px-6 flex items-center border-b border-[#222d34]">
        <div className="flex items-center gap-3">
          <img
            src="default.jpg"
            alt="Chat User"
            className="w-10 h-10 rounded-full object-cover"
          />
          <div>
            <div className="text-[#e9edef] font-medium">John Doe</div>
            <div className="text-xs text-[#aebac1]">online</div>
          </div>
        </div>
      </div>
      {/* Chat body */}
      <div className="flex-1 p-6 overflow-y-auto">
        <div className="flex flex-col gap-4">
          <div className="self-start bg-[#202c33] text-[#e9edef] px-4 py-2 rounded-lg max-w-xs">
            Hi there! 👋
          </div>
          <div className="self-end bg-[#005c4b] text-white px-4 py-2 rounded-lg max-w-xs">
            Hello! How are you?
          </div>
        </div>
      </div>
      {/* Chat input */}
      <div className="h-16 px-6 flex items-center border-t border-[#222d34] bg-[#202c33]">
        <input
          type="text"
          placeholder="Type a message"
          className="w-full px-4 py-2 rounded-full bg-[#2a3942] text-[#e9edef] outline-none"
          disabled
        />
      </div>
    </div>
  )
}

export default Inbox