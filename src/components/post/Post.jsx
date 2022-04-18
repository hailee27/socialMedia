import { useState } from "react";
import "./post.scss";

export default function Post() {
  const [like,setLike] = useState(0)
  const [isLike,setIsLike] = useState(false)

  const handleClick = () => {
    setLike(isLike?like-1:like+1)
    setIsLike(!isLike)
  }
  return (
    <div className="post">
      <div className="postWrapper">
        <div className="top">
          <div className="left">
            <img src="/assets/sinobu.jpg" alt=""/>
            <div className="container">
              <span className="userName">Hải</span>
              <span className="date">1 Hour ago.</span>
            </div>
          </div>
          <div className="right">
          <i className="icon fa-solid fa-ellipsis"></i>
          </div>
        </div>
        <div className="center">
          <div className="title">
            aloooo
          </div>
          <img className="postImg" src="./assets/me.jpg" alt=""/>
        </div>
        <div className="bottom">
          <div className="left">
          <i className="icon heart fa-solid fa-heart" onClick={handleClick}></i>
          <i className="icon like fa-solid fa-thumbs-up"onClick={handleClick}></i>
          <span className="postLikeCount">({like} người thích)</span>
        </div>
          <div className="right">
            (3) Comments
          </div>
        </div>
      </div>
    </div>
  )
}
