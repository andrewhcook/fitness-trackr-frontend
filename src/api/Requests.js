
const BASEURL = "http://fitnesstrac-kr.herokuapp.com/api";

const makeHeaders = (token) => {
    const headers = {
      "Content-Type": "application/json",
    };
  
    if (token) {
      headers['Authorization'] = `Bearer ${token}`;
    }
  //  console.log(headers);
    return headers;
  };
  

export const apiCall = async (endpoint, defaultOptions= {}) => {
    const {token, method, body} = defaultOptions;
    
    const options = {};
    options.headers = makeHeaders(token);
    if (method) {
      options.method = method;
    };
    if (body) {
      options.body = JSON.stringify(body);
    }
      const response = await fetch(`${BASEURL}/${endpoint}`, options);
      const result = await response.json();
      console.log(result);
      return result;
  }

  export const fetchRoutines = async (token = null)=> {
    const result = await apiCall('routines', {token:token, method:"GET"});
    if (result) {
      return {
        error: null,
        routines: result
      }
    } else {
      return {
        error: "Failed to Load apiCall in fetchRoutines",
        routines: []
      }
    }
  }


  export const registerUser = async (username, password) => {
    try {
      const {user, message, token, error} = await apiCall('users/register', {token: null, method: "Post", body: { username: username,
      password: password}} );
      if (!error) {
    //    console.log(username, data.token)
        return {
          error: null,
          token: token,
          mesage: message,
          user: user
        }
      } else {
       // console.log("no success in registerUser()", error);
        return {
          error: error.message,
          token: null,
          message: null
        }
      }
    } catch (error){
      alert(error);
      return {
        error: error.message,
        token: null,
        message: null,
        user: null
      }
    }
  }

  export const logInUser = async (username, password) => {
    
      const {user, message, token, error} = await apiCall('users/login', {token: null, method: "Post", body: {username: username,
      password: password}} );
      if (!error) {
       // console.log(username, data.token)
        return {
          error: null,
          token: token,
          mesage: message,
          user: user
        }
      } else {
        alert("Incorrect User Credentials");
       // console.log("no success in registerUser()", error);
        return {
          error: error.message,
          token: null,
          message: null,
          user: null
        }
      }
    
    }
  

    export async function fetchRoutinesByUsername(token, username){
      //console.log ("params fetchRoutinesByUsername", token, username)
      try{
      const result = await apiCall(`users/${username}/routines`, {token:token, method:"GET"});
        console.log( "result fetchRoutinesByUsername", result)
          return result;
      } catch(error) {
        console.error( "There was an error in fetchRoutinesByUsername apiCall")
      }
      }

      export const getUser = async (token) => {
        console.log(token);
        const {id, username} = await apiCall("users/me", {token: token, method: "GET"})
        console.log ("id, username from getUser apiCall", id, username)
        return {id, username}
      }

      export const getActivities = async(token) => {
        const activities = await apiCall("activities", {method: "GET"});
        return activities
      }


      

      export async function addActivity(token, parameters = {}){
        const {name, description} = parameters
        console.log ("parameters addActivity apiCall", parameters)
        
        try{
        const response = await apiCall('activities', {
          token: token,
          method: "POST",
          body: 
            {
            name: name,
            description: description
            }
          });
        
       
        return response;
      }
        catch(error) {
          console.error ("There was an error in addActivity apiCall")
        }
    
        }
    
    
      export async function editActivity (activityId, parameters = {}){
          const {name, description} = parameters
          console.log ("parameters", parameters)
        try{
        const response = await apiCall(`activities/:${activityId}`, {
          method: "PATCH",
          body: {
            name: name,
            description: description
          }
          });
        
       
        return response;
        
        } catch(error) {
          console.error ("There was an error in editActivity apiCall")
        }
    
        }
    
    
      export async function fetchRoutinesByActivityId(token, activityId) {
        
        try{
          const result = await apiCall(`activities/:${activityId}/routines`, {token:token, method:"GET"});
            
          
              return response;
          } catch(error) {
            console.error( "There was an error in fetchRoutinesByActivity apiCall")
          }
          }
    
      // export const fetchRoutines = async (token)=> {
      //   try{
      //     const response = await apiCall('routines', {token:token, method:"GET"})
          
         
      //    // const data = await response.json();
      //     console.log ("fetchRoutines response data", response)
      //     return response;
          
      //   }
      //     catch(error) {
      //       console.error ("There was an error in fetchRoutines apiCall", error)
      //     }
          
      //   }
      
    
      export async function addRoutine(token, parameters = {}){
        const {name, goal, isPublic} = parameters
        console.log ("parameters addRoutine apiCall", parameters)
        
        try{
        const response = await apiCall('routines', {
          token: token,
          method: "POST",
          body: 
            {
            name: name,
            goal: goal,
            isPublic: isPublic
            }
          });
        
        
        return response;
      }
        catch(error) {
          console.error ("There was an error in addRoutine apiCall")
        }
    
        }
    
    
      export async function editRoutineByRoutineId(routineId, parameters = {}){
        const {name, goal, isPublic} = parameters
        console.log ("parameters", parameters)
      try{
      const response = await apiCall(`routines/:${routineId}`, {
        token: token,
        method: "PATCH",
        body: {
          name: name,
          goal: goal,
          isPublic: isPublic
        }
        });
      
      
      return response;
      
      } catch(error) {
        console.error ("There was an error in editRoutineByRoutineId apiCall")
      }
    
      }
    
      export async function deleteRoutineByRoutineId (token, routineId){
        
        console.log ("routineId at deleteRoutine apiCall", routineId)
        try{
          const response = await apiCall(`routines/${routineId}`, {
          token: token,
          method: "DELETE",
          });
        
   
        return response;
        
      }
        catch(error) {
          console.error ("There was an error in deleteRoutineByRoutineId")
        }
      
        }
    
    
        export async function addActivityToRoutine(token, parameters = {}, routineId){
          const {activityId, count, duration} = parameters
          console.log ("parameters addRoutine apiCall", parameters)
          
          try{
          const response = await apiCall(`routines/:${routineId}/activities`, {
            token: token,
            method: "POST",
            body: 
              {
              activityId: activityId,
              count: count,
              duration: duration
              }
            });
          
         
          return response;
        }
          catch(error) {
            console.error ("There was an error in addActivityToRoutine apiCall")
          }
      
          }
    
        export async function editRoutineActivityByRoutineActivityId (routineActivityId, parameters = {}){
          const {count, duration} = parameters
          console.log ("parameters", parameters)
        try{
        const response = await apiCall(`routines_activities/:${routineActivityId}`, {
          token: token,
          method: "PATCH",
          body: {
            count: count,
            duration: duration
          }
          });
        
        
        return response;
        
        } catch(error) {
          console.error ("There was an error in editRoutineActivityByRoutineActivityId apiCall")
        }
      
        }
    
        export async function deleteRoutineActivityByRoutineActivityId (token, routineActivityId){
        
        
          try{
            const response = await apiCall(`routines/:${routineActivityId}`, {
            token: token,
            method: "DELETE",
            });
          
      
          return response;
          
        }
          catch(error) {
            console.error ("There was an error in deleteRoutineActivityByRoutineActivityId")
          }
        
          }
      
    
      
