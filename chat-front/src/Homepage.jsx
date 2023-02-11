import React from "react";
import "./Homepage.css";
import Chat from "./components/Chat";
import { useState } from "react";
import blackNinja from "./art/black_ninja.png";

const Homepage = (props) => {
  const [message, setMessage] = useState("");
  return (
    <section>
      <div className="hero">
        <div className="chatMessage">
          <Chat text="hello" image={blackNinja}></Chat>
          <Chat text="yup" image={blackNinja}></Chat>
          <Chat text="yup" image={blackNinja}></Chat>
          <Chat text="yup" image={blackNinja}></Chat>
        </div>
      </div>

      <div className="Send">
        <input
          className="textInput"
          type="text"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />
        <button className="header-cta">
          <a href="">Send</a>
        </button>
      </div>
    </section>
  );
};

export default Homepage;
