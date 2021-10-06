import "./login.css"

const Login = () => {
    return (
        <div className="login">
            <div className="loginWrapper">
                <div className="loginLeft">
                    <h3 className="loginLogo">WM-Social</h3>
                    <span className="loginDesc">Connect with Friends and the World around you on WN-Social.</span>
                </div>
                <div className="loginRight">
                    <div className="loginBox">
                        <input className="loginInput" placeholder="Email" />
                        <input className="loginInput" placeholder="Password" />
                        <button className="loginButton">Log In</button>
                        <span className="loginForgot">Forgot Password?</span>
                        <button className="LoginRegisterButton">Create a New Account</button>
                    </div>
                </div>
            </div>
            
        </div>
    )
}

export default Login
