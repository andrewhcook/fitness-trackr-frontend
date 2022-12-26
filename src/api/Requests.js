
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
      console.error(error);
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
  