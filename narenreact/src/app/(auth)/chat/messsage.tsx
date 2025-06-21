"use client";
import React, { useState } from "react";
import { SendHorizonal } from "lucide-react";

const ChatUI = () => {
  const [messages, setMessages] = useState([
    { from: "ram", text: "Hey whatsup?", time: "10:01 AM" },
    { from: "me", text: "Yo! All good. You?", time: "10:02 AM" },
  ]);

  const [input, setInput] = useState("");

  const sendMessage = () => {
    if (!input.trim()) return;
    const time = new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" });
    setMessages([...messages, { from: "me", text: input, time }]);
    setInput("");
  };

  return (
    <div className="flex flex-col h-full w-full">
      {/* Chat Header */}
      <div className="px-4 py-2 bg-white shadow flex items-center gap-3">
        <img src="/avatar.jpg" alt="Ram" className="h-10 w-10 rounded-full" />
        <div>
          <p className="font-medium text-gray-800">Ram</p>
          <p className="text-xs text-green-500">Online</p>
        </div>
      </div>

      {/* Chat Messages */}
      <div className="flex-1 overflow-y-auto p-4 space-y-2 bg-gray-100">
        {messages.map((msg, index) => (
          <div key={index} className={`flex ${msg.from === "me" ? "justify-end" : "justify-start"}`}>
            <div
              className={`max-w-xs md:max-w-md p-3 rounded-lg text-sm ${
                msg.from === "me" ? "bg-green-100 text-gray-900" : "bg-white text-gray-800 shadow"
              }`}
            >
              {msg.text && <p>{msg.text}</p>}
              <div className="text-right text-[10px] text-gray-500 mt-1">{msg.time}</div>
            </div>
          </div>
        ))}
      </div>

      {/* Input Field */}
      <div className="p-3 bg-white border-t flex items-center gap-2">
        <input
          type="text"
          placeholder="Type a message"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && sendMessage()}
          className="flex-1 px-4 py-2 border rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <button onClick={sendMessage} className="p-2 rounded-full bg-green-500 text-white hover:bg-green-600">
          <SendHorizonal className="h-5 w-5" />
        </button>
      </div>
    </div>
  );
};

export default ChatUI;
