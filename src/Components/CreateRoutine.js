import React from "react";
import {createRoutine} from '../api/Requests.js'


const CreateRoutine = (props) => {

    const newRoutine = async () => {
        try {
              
            const routine = await createRoutine(token, username);
            console.log ("routines useEffect MyRoutines", routines)
            setMyRoutines(routines);
           }
      
        catch (error) {
          console.error(error);
            }
      }


}


export default CreateRoutine