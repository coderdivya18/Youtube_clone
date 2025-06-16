import React, { useEffect, useState } from "react";
import ChatMessage from "./ChatMessage.jsx";
import { useDispatch, useSelector } from "react-redux";
import { addMessage } from "../utils/slice/liveChatSlice.js";
import { getRandomComment, getRandomName } from "../utils/helper.js";

const LiveChat = () => {
  const [liveMessage, setLiveMessage] = useState("");
  const dispatch = useDispatch();
  const chatMessages = useSelector((store) => {
    return store.livechat.messages;
  });

  //Meesage Submit
  const handleMessageSubmit = (e) => {
    e.preventDefault();
    dispatch(
      addMessage({
        name: "Divya ",
        message: liveMessage,
      }),
    );
    setLiveMessage("");
  };

  //API POLLING
  useEffect(() => {
    const timer = setInterval(() => {
      dispatch(
        addMessage({
          name: getRandomName(),
          message: getRandomComment(),
        }),
      );
    }, 3000);

    return () => clearInterval(timer);
  }, []);

  return (
    <>
      <div className="p-2 ml-2 w-full h-[600px] border border-gray-300 rounded-lg bg-slate-100 overflow-hidden overflow-y-scroll flex flex-col-reverse ">
        <div>
          <h2 className="font-bold pb-4">Live Chat</h2>
          {chatMessages.map((chat, index) => (
            <ChatMessage name={chat.name} message={chat.message} key={index} />
          ))}
        </div>
      </div>
      <form onSubmit={handleMessageSubmit}>
        <input
          type="text"
          className="border border-gray-300 p-2 w-80 rounded-lg my-3 ml-2 "
          placeholder="write something here..."
          value={liveMessage}
          onChange={(e) => setLiveMessage(e.target.value)}
        />
        <button className="ml-2 bg-green-600 p-2 rounded-md text-white cursor-pointer">
          {" "}
          Send
        </button>
      </form>
    </>
  );
};

export default LiveChat;
