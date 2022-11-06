import './topbar.css'
import { Link } from "react-router-dom";
const Topbar = () => {
    const user = false;
    return (
        <div className='top'>
            <div className="topLeft">
                <i className="topIcon fa-brands fa-square-facebook"></i>
                <i className="topIcon fa-brands fa-square-twitter"></i>
                <i className="topIcon fa-brands fa-square-pinterest"></i>
                <i className="topIcon fa-brands fa-square-instagram"></i>
            </div>
            <div className="topCenter">
                <ul className="topList">
                    <li className='topListItem'><a href='/'>HOME</a></li>
                    <li className='topListItem'><a href='/about'>ABOUT</a></li>
                    <li className='topListItem'><a href='/contact'>CONTACT</a></li>
                    <li className='topListItem'><a href='/write'>WRITE</a></li>
                    <li className='topListItem'><a href='/logout'>{user && "LOGOUT"}</a></li>
                </ul>
            </div>
            <div className="topRight">
                {user ? (<img className='topImg' src="https://avatars.githubusercontent.com/u/89726870?v=4" alt="" />) : (<ul className="topList"><a className="topListItem" href='/register'>REGISTER</a><a className="topListItem" href='/login'>LOGIN</a></ul>)}
                <i className="topSearchIcon fa-solid fa-magnifying-glass"></i>
            </div>
        </div>
    )
}

export default Topbar