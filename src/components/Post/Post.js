import React, { useState } from "react";
import "./post.css";
import { MoreVert } from "@mui/icons-material";
import { Users } from "../../dummyData";

function Post({ post }) {
  // const user = Users.filter((u) => u.id === 1);
  // console.log(user[0].username);
  const[like,setLike]=useState(post.like)
  const [isliked, setIsLiked] = useState(false);

  const likeHandler=(e)=>{
    setLike(isliked ? like-1 : like+1)
    setIsLiked(!isliked)
  };;

  return (
    <div className="Post">
      <div className="postWrapper">
        <div className="postTop">
          <div className="postLeft">
            <img
              className="postProfileImg"
              src={Users.filter((u) => u.id === post.userId)[0].profilePicture}
              alt=""
            ></img>
            <span className="postUsername">
              {Users.filter((u) => u.id === post.userId)[0].username}
            </span>
            <span className="postdate">{post.date}</span>
          </div>
          <div className="postTopRight">
            <MoreVert className="morevert" />
          </div>
        </div>

        <div className="postCenter">
          <span className="postText"> {post?.desc}</span>
          <img className="postImg" src={post.photo} />
        </div>
        <div className="postBottom">
          <div className="postBottomLeft">
            <img
              className="likeIcon"
              src="/assets/like.png"
              onClick={likeHandler}
              alt=""
            />
            <img
              className="likeIcon"
              src="/assets/heart.png"
              onClick={likeHandler}
              alt=""
            />
            <span className="postLikeCounter">{like} Likes</span>
          </div>
          <div className="postBottomRight">
            <span className="postCommentText">{post.comment} comments</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Post;
