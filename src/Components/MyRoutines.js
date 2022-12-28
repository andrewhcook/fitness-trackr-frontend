import React, { useState,useEffect } from "react";
//import { useParams, Link } from 'react-router-dom'
import { fetchRoutinesByUsername, getUser } from "../api/Requests.js"



const MyRoutines =(props) => {
const [myroutines, setMyRoutines] = useState([]);
const { token } = props
//const navigate = useNavigate()

useEffect(() => {
  const getRoutinesByUsername = async () => {
  try {
        const {username} = await getUser(token);
        console.log("username", username);
      const routines = await fetchRoutinesByUsername(token, username);
      
      setMyRoutines(routines);
     }

  catch (error) {
    console.error(error);
      }
}
getRoutinesByUsername(username);
}, [])

console.log ("myRoutines", myroutines)

return (<><div id = "myroutine-listings">{myroutines.map((routine)=> 
  {return <MyRoutineListing routine = {routine}></MyRoutineListing>})}</div></>)
// const myRoutineList = (props) => {
//   const routines = props.routines;
//   console.log("props.routines", props.routines);
//   return (<div id = "routine-listing">
//   <div id = "routine-name"> My Routine Name: {routine.name}</div>
//   <div id = "activity-goal"> Goal: {routine.goal}</div>
//   </div>)
}


export default MyRoutines



