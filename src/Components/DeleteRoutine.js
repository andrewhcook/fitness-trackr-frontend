import React from "react";
// import {useParams} from 'react-router'
import { useHistory } from 'react-router-dom'
import { deleteRoutineByRoutineId } from "../api/Requests.js"



const DeleteRoutine = (props) => {
   const { token, setDeleteRoutineId, routine} = props

   let history = useHistory();

    // const {routineId} = useParams();
  //  console.log ("routineId",routineId)
   


   function navigateToMyRoutines (){
        
    setTimeout(() => {
        deleteRoutineById()
        setDeleteRoutineId("")
      
     }, "2000")
     }
     navigateToMyRoutines()
   
    

    const deleteRoutineById = async () => {
        try {
              const result = await deleteRoutineByRoutineId(token, routine.id);
              console.log("result of deleteRoutineByRoutineId", result);
              
            }catch (error) {
          console.error(error);
            }
        }
        return (
            <>
            <h1>THIS POST HAS BEEN DELETED</h1>
           
            
            </>
        )
}


export default DeleteRoutine