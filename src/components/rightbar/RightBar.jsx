import "./rightBar.scss";

export default function RightBar() {
  return (
    <div className="rightBar">
        <div className="wrapper">
            <h3>Được tài trợ</h3>
          <div className="adv">
            <img src="./assets/lol.jpg" alt=""
            />
            <span>Liên Minh huyện thoại</span>
          </div>
          <div className="adv">
            <img src="./assets/post.jpg" alt=""
            />
            <span>Genshin impart</span>
          </div>
          <hr className="line" />
          <div className="items">
            <h3>Người liên hệ</h3>
              <div className="item">
                <i className="icon fa-solid fa-magnifying-glass"></i>
                <i className="icon fa-solid fa-video"></i>
                <i className="icon fa-solid fa-ellipsis"></i>
              </div>
          </div>
            <ul className="rightBarList">
                <li className="rightBarItem">
                  <div className="imgContainer">
                    <img src="./assets/sinobu.jpg" alt="" />
                    <span className="online"></span>
                  </div>
                  <span className="name">Hải</span>
                </li>
            </ul>
        </div>
    </div>
  )
}
