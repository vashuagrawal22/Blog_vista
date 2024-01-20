import "./singlePost.css"

export default function SinglePost() {
  return (
    <div className="singlePost">
       <div className="singlePostWrapper">
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQkg3xIvd5F5PdBNHq02XJTO4I35KlUDiyA2A&usqp=CAU" 
        alt="" className="singlePostImg" />
        <h1 className="singlePostTitle">
          Hye whats UUp how are you heey !!!!
          <div className="singlePostEdit">
          <i class="singlePostIcon fa-regular fa-pen-to-square"></i>
          <i class="singlePostIcon fa-solid fa-trash-can"></i>
          </div>
        </h1>
        <div className="singlePostInfo">
          <span className="singlePostAuthor">Author: <b>Vashu</b>
          </span>
          <span className="singlePostDate">1 hour ago</span>
        </div>
        <p className="singlePostDesc">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vero assumenda odit sed tempora possimus explicabo consectetur eveniet deleniti deserunt minus accusamus, 
          ipsa nulla cupiditate maiores? Cumque nam quo voluptates eaque!
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ab eaque, esse, officiis numquam atque, iure laborum error molestias optio magnam enim. 
          Nostrum eius reprehenderit ipsam est. Dolorem neque earum molestias?
          Lorem ipsum dolor sit amet consectetur adipisicing elit. In earum, mollitia, amet molestias odit placeat, optio quaerat nisi 
          quia iure eum odio tenetur illum unde quis tempore sapiente rem nulla.
        </p>
       </div>
    </div>
  )
}
