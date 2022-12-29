import React from "react";
import {addRoutine} from '../api/Requests.js'


const CreateRoutine = (props) => {

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



//       return (
//         <div id="addpostcontainer">
//         <div id="addPost">

//             <>
//            <form id="submitPost" onSubmit={async (event) => {
//            handleSubmit(event)
//             }}>
//             <div id="addPostTitle">
//                Create a Post
//            </div>
//           <fieldset id = "inputs">
//          <label htmlFor="item"></label>
//          <input 
//            id="enteritem" 
//            type="text" 
//            placeholder="Enter: Name of item for sale" 
//            value={item} 
//            autoComplete="off"
//            required
//            onChange={handleSetItem}/>
       
//          <label htmlFor="description"></label>
         
//          <textarea 
//            id="enterdescription" 
//            type="text"
//            rows='2'
//            placeholder="Description of item" 
//            value={description}
//            required
//            onChange={handleSetDescription}/>
           

// <label htmlFor="price"></label>
//          <input 
//            id="enterprice" 
//            type="text" 
//            placeholder="Price of item" 
//            value={price}
//            autoComplete="off"
//            required
//            onChange={handleSetPrice}/>

// <label htmlFor="location"></label>
//          <input 
//            id="enterlocation" 
//            type="text" 
//            placeholder="Location" 
//            value={location}
//            autoComplete="off"
//            required
//            onChange={handleSetLocation}/>
// <span> Will deliver?&emsp;

// <label htmlFor="willdeliver"></label>
//          <input 
//            id="enterwilldeliver" 
//            type="checkbox" 
           
//            value={willdeliver}
           
//            onChange={handleWilldeliver}
//            />
// </span>



//        </fieldset>
      
//        <button id="registerButton">Submit</button>
//          </form>

//          </>
//         </div>
//         </div>
         
//        )

}


export default CreateRoutine