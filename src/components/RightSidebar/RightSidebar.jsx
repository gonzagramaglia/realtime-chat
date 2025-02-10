import "./RightSidebar.css";
import assets from "../../assets/assets";
import { logout } from "../../config/firebase";

const RightSidebar = () => {
  return (
    <>
      <div className="rightside">
        <div className="rightside-profile">
          <img src={assets.profile_img} alt="profile picture" />
          <h3>
            Chris Brown <img src={assets.green_dot} className="dot" />
          </h3>
          <p>Hey there, I&apos;m Chris</p>
        </div>
        <hr />
        <div className="rightside-media">
          <p>Media</p>
          <div>
            <img src={assets.pic1} alt="" />
            <img src={assets.pic2} alt="" />
            <img src={assets.pic3} alt="" />
            <img src={assets.pic4} alt="" />
            <img src={assets.pic1} alt="" />
            <img src={assets.pic2} alt="" />
          </div>
        </div>
        <button onClick={() => logout()}>Logout</button>
      </div>
    </>
  );
};

export default RightSidebar;
