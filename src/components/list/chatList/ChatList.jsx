import React, { useState } from "react";
import "./chatList.css";
import "../chatList/chatList.css";
import "../../list/chatList/chatList.css";

const ChatList = () => {
  const [addMore, setAddMore] = useState(false);
  return (
    <div className="chatList">
      <div className="search">
        <div className="searchBar">
          <img src="./search.png" alt="" />
          <input type="text" placeholder="Search" />
        </div>
        <img
          src={addMore ? "./minus.png" : "./plus.png"}
          alt="add More"
          className="add"
          onClick={() => setAddMore((prev) => !prev)}
        />
      </div>
      <div className="item">
        <img src="./avatar.png" alt="" />
        <div className="texts">
          <span>jane Doe</span>
          <p></p>
        </div>
      </div>
      <div className="item">
        <img src="./avatar.png" alt="" />
        <div className="texts">
          <span>jane Doe</span>
          <p></p>
        </div>
      </div>
      <div className="item">
        <img src="./avatar.png" alt="" />
        <div className="texts">
          <span>jane Doe</span>
          <p></p>
        </div>
      </div>
    </div>
  );
};

export default ChatList;
