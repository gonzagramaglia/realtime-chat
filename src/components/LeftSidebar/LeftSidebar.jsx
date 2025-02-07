import assets from "../../assets/assets";
import "./LeftSidebar.css";

const LeftSidebar = () => {
  return (
    <>
      <div className="leftside">
        <div className="leftside-top">
          <div className="leftside-nav">
            <img src={assets.logo} alt="logo" className="logo" />
            <div className="menu">
              <img src={assets.menu_icon} alt="" />
              <div className="submenu">
                <p>Edit Profile</p>
                <hr />
                <p>Logout</p>
              </div>
            </div>
          </div>
          <div className="leftside-search">
            <img src={assets.search_icon} alt="search" />
            <input type="text" placeholder="Search..." />
          </div>
        </div>
        <div className="leftside-list">
          {Array(12)
            .fill("")
            .map((item, index) => (
              <div key={index} className="friends">
                <img src={assets.profile_img} alt="" />
                <div>
                  <p>Chris Brown</p>
                  <span>Hey, how r u?</span>
                </div>
              </div>
            ))}
        </div>
      </div>
    </>
  );
};

export default LeftSidebar;
