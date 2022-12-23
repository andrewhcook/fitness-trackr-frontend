import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Route, Switch, Link} from 'react-router-dom';

const App = () => {
        return (
        
    <BrowserRouter>

<div id = "container">
    <div id = "nav-bar"> 
    <Link to = "/Home">Home</Link>
    <Link to = "/Routines">Routines</Link>
    <Link to = "/MyRoutines">My Routines</Link>
    <Link to = "/Activities">Activities</Link>
    {!(token) ? <Link to = "LoginRegister"></Link> : <Logout> setToken = {setToken} </Logout>}
    </div>
    <div id = "main-section">
  <Home></Home>
  </div>
  </div>
  </BrowserRouter>
  )
};

const root = ReactDOM.createRoot(document.getElementById('app'));
root.render(<App />);