import './SidePage.css'
import { HiOutlineDotsHorizontal } from 'react-icons/hi'
import { GrChat } from 'react-icons/gr';
import { FiPhoneCall } from 'react-icons/fi'
import { RiContactsBookLine } from 'react-icons/ri'
import { IoNotificationsOutline } from 'react-icons/io5'
import {VscDeviceCameraVideo} from 'react-icons/vsc'
import {HiOutlinePencilAlt} from 'react-icons/hi'
import {BiSearch} from 'react-icons/bi'
import {IoKeypad} from 'react-icons/io5'
import {RiArrowDownSLine} from "react-icons/ri"

function SidePage() {
  return (
    <div className="sidepage-container">
      <div className="üser-info">
        <div className="user-ïtem">
        <div className="üser-avtar">SK</div>
        <p>Sai Krishna <span>₹ 0.00</span></p>
        </div>
        <HiOutlineDotsHorizontal className="dots"/>
      </div>

      <div className="search">
        <BiSearch className="search-icon"/>
      <input type="text" id="input" placeholder=" people,group & message" />
      <IoKeypad className="keypad"/>
      </div>
     
      <div className="user-options">
        <div id="user-chat">
          <GrChat className="icon"/>
          <p>Chat</p>
        </div>
        <div id="user-call">
          <FiPhoneCall  className="icon"/>
          <p>calls</p>
        </div>
        <div id="user-contacts">
          <RiContactsBookLine  className="icon"/>
          <p>Contacts</p>
        </div>
        <div id="user-notification">
          <IoNotificationsOutline  className="icon"/>
          <p>Notification</p>
        </div>
      </div>
      <div className="meet">
      <div className="new-section">      
        <div className="meeting">
        <VscDeviceCameraVideo/>
        <p id="chat">Meet Now </p><RiArrowDownSLine />
        </div>
        <div className="meeting">
       <HiOutlinePencilAlt/>
       <p id="chat">New Chat </p><RiArrowDownSLine />
      </div>
      </div>

      </div>
     <div className="recent-chats">
       <h5>RECENT CHATS</h5><RiArrowDownSLine />
     </div>

      <div className="recent-users">
        
          <div className="user">
          <div className="üser-avtar">SI</div>
          <p>Sai Krishana Interview</p>
           </div>
      
          <div  className="user">
          <div className="üser-avtar">SK</div>
          <p>Sujata kirar</p>
        
        </div>
      </div>
    </div>
  );
}
export default SidePage;
