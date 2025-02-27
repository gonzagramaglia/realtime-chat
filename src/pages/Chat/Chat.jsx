import LeftSidebar from "../../components/LeftSidebar/LeftSidebar";
import ChatBox from "../../components/ChatBox/ChatBox";
import RightSidebar from "../../components/RightSidebar/RightSidebar";
import "./Chat.css";

const Chat = () => {
  return (
    <>
      <div className="chat">
        <div className="chat-container">
          <LeftSidebar />
          <ChatBox />
          <RightSidebar />
        </div>
      </div>
    </>
  );
};

export default Chat;
