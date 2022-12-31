import React, { useState,useEffect } from "react";
import {  useRouteMatch, useParams } from 'react-router';
import { Switch, Route, Link } from 'react-router-dom'
import { fetchRoutinesByUsername, getUser } from "../api/Requests.js"
import EditRoutine from "./EditRoutine.js"
import AddActivityToRoutine from "./AddActivityToRoutine.js"
import DeleteRoutine from "./DeleteRoutine.js"
import CreateRoutine from "./CreateRoutine.js"



const MyRoutines =(props) => {

const { path, url } = useRouteMatch();

console.log ("path", path, "url", url)
  
const [myroutines, setMyRoutines] = useState([]);
const [editRoutineId, setEditRoutineId] = useState ();
const [addActivityId, setAddActivityId] = useState ();
const [deleteRoutineId, setDeleteRoutineId] = useState ();
const [createRoutineBool, setCreateRoutineBool] = useState ();

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
}, [editRoutineId, deleteRoutineId, createRoutineBool, addActivityId],)

console.log ("myRoutines", myroutines)

return (
<>
<div id= "myroutine-header">
<div id= "myroutine-title">My Routines</div>
</div>
<div id= "myroutine-options">
<div id = "create-routine"> <a href = "#" onClick={() => setCreateRoutineBool(true)}>Create Routine</a></div>
{createRoutineBool && <CreateRoutine token = {token} setCreateRoutineBool = {setCreateRoutineBool} />}
</div>


{myroutines.map((routine) => {
    
        return (
          
         <div id= "routinediv" key = {routine.id}>   
       
            
        <div id="myroutinecard">  
        <div id="myroutineinnercard">
        <div> Name: {routine.name}</div>
        <div> Goal: {routine.goal}</div>
        <div> Activities: </div>
        {routine.activities.map((activity) =>{
          return (
           <div id= "routineactivitydiv" key = {activity.id}>
           <div>   Name: {activity.name} </div>
           <div>   Id: {activity.id} </div>
           <div>   Count: {activity.count} </div>
           <div>   Duration: {activity.duration} </div>
           <div>   Description: {activity.description} </div>
           </div>
           )
          })}
        {deleteRoutineId === routine.id && <DeleteRoutine routine = {routine} token = {token} setDeleteRoutineId = {setDeleteRoutineId} />}
        {editRoutineId === routine.id && <EditRoutine routine = {routine} token = {token} setEditRoutineId = {setEditRoutineId} />}
        {addActivityId === routine.id && <AddActivityToRoutine routine = {routine} token = {token} setAddActivityId = {setAddActivityId} />}
        </div> 
        <span id="deleteeditdiv">
        <div id = "delete-routine"> <a href = "#" onClick={() => setDeleteRoutineId(routine.id)}>Delete Routine</a></div>
        <div id = "edit-routine"> <a href = "#" onClick={() => setEditRoutineId(routine.id)}>Edit Routine</a></div>
        <div id = "addactivitytoroutine"> <a href = "#" onClick={() => setAddActivityId(routine.id)}> Add Activity To Routine</a></div>
        </span>
        <div>
        
       </div> 
        </div>
      
      
        </div>
        
         )
    }
    )

    }
   
   
   
     </> 
)};
    
    
export default MyRoutines

{/* <Switch>
<Route path={`${path}/Edit/:routineId`}>
   <EditRoutine />
 </Route>
</Switch>   */}
{/* <div id = "edit-routine"> <Link to = "/MyRoutines/Edit">Edit Routine</Link></div>
<div id = "delete-routine"> <Link to = "/MyRoutines/Delete">Delete Routine</Link></div> */}


