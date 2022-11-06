import './login.css'

const Login = () => {
  return (
    <div className='login'>
        <span className="loginTitle">Login</span>
        <form action="" className="loginForm">
            <label>Email</label>
            <input type="email" name="" id="" placeholder='Enter your email'/>
            <label>Password</label>
            <input type="password" name="" id="" placeholder='Enter your password'/>
            <button className="loginBtn">Login</button>
        </form>
        <a href='register' className="loginRegisterBtn">Register</a>
    </div>
  )
}

export default Login