const Logout = (props) => {
    const {setToken, setUser} = props;
    return <div><button className="logout-button" onClick={()=> {
        window.localStorage.removeItem("token");
        setToken(null);
    }}>Logout</button></div>
    
}

export default Logout;