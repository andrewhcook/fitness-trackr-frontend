import React, { useState,useEffect } from "react";
import { useParams, Link } from 'react-router-dom'
import { fetchRoutinesByUsername, getUser } from "../api/Requests.js"



const MyRoutines =(props) => {
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

return (<>
<div id= "myroutine-header">
<div id= "myroutine-title">My Routines</div>
</div>
<div id= "myroutine-options">
<div id = "create-routine"> <Link to = "/MyRoutines/Create">Create New Routine</Link></div>
<div id = "edit-routine"> <Link to = "/MyRoutines/Edit">Edit Routine</Link></div>
<div id = "delete-routine"> <Link to = "/MyRoutines/Delete">Delete Routine</Link></div>
</div>

<div id = "myroutine-listings">{myroutines.map((routine)=> 
  {return <MyRoutineListing routine = {routine}></MyRoutineListing>})}
</div></>)

}


export default MyRoutines



