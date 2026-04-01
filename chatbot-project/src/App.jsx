import { useState, useEffect } from "react";
import { ChatInput } from "./components/ChatInput";
import { Chatbot } from "supersimpledev";
import ChatMessages from "./components/ChatMessages";
import RobotProfileImage from "./assets/robot.png";
import UserProfileImage from "./assets/user.png";
import "./App.css";

function App() {
  const [chatMessages, setChatMessages] = useState([
    {
      message: "hello chatbot",
      sender: "user",
      id: "id1",
    },
    {
      message: "Hello! How can I help you?",
      sender: "robot",
      id: "id2",
    },
    {
      message: "can you get me todays date?",
      sender: "user",
      id: "id3",
    },
    {
      message: "Today us September 27",
      sender: "robot",
      id: "id4",
    },
  ]);
  // const [chatMessages, setChatMessages] = array;
  // const chatMessages = array[0];
  // const setChatMessages = array[1];

  useEffect(() => {
    Chatbot.addResponses({
      "goodbye": "Goodbye. Have a great day!",
      "who are you": "I am a chatbot",
      "give me a unique id": function () {
        return `Sure! Here's a unique ID: ${crypto.randomUUID()}`;
      }
    });
  }, []);

  return (
    <div className="app-container">
      <ChatMessages chatMessages={chatMessages} />
      <ChatInput
        chatMessages={chatMessages}
        setChatMessages={setChatMessages}
      />
    </div>
  );
}

export default App;


/*
TO DO PROBLEM STATEMENT: 5i, 5j, 5k
*/
