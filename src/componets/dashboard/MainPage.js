import React from 'react';
import { RiPencilLine } from 'react-icons/ri'
import './Mainpage.css'


function MainPage() {
  return (
    <div className="info">
      <div className="welcome">
        <h1>Welcome, Sai</h1>
        <div className="ävatar">SK</div>
        <p className="description">Tell your friends what you're up to <RiPencilLine /></p>
        <button className="start-chat">Start a conversation</button>
        <p>Search for someone to start chatting with or go to contacts to see who is available.</p>
        <h3>Not you?<button className="account">checkaccount</button></h3>
      </div>
    </div>
  );
}
export default MainPage;

