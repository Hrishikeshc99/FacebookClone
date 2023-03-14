import React from "react";
import "./rightbar.css";
import{Users} from "../../dummyData"
import Online from "../oniline/Online";

const Rightbar = () => {
  return (
    <div className="rightbar">
      <div className="rightbarWrapper">
        <div className="birthdayContainer">
          <img className="birthdayImg" src="assets/gift.png" alt="" />
          <span className="birthdayText">
            <b>Manish</b> and <b> 5 other friends</b> have a birthday today
          </span>
        </div>
        <img className="rightbarAd" src="/assets/ad.png" alt=""></img>
        <h4 className="rightbarTitle">online friends</h4>
             <ul className="rightbarFriendList">

        {Users.map(u=>(
          <Online key={u.id} user={u}/>
        ))}
        </ul>
      </div>
    </div>
  );
};

export default Rightbar;
