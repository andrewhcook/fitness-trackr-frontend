import React, { useState }from "react";
import {addRoutine} from '../api/Requests.js'


const CreateRoutine = (props) => {
    const [name, setName] = useState("")
    const [goal, setGoal] = useState("")
    const [isPublic, setIsPublic] = useState(false)

    const newRoutine = async () => {
        try {
              
            const routine = await addRoutine(token, username);
            console.log ("routines useEffect MyRoutines", routines)
            setMyRoutines(routines);
           }
      
        catch (error) {
          console.error(error);
            }
      }

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
          console.log ("checkValue",newValue)
          if (newValue === "on"){
            setIsPublic(true);
          }
          
          }
        
        const handleSubmit = async (event) => {
        event.preventDefault();
        
        const routine = {name: name,
        goal: goal}
        
        try{
        const data = await addRoutine(token, username)
        console.log ("token", token)
        console.log (data)
        }
        catch (error) {
        console.log (error)
        }
        }

        console.log("isPublic",isPublic)

      return (
        <div id="addroutincontainer">
        <div id="addroutine">

            <>
           <form id="submitRoutine" onSubmit={async (event) => {
           handleSubmit(event)
            }}>
            <div id="addRoutineTitle">
               Create a Routine
           </div>
     <fieldset id = "addroutineinputs">
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
      
       <button id="registerButton">Submit</button>
         </form>

         </>
        </div>
        </div>
         
       )

}


export default CreateRoutine