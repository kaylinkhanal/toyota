import React from 'react'
export const users= [
    {
        id: 1,
        name: 'John Doe',
        image: "default.jpg"
    },
    {
        id: 2,
        name: 'Jane Smith',
        image: "default.jpg"
    },
    {
        id: 3,
        name: 'Alice Johnson',
        image: "default.jpg"
    }
]

const ChatBar = () => {
  return (
    <div className="bg-[#111b21] w-80 h-screen border-r border-[#222d34] flex flex-col">
      {/* Header */}
      <div className="p-4 flex items-center gap-3 border-b border-[#222d34]">
        <img
          src="default.jpg"
          alt="Profile"
          className="w-10 h-10 rounded-full object-cover"
        />
        <span className="text-[#aebac1] font-semibold">Siddartha Kunwar</span>
      </div>
      {/* Search */}
      <div className="p-3 border-b border-[#222d34]">
        <input
          type="text"
          placeholder="Search or start new chat"
          className="w-full px-3 py-2 rounded bg-[#202c33] text-[#aebac1] outline-none"
        />
      </div>
      {/* User List */}
      <div className="flex-1 overflow-y-auto">
        {users.map((item) => (
          <div
            key={item.id}
            className="flex items-center gap-3 px-4 py-3 hover:bg-[#222e35] cursor-pointer transition"
          >
            <img
              src={item.image}
              alt={item.name}
              className="w-10 h-10 rounded-full object-cover"
            />
            <div>
              <div className="text-[#e9edef] font-medium">{item.name}</div>
              <div className="text-xs text-[#aebac1]">Last message preview...</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default ChatBar