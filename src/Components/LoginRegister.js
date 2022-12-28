import React, {useState, useEffect} from 'react';
import { registerUser, logInUser } from '../api/Requests';
const LoginRegister = (props) => {
    const setToken = props.setToken;
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    
    const [loginUsername, setLoginUsername] = useState("");
    const [loginPassword, setLoginPassword] = useState("");
    const onSubmitHandler = async (event) => {
        //console.log("onSubmitHandler() called");
        event.preventDefault();
        const {error, token, message, user} = await registerUser(username, password);
        setToken(token);
        window.localStorage.setItem('token', token);
    }

    const otherOnSubmitHandler = async (event) => {
        // console.log("onSubmitHandler() in Login called");
         event.preventDefault();
         const {error, token, message} = await logInUser(loginUsername, loginPassword);
         setToken(token);
         window.localStorage.setItem('token', token);
     }

    return (<><form className="login-form" onSubmit={onSubmitHandler}>
        <h1>SignUp Form</h1>
        <div className="field">
            <label>Username</label>
            <input
                type="text"
                value={username}
                placeholder="username"
                required
                onChange={(event) => { setUsername(event.target.value); } } />

        </div>
        <div className="field">
            <label>Password</label>
            <input
                type="password"
                value={password}
                placeholder="password"
                minLength="8"
                required
                onChange={(event) => { setPassword(event.target.value); } } />
        </div>
        <button className="submit-form" type="submit">Submit</button>
    </form>
        <form className="login-form" onSubmit={otherOnSubmitHandler}>
            <h1>Login Form</h1>
            <div className="field">
                <label>Username</label>
                <input
                    type="text"
                    value={loginUsername}
                    placeholder="username"
                    required
                    onChange={(event) => { setLoginUsername(event.target.value); } } />

            </div>
            <div className="field">
                <label>Password</label>
                <input
                    type="password"
                    value={loginPassword}
                    placeholder="password"
                    minLength="8"
                    required
                    onChange={(event) => { setLoginPassword(event.target.value); } } />
            </div>
            <button className="submit-form" type="submit">Submit</button>
        </form></>);
    
    
}


export default LoginRegister