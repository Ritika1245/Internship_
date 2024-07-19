'use client';
import React, { useState, useEffect } from "react";
import axios from "axios";
import { w3cwebsocket as W3CWebSocket } from "websocket";
import Image from 'next/image';
import "../chatbot/chatbot.css";

const client = new W3CWebSocket('ws://localhost:5000/chatbot/chatbot-query');

const Chatbot = () => {
  const [messages, setMessages] = useState([
    { user: "assistant", message: "Hey How can I help you today?" },
  ]);
  const [inputValue, setInputValue] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    client.onopen = () => {
      console.log('WebSocket Client Connected');
    };
    
    client.onmessage = (message) => {
      const data = JSON.parse(message.data);
      console.log("data ,", data);
      setMessages([...messages, { user: "assistant", message: data.response }]);
    };
    
    return () => {
      console.log("---------")
    };
  }, [messages]);

  const sendMessage = async () => {
    if (inputValue.trim().length > 0) {
      const newMessage = { user: "user", message: inputValue };
      setMessages([...messages, newMessage]);
      setInputValue("");
      setLoading(true);

      client.send(JSON.stringify({ query: inputValue }));

      setLoading(false);
    }
  };

  const CreateMessage = async () => {
    try {
      const newMessage = { user: "assistant", message: "Document is added to the chat." };
      alert('Document is added to the chat.');
    } catch (error) {
      console.error('Error generating document:', error);
      alert('Error generating document');
    }
  };
  return (
    <div className="flex justify-center content-center gap-5">
      <div className="main h-screen rounded-2xl flex flex-col mt-20 bg-gray-300 max-w-max mb-20 ">
      
        <div className="topper bg-gradient-to-tr from-[#46bacf] to-[#c180d0] p-5 rounded-2xl">
          <div className="name text-black font-bold text-2xl text-center ">StatusQuoAI</div>
        </div>
        <div className="msgs_cont flex-grow p-5 overflow-y-auto bg-grey-300 ">
          <ul id="list_cont">
            {messages.map((message, index) => (
              <li
                key={index}
                className={`rchat ${index % 2 === 0 ? "bg-gradient-to-tr from-[#ba11af] to-[#f23fff]" : "bg-white text-gray-900"
                  } p-3 rounded-md w-fit mb-3`}
              >
                {message.message}
              </li>
            ))}
          </ul>
        </div>
        <div className="bottom bg-gray-800 p-5 flex items-center rounded-xl">
          <input
            type="text"
            id="txt"
            placeholder="Send a message"
            className="flex-grow bg-transparent border-b-2 border-gray-600 outline-none text-black p-2 mr-5"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
          />
          <button
            className="uil uil-messagebg-green-500 w-10 h-10 text-white p-2 bg-white rounded-md hover:bg-green-600 mr-2"
            disabled={loading}
            onClick={CreateMessage}
          >{"⚡"}</button>
          <button
            className="uil uil-messagebg-green-500 w-10 h-10 text-white p-2 bg-black rounded-md hover:bg-green-600"
            disabled={loading}
            onClick={sendMessage}
          >{">"}</button>
        </div>
      </div>
      <div className="mt-20">
        <Image src="/chatbot.gif" width={200} height={400}></Image>
      </div>
    </div>
  );
};

export default Chatbot;
