import { useHistory } from "react-router-dom";

const Logout = (props) => {
    let history = useHistory();
    const {setToken, setUser} = props;
    return <div><button className="logout-button" onClick={()=> {
        window.localStorage.removeItem("token");
        setToken(null);
        history.push("./LoginRegister")
    }}>Logout</button></div>
    
}

export default Logout;