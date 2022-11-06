import './write.css'

const Write = () => {
  return (
    <div className='write'>
        <img className="writeImg" src="https://media.istockphoto.com/photos/canadian-rockies-banff-national-park-dramatic-landscape-picture-id1342152935?b=1&k=20&m=1342152935&s=170667a&w=0&h=q9-vhO5MC7zwaxX8_zFUiqMnQJ5udMjEBf0npeCCAGs=" alt="" />
        <form className="writeForm">
            <div className="writeFormGroup">
                <label htmlFor="fileInput">
                    <i class="writeIcon fa-solid fa-plus"></i>
                </label>
                <input type="file" id='fileInput' style={{display: "none"}}/>
                <input type="text" className='writeInput' placeholder='Title' autoFocus={true}/>
            </div>
            <div className="writeFormGroup">
                <textarea type="text" placeholder='Tell your story' className='writeInput writeText'></textarea>
            </div>
            <button className="writeSubmit">Publish</button>
        </form>
    </div>
  )
}

export default Write