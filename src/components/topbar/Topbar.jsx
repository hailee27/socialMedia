import { useRef, useState } from "react";
import "./topbar.scss";

export default function Topbar() {
    const search = useRef()
    const [open,setOpen] = useState(false)
    const handleClick = () => {
        search.current.focus()
    }
    const handleShow = () => {
        setOpen(!open)
    }
  return (
    <div className="topbar">
        <div className="left">
            <div className="logo">
                <h2>PgG.</h2>
            </div>
        </div>
        <div className="center">
          
                <form className="search">
                    <i className="iconSearch fa-solid fa-magnifying-glass" onClick={handleClick}></i>
                    <input ref={search} type="text" className="inputSearch" placeholder="Tìm kiếm..."/>
                </form>
            
        </div>
        <div className="right">
            <div className="wrapper">
                <div className="avatar">
                    <img src="./assets/sinobu.jpg" alt="" />
                    <h2>Hải</h2>
                </div>
                <div className="topbarIcon">
                   

                        <i className="icon fa-solid fa-user-group">

                        <span className="Items">2</span>
                        </i>
                        <i className="icon fa-brands fa-facebook-messenger">

                        <span className="Items">4</span>
                        </i>
                        <i className="icon fa-solid fa-bell" onClick={handleShow}>

                        <span className="Items">8</span>
                        </i>
    
                </div>
            </div>
                <div className={"dropbox "+(!open?"active":"")}>
                    hiii
                </div>
        </div>
    </div>
  )
}
