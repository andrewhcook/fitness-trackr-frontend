import React, { useState,useEffect } from "react";
import {  useRouteMatch, useParams } from 'react-router';
import { Switch, Route, Link } from 'react-router-dom'
import { fetchRoutinesByUsername, getUser } from "../api/Requests.js"
import EditRoutine from "./EditRoutine.js"
import AddActivityToRoutine from "./AddActivityToRoutine.js"
import DeleteRoutine from "./DeleteRoutine.js"
import CreateRoutine from "./CreateRoutine.js"
import EditRoutineActivity from "./EditRoutineActivity.js"



const MyRoutines =(props) => {

const { path, url } = useRouteMatch();

console.log ("path", path, "url", url)
  
const [myroutines, setMyRoutines] = useState([]);
const [editRoutineId, setEditRoutineId] = useState ();
const [addActivityId, setAddActivityId] = useState ();
const [deleteRoutineId, setDeleteRoutineId] = useState ();
const [createRoutineBool, setCreateRoutineBool] = useState ();
const [deleteRoutineActivityId, setDeleteRoutineActivityId] = useState ();
const [editRoutineActivityId, setEditRoutineActivityId] = useState ();


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
}, [editRoutineId, deleteRoutineId, createRoutineBool, addActivityId, editRoutineActivityId, 
  deleteRoutineActivityId],)

console.log ("myRoutines", myroutines)

return (
<>
<div id= "myroutine-header">
<div id= "myroutine-title">My Routines</div>
</div>
<div id= "myroutine-options">
<button id = "create-routine-button" onClick={() => setCreateRoutineBool(true)}>Create Routine</button>
{createRoutineBool && <CreateRoutine token = {token} setCreateRoutineBool = {setCreateRoutineBool} />}
</div>


{myroutines.map((routine) => {
    
        return (
          
         <div id= "routinediv" key = {routine.id}>   
       
            
        <div id="myroutinecard">  
        <div id="myroutineinnercard">
        <div> Routine Name: {routine.name}</div>
        <div> Goal: {routine.goal}</div>
        <div> Activities: </div>
        {routine.activities.map((activity) =>{
          return (
           <div id= "routineactivitydiv" key = {activity.id}>
           <div id= "innerroutineactivitydiv">
           <div>   Activity Name: {activity.name} </div>
           <div>   Id: {activity.id} </div>
           <div>   Count: {activity.count} </div>
           <div>   Duration: {activity.duration} </div>
           <div>   Description: {activity.description} </div>

        {deleteRoutineActivityId === activity.id && <DeleteRoutineActivity activity = {activity} token = {token} setDeleteRoutineActivityId = {setDeleteRoutineActivityId} />}
        {editRoutineActivityId === activity.id && <EditRoutineActivity activity = {activity} token = {token} setEditRoutineActivityId = {setEditRoutineActivityId} />}

           <span id="deleteeditradiv">
       
       <div id = "delete-routine-activity"> <button className= "ramodifyrabuttons" onClick={() => setDeleteRoutineActivityId(activity.id)}>Delete Routine Activity</button></div>
      
       <div id = "edit-routine-activity"> <button className= "ramodifyrabuttons" onClick={() => setEditRoutineActivityId(activity.id)}>Edit Routine Activity</button></div>
       
      
       </span>
           </div>
           </div>
           )
          })}
        {deleteRoutineId === routine.id && <DeleteRoutine routine = {routine} token = {token} setDeleteRoutineId = {setDeleteRoutineId} />}
        {editRoutineId === routine.id && <EditRoutine routine = {routine} token = {token} setEditRoutineId = {setEditRoutineId} />}
        {addActivityId === routine.id && <AddActivityToRoutine routine = {routine} token = {token} setAddActivityId = {setAddActivityId} />}
        </div> 
        <span id="deleteeditdiv">
       
        <div id = "delete-routine"> <button className= "modifybuttons" onClick={() => setDeleteRoutineId(routine.id)}>Delete Routine</button></div>
       
        <div id = "edit-routine"> <button className= "modifybuttons" onClick={() => setEditRoutineId(routine.id)}>Edit Routine</button></div>
        
        <div id = "addactivitytoroutine"> <button className= "modifybuttons" onClick={() => setAddActivityId(routine.id)}> Add Activity To Routine</button></div>
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


