import Topbar from "../../components/topbar/Topbar";
import LeftBar from "../../components/leftbar/LeftBar";
import Feed from "../../components/feed/Feed";
import RightBar from "../../components/rightbar/RightBar";
import "./home.scss";

export default function Home() {
  return (
    <div className="home">
        <Topbar />
        <div className="container">
          <LeftBar />
          <Feed />
          <RightBar />
        </div>
    </div>
  )
}
