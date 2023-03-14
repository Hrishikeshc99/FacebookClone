 import React from 'react'
 import"./online.css"
 
 const Online = ({user}) => {
   return (
       <li className="rightBarFriend">
         <div className="rightbarProfileImgContainer">
           <img
             className="rightbarProfileImg"
             src={user.profilePicture}
             alt=""
           ></img>
           <span className="rightbarOnline"></span>
         </div>
         <span className="rightbarUsername">{user.username}</span>
       </li>
   );
 }
 
 export default Online
 