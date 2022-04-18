import "./leftBar.scss";

export default function LeftBar() {

  return (
    <div className="leftBar">
            <ul className="leftBarList">
                <li className="leftBarItem">
                  <img src="./assets/sinobu.jpg" alt=""/>
                    <span>Hải</span>
                </li>
                <li className="leftBarItem">
                  <i className="icon fa-solid fa-rss"></i>
                  <span>Feed</span>
                </li>
                <li className="leftBarItem">
                  <i className="icon fa-solid fa-tv"></i>
                  <span>Watch</span>
                </li>
                <li className="leftBarItem">
                  <i className="icon fa-solid fa-users"></i>
                  <span>Nhóm</span>
                </li>
                <li className="leftBarItem">
                  <i className="icon fa-solid fa-clock-rotate-left"></i>
                  <span>Kỉ niệm</span>
                </li>
                <li className="leftBarItem">
                  <i className="icon fa-solid fa-shop"></i>
                  <span>Store</span>
                </li>
                <li className="leftBarItem">
                  <i className="icon fa-solid fa-calendar-day"></i>
                  <span>Sự kiện</span>
                </li>
                <li className="leftBarItem">
                  <i className="icon showMore fa-solid fa-angle-down"></i>
                  <span>Xem Thêm</span>
                </li>
            <hr className="line"/>
              <div className="underBar">
                <h3>Lối tắt của bạn</h3>
                <li className="leftBarItem">
                  <i className="icon fa-solid fa-gamepad"></i>
                  <span>Game</span>
                </li>
                <li className="leftBarItem">
                  <img  className="imgIcon" src="./assets/sinobu.jpg" alt=""/>
                    <span>Anime+</span>
                </li>
                <li className="leftBarItem">
                  <img  className="imgIcon" src="./assets/me.jpg" alt=""/>
                    <span>Luyện thi các cấp(VNE)</span>
                </li>
                <li className="leftBarItem">
                  <img  className="imgIcon" src="./assets/post.jpg" alt=""/>
                    <span>FrontEnd (reactjs)</span>
                </li>               
                <li className="leftBarItem">
                  <i className="icon fa-solid fa-location-dot"></i>
                  <span>Vị trí</span>
                </li>
                 <li className="leftBarItem">
                  <img  className="imgIcon" src="./assets/sinobu.jpg" alt=""/>
                    <span>The Anime</span>
                </li>
                <li className="leftBarItem">
                  <i className="icon showMore fa-solid fa-angle-down"></i>
                  <span>Xem Thêm</span>
                </li>
              </div>
            </ul>
    </div>
  )
}
