import "./ChatBox.css";
import assets from "../../assets/assets";

const ChatBox = () => {
  return (
    <>
      <div className="chat-box">
        <div className="chat-user">
          <img src={assets.profile_img} alt="profile picture" />
          <p>
            Chris Brown{" "}
            <img className="dot" src={assets.green_dot} alt="green dot" />
          </p>
          <img src={assets.help_icon} className="help" alt="help icon" />
        </div>

        <div className="chat-msg">
          <div className="sender-msg">
            <p className="msg">
              Lorem ipsum dolor sit amet consectetur adipisicing
            </p>
            <div>
              <img src={assets.profile_img} alt="profile picture" />
              <p>2:30 PM</p>
            </div>
          </div>
          <div className="sender-msg">
            <img className="msg-img" src={assets.pic1} alt="image" />
            <div>
              <img src={assets.profile_img} alt="profile picture" />
              <p>2:30 PM</p>
            </div>
          </div>

          <div className="receiver-msg">
            <p className="msg">
              Lorem ipsum dolor sit amet consectetur adipisicing
            </p>
            <div>
              <img src={assets.profile_img} alt="profile picture" />
              <p>2:33 PM</p>
            </div>
          </div>
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
