import "./ChatBox.css";
import assets from "../../assets/assets";

const ChatBox = () => {
  return (
    <>
      <div className="chat-box">
        <div className="chat-user">
          <img src={assets.profile_img} alt="profile image" />
          <p>
            Chris Brown{" "}
            <img className="dot" src={assets.green_dot} alt="green dot" />
          </p>
          <img src={assets.help_icon} className="help" alt="help icon" />
        </div>
        <div className="chat-input">
          <input type="text" placeholder="Send a message" />
          <input type="file" id="image" accept="image/png, image/jpeg" hidden />
          <label htmlFor="image">
            <img src={assets.gallery_icon} alt="gallery icon" />
          </label>
          <img src={assets.send_button} alt="send button" />
        </div>
      </div>
    </>
  );
};

export default ChatBox;
