import "./sidebar.css"
import vashu from "../topbar/vashu.png"
export default function Sidebar() {
  return (
    <div className='sidebar'>
      <div className="sidebarItem">
        <span className="sidebarTitle">ABOUT ME</span>
        <img src={vashu} alt="hi"  className="sidebarImg"/>
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Reiciendis, laborum suscipit esse dignissimos deserunt quaerat delectus quae aliquam. </p>
      </div>
      <div className="sidebarItem">
        <span className="sidebarTitle">CATOGORIES</span>
        <ul className="sidebarList">
          <li className="sidebarListItem">Life</li>
          <li className="sidebarListItem">Music</li>
          <li className="sidebarListItem">Sport</li>
          <li className="sidebarListItem">Tech</li>
          <li className="sidebarListItem">Style</li>
          <li className="sidebarListItem">Cinema</li>
        </ul>
      </div>
      <div className="sidebarItem">
        <span className="sidebarTitle">FOLLOW US</span>
        <div className="sidebarScoical">
          <i className="sidebarIcon fa-brands fa-facebook"></i>
          <i className="sidebarIcon fa-brands fa-twitter"></i>
          <i className="sidebarIcon fa-brands fa-linkedin"></i>
          <i className="sidebarIcon fa-brands fa-github"></i>
        </div>
       </div>
    </div>
  )
}
