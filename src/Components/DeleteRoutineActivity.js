import React from "react";
import { deleteRoutineActivityByRoutineActivityId } from "../api/Requests.js"



const DeleteRoutineActivity = (props) => {
   const { token, setDeleteRoutineActivityId, activity} = props

 

    // const {routineId} = useParams();
  //  console.log ("routineId",routineId)
   


   function navigateToMyRoutines (){
        
    setTimeout(() => {
        deleteRoutineActivityById()
        setDeleteRoutineActivityId("")
      
     }, "2000")
     }
     navigateToMyRoutines()
   
    

    const deleteRoutineActivityById = async () => {
        try {
              const result = await deleteRoutineActivityByRoutineActivityId(token, activity.routineActivityId);
              console.log("result of deleteRoutineActivityByRoutineActivityId", result);
              
            }catch (error) {
          console.error(error);
            }
        }
        return (
            <>
            <h1>THIS ROUTINE-ACTIVITY HAS BEEN DELETED</h1>
           
            
            </>
        )
}


export default DeleteRoutineActivity