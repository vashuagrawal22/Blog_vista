import Sidebar from "../../components/sidebar/Sidebar"
import"./settings.css"

export default function Settings() {
  return (
    <div className="settings">
        <div className="settingsWrapper">
            <div className="settingsTitle">
            <span className="settingsUpdateTitle">
                Update Your Account 
            </span>
            <span className="settingsDeleteTitle">
             Delete Account
             </span>
            </div>
        <form action="" className="settingsForms">
            <label >Profile Picture</label>
            <div className="settingsPP">
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQkg3xIvd5F5PdBNHq02XJTO4I35KlUDiyA2A&usqp=CAU" 
                />
                <label htmlFor="FileInput">
                <i class=" settingsPPIcon fa-solid fa-user"></i>
                </label> 
                <input type="file" id="FileInput" style={{display:"none"}}/>
            </div>
                <label >Username</label>
                <input type="text" placeholder="Vashu" />
                <label >Email</label>
                <input type="email" placeholder="vashu@23gmail.com" />
                <label >Password</label>
                <input type="password" placeholder="*****" />
                <button className="settingsSubmit">Update</button>
        </form>
        </div>
      <Sidebar/>
    </div>
  )
}
