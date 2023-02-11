import React from "react";

const Chat = ({ text, data, image }) => {
  return (
    <div className="chatText">
      <div className="chatImage">
        <img className="chatImage" src={image} />
      </div>

      <div className="mainWrap">
        <div className="chatBubble">
          <p>{text}</p>
        </div>

        <div className="bubbleInfo">
          <p>{data}</p>
        </div>
      </div>
    </div>
  );
};

export default Chat;
