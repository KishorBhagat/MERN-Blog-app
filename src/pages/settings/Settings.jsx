import Sidebar from '../../components/sidebar/Sidebar'
import './settings.css'

const Settings = () => {
  return (
    <div className='settings'>
      <div className="settingsWrapper">
        <div className="settingsTitle">
          <span className="settingsUpdateTitle">Update your account</span>
          <span className="settingsDeleteTitle">Delete your account</span>
        </div>
        <form className="settingsForm">
          <label>Profile Picture</label>
          <div className="settingsPP">
            <img src="https://avatars.githubusercontent.com/u/89726870?v=4" alt="" />
            <label htmlFor="fileInput">
              <i class="settingsPPIcon fa-regular fa-circle-user"></i>
            </label>
            <input type="file" id='fileInput' style={{display:"none"}}/>
          </div>
          <label>Username</label>
          <input type="text" placeholder=''/>
          <label>Email</label>
          <input type="email" placeholder=''/>
          <label>Password</label>
          <input type="password" />
          <button className="settingsSubmit">Save</button>
        </form>
      </div>
      <Sidebar />
    </div>
  )
}

export default Settings