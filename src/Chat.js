import { Avatar, IconButton } from "@mui/material";
import React, { useState, useEffect } from "react";
import SearchIcon from "@mui/icons-material/Search";
import AttachFileIcon from "@mui/icons-material/AttachFile";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import EmojiEmotionsIcon from "@mui/icons-material/EmojiEmotions";
import MicIcon from "@mui/icons-material/Mic";
import "./css/chat.css";
import { useParams } from "react-router-dom";
import db from "./firebase";
import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
function Chat() {
  const { roomId } = useParams();
  const [roomName, setRoomName] = useState("");
  // const [message, messages] = useState("");
  const [input, setInput] = useState("");
  useEffect(() => {
    if (roomId) {
      db.collection("rooms")
        .doc(roomId)
        .onSnapshot((snapshot) => {
          setRoomName(snapshot.data().name);
        });
    }
  }, [roomId]);

  const sendMessage = (e) => {
    e.preventDefault();
    if (input === "") {
      return alert("please enter your message");
    }
    db.collection("rooms").doc(roomId).collection("message").add({
      name: "Deepak Gauttam",
      message: input,
      timestamp: firebase.firestore.FieldValue.serverTimestamp(),
    });
    setInput("");
  };
  return (
    <div className="chat">
      <div className="chat_header">
        <Avatar />
        <div className="chat_headerInfo">
          <h3>{roomName}</h3>
          <p>Last Seen...</p>
        </div>
        <div className="chat_right">
          <IconButton>
            <SearchIcon />
          </IconButton>
          <IconButton>
            <AttachFileIcon />
          </IconButton>
          <IconButton>
            <MoreVertIcon />
          </IconButton>
        </div>
      </div>
      <div className="chat_body">
        <p className="chat_message chat_reciever">
          <span className="chat_name">Monu Sharma</span>
          this is a test message
          <span className="chat_time">12:40 PM</span>
        </p>
        <p className="chat_message chat_reciever">
          <span className="chat_name">Monu Sharma</span>
          this is a test message
          <span className="chat_time">12:40 PM</span>
        </p>
        <p className="chat_message">
          <span className="chat_name">Monu Sharma</span>
          this is a test message
          <span className="chat_time">12:40 PM</span>
        </p>
      </div>
      <div className="chat_footer">
        <EmojiEmotionsIcon />
        <AttachFileIcon />
        <form onSubmit={sendMessage}>
          <input
            id="message"
            value={input}
            type="text"
            placeholder="Type your message"
            onChange={(e) => setInput(e.target.value)}
          />
          <input id="submit" type="submit" />
        </form>
        <MicIcon />
      </div>
    </div>
  );
}

export default Chat;
