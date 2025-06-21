import React from 'react';
import SearchBar from './Sidebar';
import ChatUI from './messsage';

const Chat = () => {
  return (
    <div className="flex h-screen">
      <div className="w-1/3 border-r border-gray-200 bg-white">
      <SearchBar/>
    </div>

      <div className="w-2/3">
        <ChatUI/>
 </div>
    </div>
  );
};

export default Chat;
