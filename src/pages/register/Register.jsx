import "./register.css"
import { Link } from "react-router-dom"

export default function Register() {
  return (
   <div className="register">
    <div className="borderx">
      <div className="borin">

    <span className="registerTitle">Register</span>
    <form action="" className="registerForm">
      <label >Email</label>
      <input type="text" className="registerInput" placeholder="Enter Your Name"/>
      <label >Password</label>
      <input type="password" className="registerInput" placeholder="Enter Your Password"/>
      <button className="registerButton">Register</button>
    </form>
      </div>
      </div>
    <button className="registerLoginButton">
    <Link className="link" to={"/login"}>Login</Link></button>
   </div>
  )
}
