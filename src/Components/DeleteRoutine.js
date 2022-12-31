import React from "react";

import { deleteRoutineByRoutineId } from "../api/Requests.js"



const DeleteRoutine = (props) => {
   const { token, setDeleteRoutineId, routine} = props

   
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
            <h1>THIS ROUTINE HAS BEEN DELETED</h1>
           
            
            </>
        )
}


export default DeleteRoutine