import React from "react";
import { getRandomAvatar } from "../utils/helper.js";

const ChatMessage = ({ name, message }) => {
  return (
    <div
      key="1"
      className="flex items-center space-x-4 mb-2 p-2 shadow-sm rounded-md bg-gray-100 dark:bg-gray-900"
    >
      <img
        src={getRandomAvatar()}
        alt={name}
        className="w-8 h-8 rounded-full"
      />
      <div className="flex items-center space-x-2">
        <p className="font-bold text-sm">{name}</p>
        <p className="text-sm text-gray-800 ">{message}</p>
      </div>
    </div>
  );
};

export default ChatMessage;
