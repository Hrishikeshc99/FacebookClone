import React from "react";
import "./Topbar.css";
import { Search, Person, Chat, Notifications } from "@mui/icons-material";

const Topbar = () => {
  return (
    <div className="topbarcontainer">
      <div className="topbarleft">
        <span className="topbarlogo">Facebook</span>
      </div>

      <div className="topbarcenter">
        <div className="searchbar">
          <Search />
          <input
            placeholder="Search for friend and video"
            className="searchinput"
          />
        </div>
      </div>

      <div className="topbarright">
        <div className="topbarlinks">
          <span className="topbarlink">Homepages</span>
          <span className="topbarlink">Timeline</span>
        </div>
        <div className="topbaricons">
          <div className="topbarIconItem">
            <Person />
            <span className="topbarIconBadge">1</span>
          </div>
          <div className="topbarIconItem">
            <Chat />
            <span className="topbarIconBadge">1</span>
          </div>
          <div className="topbarIconItem">
            <Notifications />
            <span className="topbarIconBadge">1</span>
          </div>
        </div>
        <img src="/assets/person/1.jpeg" alt="" className="topbarImg"></img>
      </div>
    </div>
  );
};

export default Topbar;
