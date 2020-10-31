import React, { useState } from "react";
import "./ChatScreen.css";
import { Avatar } from "@material-ui/core";
const ChatScreen = () => {
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState([
    {
      name: "pawan",
      image:
        "https://www.hindustantimes.com/rf/image_size_960x540/HT/p2/2020/04/20/Pictures/baby-cat-inside-blue-jeans-pocket_5da62eee-82ca-11ea-a351-6978c1d205f3.jpg",
      message: "whats up"
    },
    {
      name: "pawan",
      image:
        "https://www.hindustantimes.com/rf/image_size_960x540/HT/p2/2020/04/20/Pictures/baby-cat-inside-blue-jeans-pocket_5da62eee-82ca-11ea-a351-6978c1d205f3.jpg",
      message: "whats up"
    },
    {
      name: "pawan",
      image:
        "https://www.hindustantimes.com/rf/image_size_960x540/HT/p2/2020/04/20/Pictures/baby-cat-inside-blue-jeans-pocket_5da62eee-82ca-11ea-a351-6978c1d205f3.jpg",
      message: "whats up"
    },
    {
      message: "whats up"
    }
  ]);

  const handleSend = e => {
    e.preventDefault();
    if (input) {
      setMessages([...messages, { message: input }]);
      setInput("");
    }
  };
  return (
    <div className="chatScreen">
      <p className="chatScreen__time">YOU MATCHED WITH PAWAN ON 10/08/20</p>
      {messages.map((message, index) => {
        return message.name ? (
          <div className="chatScreen__msg" key={index}>
            <Avatar src={message.image} alt={message.name} />
            <p className="chatScreen__text">{message.message}</p>
          </div>
        ) : (
          <div className="chatScreen__msg" key={index}>
            <p className="chatScreen__user">{message.message}</p>
          </div>
        );
      })}
      <div className="chatScreen__input">
        <form>
          <input
            value={input}
            onChange={e => setInput(e.target.value)}
            type="text"
            placeholder="Type a message...."
          />
          <button onClick={handleSend}>SEND</button>
        </form>
      </div>
    </div>
  );
};

export default ChatScreen;
