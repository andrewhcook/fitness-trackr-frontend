import React, {useState, useEffect} from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Route, Switch, Link} from 'react-router-dom';
import { fetchRoutines, fetchUser} from './api/Requests';
import { LoginRegister, Routines, Activities, 
  MyRoutines, Logout, CreateRoutine, EditRoutine, DeleteRoutine, AddActivityToRoutine, Welcome} from './Components'


const App = () => {
  
    const [token, setToken] = useState(
        window.localStorage.getItem("token") || null
      );
      return (
        
    <BrowserRouter>

<div id = "container">
    <div id = "nav-bar"> 
    <div className= "nav-bar-title">StrangeRoutines</div>
    <Link to = "/Routines">Routines</Link>
    <Link to = "/Activities">Activities</Link>
    { token ? <Link to = "/MyRoutines">My Routines</Link> : null}
    {!token ? <Link to = "/LoginRegister">Login/Register</Link> : <Logout setToken = {setToken}> </Logout>}
    </div>
    <div id = "main-section">
          
          <Route path = "/" exact><Welcome token={token}></Welcome></Route>
          <Route path = "/LoginRegister"><LoginRegister setToken = {setToken}></LoginRegister></Route>
          <Route path = "/Routines"> <Routines token = {token}></Routines></Route>
          <Route path = "/Activities"> <Activities token = {token}></Activities></Route>
          {/* <Route path = "/MyRoutines/Create"> <CreateRoutine token = {token} ></CreateRoutine></Route> */}
          {/* <Route path = "/MyRoutines/Edit"> <EditRoutine token = {token} ></EditRoutine></Route> */}
          {/* <Route path = "/MyRoutines/AddActivityToRoutine/:routineId"> <AddActivityToRoutine token = {token} ></AddActivityToRoutine></Route> */}
          {/* <Route path = "/MyRoutines/Delete/:routineId"> <DeleteRoutine token = {token} ></DeleteRoutine></Route> */}
          <Route path = "/MyRoutines"> <MyRoutines token = {token} ></MyRoutines></Route>
          
          
  </div>
  </div>
  </BrowserRouter>
  )
};

const root = ReactDOM.createRoot(document.getElementById('app'));
root.render(<App />);