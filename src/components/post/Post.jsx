import "./post.css"

export default function Post() {
  return (
    <div className='post'>
        <img 
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQkg3xIvd5F5PdBNHq02XJTO4I35KlUDiyA2A&usqp=CAU"
         alt="" className="postImg" />
      <div className="postInfo">
        <div className="postCats">
            <span className="postCat">Music</span>
            <span className="postCat">Life</span>
        </div>
        <span className="postTitle">
            Lorem ipsum dolor sit, amet 
        </span>
        <hr />
        <span className="postDate">1 hour ago</span>
      </div>
      <p className="postDesc">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus maiores laborum sint minus pariatur praesentium autem assumenda id et, ratione ipsam culpa itaque iusto sapiente molestiae in ut quaerat ipsum.
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae nisi fuga quo, perferendis accusamus hic illo saepe beatae nostrum quibusdam inventore! Sunt id, officiis aliquam temporibus autem iure optio quibusdam!
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo facere voluptatum cupiditate, vitae perferendis ab ad dicta, placeat earum explicabo fugiat nemo inventore harum pariatur expedita recusandae quo, voluptatibus reiciendis?
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem cumque culpa, beatae quae nam doloribus voluptates! At veniam sit et reiciendis quod officia magni, aperiam excepturi mollitia molestiae natus debitis.
      </p>
    </div>
  )
}
