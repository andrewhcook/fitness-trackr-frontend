import React, { useState }from "react";
import {editRoutineActivityByRoutineActivityId} from '../api/Requests.js'



const EditRoutineActivity = (props) => {
const {activity, token, setEditRoutineActivityId} = props
console.log ("activity", activity)

const [activityId, setActivityId] = useState("")
const [count, setCount] = useState("")
const [duration, setDuration] = useState("")


const handleSetActivityId = (event) => {
    event.preventDefault();
    const inputElement = event.target;
    const newValue = inputElement.value;
    setActivityId(newValue);
    }

  const handleSetCount = (event) => {
    event.preventDefault();
    const inputElement = event.target;
    const newValue = inputElement.value;
    setCount(newValue);
    }
                    
    const handleSetDuration = (event) => {
    event.preventDefault();
    const inputElement = event.target;
    const newValue = inputElement.value;
    setDuration(newValue);
    }

   
    
    const handleSubmit = async (event) => {
    event.preventDefault();
    
    const routineActivity = {
    count: count,
    duration: duration}
    
    try{
    const data = await editRoutineActivityByRoutineActivityId(token, activity.routineActivityId, routineActivity )
    return data
     }
    catch (error) {
    console.log (error)
    }
   
    }



  return (
    <div id="addactivitycontainer">
    <div id="addactivity">

        <>
       <form id="submitAddActivity" onSubmit={async (event) => {
       handleSubmit(event);
       setEditRoutineActivityId("")
       }}>
        <div id="addActivityTitle">
           Edit Routine Activity
       </div>
 <fieldset id = "editroutineactivityinputs">
     {/* <label htmlFor="activityid"></label>
     <input 
       id="enteractivityid" 
       type="text" 
       placeholder="Enter: Activity ID" 
       value={activityId} 
       autoComplete="off"
       required
       onChange={handleSetActivityId}/> */}
   
     <label htmlFor="count"></label>
     
     <input
       id="entercount" 
       type="text"
       placeholder="Enter: Count" 
       value={count}
       required
       onChange={handleSetCount}/>
    
    <input
       id="entercount" 
       type="text"
       placeholder="Enter: Duration" 
       value={duration}
       required
       onChange={handleSetDuration}/>
    
  </fieldset>
  
   <button className="SubmitAddButton">Submit</button>
     </form>
   <button className="SubmitAddButton" onClick={() => setEditRoutineActivityId("")} >Back</button>

     </>
    </div>
    </div>
     
   )
}


export default EditRoutineActivity