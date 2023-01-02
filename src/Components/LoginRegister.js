import React, {useState, useEffect} from 'react';
import { registerUser, logInUser } from '../api/Requests';
import LoginMessage from './LoginMessage';
import RegisterMessage from './RegisterMessage';

const LoginRegister = (props) => {
    const setToken = props.setToken;
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [registered, setRegistered] = useState(false);

    
    const [loginUsername, setLoginUsername] = useState("");
    const [loginPassword, setLoginPassword] = useState("");
    const [loggedIn, setLoggedIn] = useState(false);

    const onSubmitHandler = async (event) => {
        //console.log("onSubmitHandler() called");
        event.preventDefault();
        const {error, token, message, user} = await registerUser(username, password);
        
        setToken(token);
        window.localStorage.setItem('token', token);

        setUsername("");
        setPassword("");
    }

    const otherOnSubmitHandler = async (event) => {
        // console.log("onSubmitHandler() in Login called");
         event.preventDefault();
         const {error, token, message} = await logInUser(loginUsername, loginPassword);
      
         setToken(token);
         window.localStorage.setItem('token', token);

         setLoginUsername("");
         setLoginPassword("");
     }

     const handleRegister = () => {
        setRegistered(true);
     }

     const handleLogin = () => {
        setLoggedIn(true);
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
        <button className="submit-form" type="submit" onClick={handleRegister}>Submit</button>
        <div>
            {registered && <RegisterMessage />}
        </div>

        {/*register*/}


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
            <button className="submit-form" type="submit" onClick={handleLogin}>Submit</button>
            <div>
                {loggedIn && <LoginMessage />}
            </div>

            {/*login*/}


        </form></>);
    
    
}


export default LoginRegister