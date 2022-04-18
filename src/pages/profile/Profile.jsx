import "./profile.scss";
import Topbar from "../../components/topbar/Topbar";
import LeftBar from "../../components/leftbar/LeftBar";
import Feed from "../../components/feed/Feed";
import RightBar from "../../components/rightbar/RightBar";

export default function Profile() {
  return (
    <>
        <Topbar />
        <div className="Profile">
            <div className="topProfile">
                <div className="wrapper">
                    <img className="coverPic" src="./assets/post.jpg" alt=""/>
                    <button className="btn">Thay đổi anh bìa
                    </button>
                    <div className="container">
                        <img className="avatarPic" src="./assets/sinobu.jpg" alt=""/>
                        <i className="icon fa-solid fa-camera"></i>
                        <div className="items"> 
                            <h1 className="userName">Hải lê</h1>
                            <h3 className="desc">Helloo</h3>
                        </div>
                    </div>
                </div>
            </div>
            <div className="botProfile">
                <div className="left">
                    <ul className="infor">
                        <li className="leftBarInfor">
                            <i className="icon address fa-solid fa-location-dot"></i>
                            <span>Hà Nội</span>
                        </li>
                    </ul>
                </div>
                <Feed />
                <RightBar />
            </div>
        </div>
    </>
  )
}
