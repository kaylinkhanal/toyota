import { Input } from "@/components/ui/input";
import { CircleUserRound, Mic, Paperclip, Send, Smile } from "lucide-react";
import React from "react";

const meesagesList = [
  {
    id: 1,
    message: "Hello, how are you?",
    sender: "user",
    timestamp: "2023-10-01 10:00",
  },
  {
    id: 2,
    message: "I am fine, thank you! How about you?",
    sender: "others",
    timestamp: "2023-10-01 10:01",
  },
  {
    id: 3,
    message: "I am doing well, thanks for asking!",
    sender: "user",
    timestamp: "2023-10-01 10:02",
  },
];

const Inbox = () => {
  return (
    <div>
      <div
        className="h-114 w-210 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "url('/whatsappBg.jpg')",
        }}
      >
        <div className="flex bg-gray-200 ">
          <CircleUserRound className="w-10 h-10 text-gray-600  m-3" />

          <div className="ml-2 mt-2">
            <text className="font-semibold"> Sophia (You) </text>
            <br></br>
            Message Yourself
          </div>
        </div>

        <div className="flex flex-col">
          {meesagesList.map((item, id) => {
            return (
              <div key={id} className="m-5">
                {item.sender === "user" ? (
                  <div className="bg-green-200 ml-150 p-3">{item.message}</div>

                ) : (
                  <div className="bg-blue-200 mr-150 p-3">{item.message}</div>
                )}
              </div>
            );
          })}
        </div>
      </div>
      <div className="absolute bottom-6 flex gap-2">
        <Smile />
        <Paperclip />
        <Input className="w-[55vw] border-2 " placeholder="Enter Message" />
        <Mic />
        <Send />
      </div>
    </div>
  );
};

export default Inbox;
