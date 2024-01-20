import "./topbar.css"
import vashu from "./vashu.png"
import { Link } from "react-router-dom"

export default function Topbar() {

  const user = false;

  return (
    <div className="top">
        <div className="topLeft">
        <a  href="https://bobbyhadz.com/blog/react-remove-link-underline" target="_blank">
          <i className="topIcon fa-brands fa-facebook"></i>
        </a>   

        <a href="https://twitter.com/20bit066" target="_blank">
         <i className="topIcon fa-brands fa-twitter"></i>
         </a>

        <a href="https://www.linkedin.com/in/vashu-agrawal-2268b0204/" target="_blank">
           <i className="topIcon fa-brands fa-linkedin"></i>
        </a>

         <i className="topIcon fa-brands fa-github"></i>
        </div>
        <div className="topCenter">
          <ul className="topList">
            <li className="topListItem">
              <Link className="link" to={"/home"} >HOME</Link>
            </li>
            <li className="topListItem">
             <Link className="link" to={"/about"}>ABOUT</Link> 
            </li>
            <li className="topListItem">
              <Link className="link" to={"/contact"}> CONTACT</Link>
            </li>
            <li className="topListItem">
             <Link className="link" to={"/write"}> WRITE</Link> 
            </li>
            <li className="topListItem">
             <Link className="link">{user && "LOGOUT"} </Link> 
            </li>
          </ul>
        </div>

        <div className="topRight">
          {user ? (<img src={vashu} alt="" className="topImg" 
          />
          ):
          (
            <ul className="topList">
              <li className="topListItem">
              <Link className="link" to={"/login"} >LOGIN</Link>
            </li>
            <li className="topListItem">
             <Link className="link" to={"/register"}>REGISTER</Link> 
            </li>
            </ul>

          )
          }
          
          <i className="topSearchIcon fa-solid fa-magnifying-glass"></i>
        </div>
     </div>
     
     
  )
}

