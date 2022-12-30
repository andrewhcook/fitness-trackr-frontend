import React, { useState }from "react";
import {editRoutineByRoutineId} from '../api/Requests.js'
import { useHistory } from 'react-router-dom'


const EditRoutine = (props) => {
const {routine, token, setEditRoutineId} = props

const [name, setName] = useState("")
const [goal, setGoal] = useState("")
const [isPublic, setIsPublic] = useState(false)

let history = useHistory();

  const handleSetName = (event) => {
    event.preventDefault();
    const inputElement = event.target;
    const newValue = inputElement.value;
    setName(newValue);
    }
                    
    const handleSetGoal = (event) => {
    event.preventDefault();
    const inputElement = event.target;
    const newValue = inputElement.value;
    setGoal(newValue);
    }

    const handleSetIsPublic = (event) => {
      event.preventDefault();
      console.log(isPublic)
      const isChecked = document.getElementById('#enterpublic')
      const inputElement = event.target;
      const newValue = inputElement.value;
      //console.log ("checkValue",newValue)
      if (newValue === "on"){
        setIsPublic(true);
      }
      
      }
    
    const handleSubmit = async (event) => {
    event.preventDefault();
    
    const editedRoutine = {name: name,
    goal: goal,
    isPublic: isPublic}
    
    try{
    const data = await editRoutineByRoutineId(token, routine.id, editedRoutine)
   // console.log ("token", token)
    console.log ("data from editRoutineByRoutineId",data)
    setEditRoutineId("")
     return data
     
    }
    catch (error) {
    console.log (error)
    }
   
    }
    
      
  //  console.log("isPublic",isPublic)

  return (
    <div id="editroutincontainer">
    <div id="editroutine">

        <>
       <form id="submitEditedRoutine" onSubmit={async (event) => {
       handleSubmit(event);
       history.push('/MyRoutines')
       }}>
        <div id="editRoutineTitle">
            Edit Routine
       </div>
 <fieldset id = "editroutineinputs">
     <label htmlFor="name"></label>
     <input 
       id="enterroutinename" 
       type="text" 
       placeholder="Enter: Name of Routine" 
       value={name} 
       autoComplete="off"
       required
       onChange={handleSetName}/>
   
     <label htmlFor="goal"></label>
     
     <textarea 
       id="enterroutinegoal" 
       type="text"
       rows='1'
       placeholder="Enter: Goal of Routine" 
       value={goal}
       required
       onChange={handleSetGoal}/>
    
    <span> Make Routine Public?&emsp;
    <label htmlFor="Make Routine Public?"></label>
    <input 
    id="enterpublic" 
    type="checkbox" 
    name="check" 
  
    //value={true}
    
    onChange={handleSetIsPublic}
    />
    </span>
  </fieldset>
  
   <button className="SubmitEditButton">Submit</button>
   </form>
   <button className="SubmitEditButton" onClick={() => setEditRoutineId("")} >Back</button>


     </>
    </div>
    </div>
     
   )



}


export default EditRoutine