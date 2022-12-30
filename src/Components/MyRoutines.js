import React, { useState,useEffect } from "react";
import {  useRouteMatch, useParams } from 'react-router';
import { Switch, Route, Link } from 'react-router-dom'
import { fetchRoutinesByUsername, getUser } from "../api/Requests.js"

import DeleteRoutine from "./DeleteRoutine.js"

console.log ("DeleteRoutine", DeleteRoutine)

const MyRoutines =(props) => {

const { path, url } = useRouteMatch();

console.log ("path", path, "url", url)
  
const [myroutines, setMyRoutines] = useState([]);
const { token } = props
//const navigate = useNavigate()

useEffect(() => {
  const getRoutinesByUsername = async () => {
  try {
        const {username} = await getUser(token);
        console.log("username UseEffect MyRoutines", username);
      const routines = await fetchRoutinesByUsername(token, username);
      console.log ("routines useEffect MyRoutines", routines)
      setMyRoutines(routines);
     }

  catch (error) {
    console.error(error);
      }
}
getRoutinesByUsername();
}, [])

console.log ("myRoutines", myroutines)

return (
<>
<div id= "myroutine-header">
<div id= "myroutine-title">My Routines</div>
</div>
<div id= "myroutine-options">

{/* <div id = "edit-routine"> <Link to = "/MyRoutines/Edit">Edit Routine</Link></div>
<div id = "delete-routine"> <Link to = "/MyRoutines/Delete">Delete Routine</Link></div> */}
</div>


{myroutines.map((routine) => {
    
        return (
          
         <div id= "routinediv" key = {routine.id}>   
       
            
        <div id="myroutinecard">  
        <div id="myroutineinnercard">
        <div> Name: {routine.name}</div>
        <div> Goal: {routine.goal}</div>
        </div> 
        <span id="deleteeditdiv">
        <div id = "delete-routine"> <Link to = {`${url}/Delete/${routine.id}`}>Delete Routine</Link></div>
        <div id = "edit-routine"> <Link to = "/MyRoutines/Edit">Edit Routine</Link></div>
        </span>
        </div>
      
      
        </div>
        
         )
    }
    )
    }
    <div>
       {/* <Switch>
       <Route path={`${path}/:routineId`}>
          <DeleteRoutine />
        </Route>
       </Switch>  */}
       </div> 
    <div id = "create-routine"> <Link to = "/MyRoutines/Create">Create New Routine</Link></div>
     </> 
)};
    
    
export default MyRoutines



/* <button id="deletemyroutine"
        onClick={()=> handleDeleteClick(routine.id)}> DELETE ROUTINE</button> */
        /* <button id="editmyroutine" 
        onClick={()=> handleEditClick(post)}> EDIT ROUTINE</button> */
// import React from 'react'
// import {  useRouteMatch } from 'react-router';
// import { 
//   Switch,
//   Route,
//   Link
// } from "react-router-dom";

// import Subject from './Subject';


// export default function Courses() {    
//   const { path, url } = useRouteMatch();     


//     return (     
//     <div>
//       <h3>Select the subject</h3>
//       <ul>
//         <li>
//           <Link to={`${url}/javascript`}>Javascript</Link>
//         </li>
//         <li>
//           <Link to={`${url}/react`}>React</Link>
//         </li>
//         <li>
//           <Link to={`${url}/typescript`}>Typecscript</Link>
//         </li>
//       </ul>

//       <Switch>      
//         <Route path={`${path}/:subject`}>
//           <Subject />
//         </Route>
//     </Switch>
//     </div>    
  
//     );    
//   }