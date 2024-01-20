import "./write.css"

export default function Write() {
  return (
    <div className="write">
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQkg3xIvd5F5PdBNHq02XJTO4I35KlUDiyA2A&usqp=CAU" alt="" className="writeImg" />
        <form action="" className="writeForm">
            <div className="writeFormGroup">
                <label htmlFor='fileInput'>
                    <i class="writeIcon fas fa-plus"></i>
                </label>
                <input type="file" id="fileInput" style={{display:"none"}}/>
                <input 
                  type="text"
                  placeholder="Title"
                  className="writeInput"
                  autoFocus={true}
                />
            </div>
            <div className="writeFormGroup">
                <textarea placeholder="Tell Your Story..." type="text" className="writeInput"></textarea>
            </div>
            <button className="writeSubmit">Publish</button>
        </form>
    </div>
  )
}
