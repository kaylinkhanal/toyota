"use client"
import React, { useState } from 'react'
import { User2, MessageCircle, ChartArea } from 'lucide-react'
import {users} from '../app/(auth)/chat/chatbar'

const SideBar = () => {
  const [selected, setSelected] = useState<'chat' | 'users' | 'stats'>('chat')

  return (
    <div className="flex flex-col items-center bg-[#202c33] py-4 px-2 h-screen w-20 border-r border-[#222d34] fixed left-0 top-0 z-20">
      {/* Profile Avatar */}
      <div className="mb-8">
        <img
          src="default.jpg"
          alt="Profile"
          className="w-10 h-10 rounded-full object-cover border-2 border-[#25d366]"
        />
      </div>
      {/* Icons */}
      <div className="flex flex-col gap-8 flex-1">
        <button
          className={`text-[#aebac1] hover:text-white ${selected === 'chat' ? 'text-white' : ''}`}
          onClick={() => setSelected('chat')}
        >
          <MessageCircle size={28} />
        </button>
        <button
          className={`text-[#aebac1] hover:text-white ${selected === 'users' ? 'text-white' : ''}`}
          onClick={() => setSelected('users')}
        >
          <User2 size={28} />
        </button>
        <button
          className={`text-[#aebac1] hover:text-white ${selected === 'stats' ? 'text-white' : ''}`}
          onClick={() => setSelected('stats')}
        >
        </button>
      </div>
      {/* Overlay for user list */}
      {selected === 'users' && (
        <div className="absolute left-20 top-0 h-full w-64 bg-[#111b21] border-r border-[#222d34] shadow-lg z-10 flex flex-col">
          <div className="p-4 border-b border-[#222d34] text-[#aebac1] font-semibold">Users</div>
          <div className="flex-1 overflow-y-auto">
            {users.map(user => (
              <div key={user.id} className="flex items-center gap-3 px-4 py-3 hover:bg-[#222e35] cursor-pointer transition">
                <img src={user.image} alt={user.name} className="w-10 h-10 rounded-full object-cover" />
                <div className="text-[#e9edef] font-medium">{user.name}</div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  )
}

export default SideBar