import React from "react";
import { ThumbsDown, ThumbsUp } from "lucide-react";

const Comment = ({ item }) => {
  console.log(item);
  return (
    <div key={item.id} className="flex space-x-4 mb-6">
      <img
        src={item.avatarUrl}
        alt={item.username}
        className="w-10 h-10 rounded-full"
      />
      <div className="flex-1">
        <p className="font-semibold text-sm">{item.username}</p>
        <p className="text-sm text-gray-800 mt-1">{item.comment}</p>
        <div className="flex items-center mt-2 space-x-4 text-gray-500 text-sm">
          <button className="flex items-center space-x-1 hover:text-blue-500">
            <ThumbsUp size={16} />
            <span>12</span>
          </button>
          <button className="flex items-center space-x-1 hover:text-blue-500">
            <ThumbsDown size={16} />
          </button>
          <button className="hover:underline hover:text-blue-500">Reply</button>
        </div>

        {/* Replies */}
        {/*{item.replies?.length > 0 && (*/}
        {/*  <div className="ml-8 mt-4 space-y-4">*/}
        {/*    {item.replies.map((reply) => (*/}
        {/*      <div key={reply.id} className="flex space-x-4">*/}
        {/*        <img*/}
        {/*          src={reply.avatarUrl}*/}
        {/*          alt={reply.username}*/}
        {/*          className="w-8 h-8 rounded-full"*/}
        {/*        />*/}
        {/*        <div>*/}
        {/*          <p className="font-semibold text-sm">{reply.username}</p>*/}
        {/*          <p className="text-sm text-gray-800">{reply.comment}</p>*/}
        {/*        </div>*/}
        {/*      </div>*/}
        {/*    ))}*/}
        {/*  </div>*/}
        {/*)}*/}
      </div>
    </div>
  );
};

export default Comment;
