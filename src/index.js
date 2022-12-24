import React, {useState, useEffect} from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Route, Switch, Link} from 'react-router-dom';
import {Home, LoginRegister, Routines, Activities, MyRoutines} from './Components'

const App = () => {
  
    const [token, setToken] = useState(
        window.localStorage.getItem("token") || null
      );
        return (
        
    <BrowserRouter>

<div id = "container">
    <div id = "nav-bar"> 
    <Link to = "/Home">Home</Link>
    <Link to = "/Routines">Routines</Link>
    
    <Link to = "/Activities">Activities</Link>
    { token ? <Link to = "/MyRoutines">My Routines</Link> : null}
    {!token ? <Link to = "/LoginRegister">Login/Register</Link> : <Logout> setToken = {setToken} </Logout>}
    </div>
    <div id = "main-section">
          <Route path = "/Home">
            {token ? <> <Home guest = {user}></Home> </> : null }
          </Route>
          <Route path = "/LoginRegister"><LoginRegister></LoginRegister></Route>
          <Route path = "/Routines"> <Routines></Routines></Route>
          <Route path = "/Activities"> <Activities></Activities></Route>
          {token ? <Route path = "MyRoutines"> <MyRoutines></MyRoutines></Route> : null}
          {token ? <Route path = "MyActivities"> <MyActivities></MyActivities> </Route> : null}
  </div>
  </div>
  </BrowserRouter>
  )
};

const root = ReactDOM.createRoot(document.getElementById('app'));
root.render(<App />);