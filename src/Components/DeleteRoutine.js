import React from "react";
import {useParams} from 'react-router'
import { fetchRoutinesById } from "../api/Requests.js"


console.log ({useParams})
const DeleteRoutine = (props) => {
    console.log("hello inside function")
    const {routineId} = useParams();
    console.log ("routineId",routineId)

    const deleteRoutineById = async () => {
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

    return (
        <>
        <h1>THIS POST HAS BEEN DELETED</h1>
        
        </>
    )

}


export default DeleteRoutine