import React, { useState,useEffect } from "react";
import { useParams, Link } from 'react-router-dom'
import { fetchRoutinesByUsername, getUser } from "../api/Requests.js"



const MyRoutines =(props) => {
const [userRoutines, setUserRoutines] = useState([]);
const { token } = props
//const navigate = useNavigate()

useEffect(() => {
  const getRoutinesByUsername = async () => {
  try {
        const {username} = await getUser(token);
        console.log(username);
      const newRoutines = await fetchRoutinesByUsername(token, username);
      
      setUserRoutines(newRoutines);
     }

  catch (error) {
    console.error(error);
      }
}
getRoutinesByUsername();
}, [])


return (
 
    <div id="myroutines">
        <h2>HELLO WORLD</h2>
        <div className="routineheadercontainer">
            <div className="routineheaderbox">
               
                 <button id="addroutine" ><Link to="/routine/add" id="addlink">ADD ROUTINE</Link></button>
             </div>
        </div>


      {userRoutines.map((routine) => {
    
        return (
            
         <div id= "card" key = {routine.id}>   
        {//routine.creatorId===users.id? 
            <>
        <div id="outercard">  
        <div id="innercard">
        <div> Name: {routine.name}</div>
        <div> Goal: {routine.goal}</div>
       
       
        </div> 
        </div>
        </> //: null
      }
        </div>
        
        )})}
    
    </div>
);



}


export default MyRoutines



