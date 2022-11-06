import './register.css'

const Register = () => {
  return (
    <div className='register'>
        <span className="registerTitle">Register</span>
        <form action="" className="registerForm">
            <label>Name</label>
            <input type="text" name="" id="" placeholder='Enter your name'/>
            <label>Email</label>
            <input type="email" name="" id="" placeholder='Enter your email'/>
            <label>Password</label>
            <input type="password" name="" id="" placeholder='Enter your password'/>
            <label>Confirm Password</label>
            <input type="password" name="" id="" placeholder='Confirm your password'/>
            <button className="registerBtn">Register</button>
        </form>
        <a href="/login" className="registerLoginBtn">Login</a>
    </div>
  )
}

export default Register