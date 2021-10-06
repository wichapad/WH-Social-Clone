import "./register.css"

const Register = () => {
    return (
        <div className="login">
            <div className="loginWrapper">
                <div className="loginLeft">
                    <h3 className="loginLogo">WM-Social</h3>
                    <span className="loginDesc">Connect with Friends and the World around you on WN-Social.</span>
                </div>
                <div className="loginRight">
                    <div className="loginBox">
                        <input className="loginInput" placeholder="Username" />
                        <input className="loginInput" placeholder="Email" />
                        <input className="loginInput" placeholder="Password" />
                        <input className="loginInput" placeholder="Password Again" />
                        <button className="loginButton">Sign Up</button>
                        
                        <button className="LoginRegisterButton">Log into Account</button>
                    </div>
                </div>
            </div>
            
        </div>
    )
}

export default Register
