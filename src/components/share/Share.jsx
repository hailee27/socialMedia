import "./share.scss";

export default function Share() {
  return (
    <div className="share">
        <div className="wrapper">
            <div className="top">
                <img src="./assets/sinobu.jpg" alt=""/>
                <input className="title" placeholder="Say something..."/>
            </div>
            <hr className="line" />
            <div className="bottom">
                <div className="options">
                    <div className="option">
                        <i className="icon Img fa-solid fa-images"></i>
                        <span>Ảnh/Video</span>
                    </div>
                    <div className="option">
                        <i className="icon Tag fa-solid fa-tags"></i>
                        <span>Tag</span>
                    </div>
                    <div className="option">
                        <i className="icon Smile fa-regular fa-face-smile"></i>
                        <span>Cảm xúc/Hoạt động</span>
                    </div>
                    <button>Đăng</button>
                </div>
            </div>
        </div>
    </div>
  )
}
