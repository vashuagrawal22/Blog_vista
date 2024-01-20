import "./header.css"

export default function Header() {
  return (
    <div className="header">
        <div className="headerTitles">
         < span className="headerTitleSm"> React & Node</span>
         < span className="headerTitleLg"> Blog </span>
        </div>
      <img src="https://images.pexels.com/photos/355508/pexels-photo-355508.jpeg?cs=srgb&dl=pexels-pixabay-355508.jpg&fm=jpg" alt="" className="headerImg" />
    </div>
  )
}
