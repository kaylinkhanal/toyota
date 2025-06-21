"use client";

import React from "react";
import { UserCircle, Users } from "lucide-react";

const onlineFriends = [
  { name: "Ram" },
  { name: "Shyam" },
  { name: "John" },
  { name: "Harry" },
  { name: "Sova" },
];

const SearchBar = () => {
  return (
    <div className="flex flex-col justify-start items-center min-h-screen bg-gray-100 pt-20 px-4">
      {/* Search Bar */}
      <div className="relative w-full max-w-md mb-6">
        <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-gray-500">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M21 21l-4.35-4.35M17 11a6 6 0 11-12 0 6 6 0 0112 0z"
            />
          </svg>
        </span>
        <input
          type="text"
          placeholder="Search..."
          className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-full shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
        />
      </div>

      {/* Profile Section */}
      <div className="w-full max-w-md space-y-4">
        <div className="flex items-center gap-3 p-3 bg-white rounded-lg shadow hover:bg-gray-100 cursor-pointer transition">
          <UserCircle className="h-6 w-6 text-blue-600" />
          <span className="text-gray-800 font-medium">Profile</span>
        </div>

        {/* Online Friends */}
        <div className="p-3 bg-white rounded-lg shadow">
          <div className="flex items-center gap-2 mb-3">
            <Users className="h-5 w-5 text-green-600" />
            <span className="font-medium text-gray-800">Online Friends</span>
          </div>

          <div className="space-y-2">
            {onlineFriends.map((friend, idx) => (
              <div key={idx} className="flex items-center gap-3 hover:bg-gray-50 p-2 rounded-md cursor-pointer">
                <div className="relative">
                  <div className="w-8 h-8 bg-gray-300 rounded-full flex items-center justify-center text-sm font-bold text-white">
                    {friend.name[0]}
                  </div>
                  <span className="absolute bottom-0 right-0 w-2.5 h-2.5 bg-green-500 rounded-full border-2 border-white"></span>
                </div>
                <span className="text-gray-700">{friend.name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchBar;
