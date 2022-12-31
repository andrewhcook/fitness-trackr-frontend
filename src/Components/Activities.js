import { useEffect,useState } from "react";
import { getActivities, addActivity } from "../api/Requests";


const Activities = (props) => {
    console.log(props);
    const token = props.token;
    console.log(token);
    const [activities, setActivities] = useState([]);
    useEffect(()=> {
        const loadActivities = async() => {
            const newActivities = await getActivities();
            console.log(newActivities);
         setActivities(newActivities);}
        loadActivities();    
            
    }, [])
    return (
       <> <div id = "activity-listings">{ activities.map((activity)=> {return <ActivityList activity = {activity}></ActivityList>})}</div>
       {token ? <div><Form token = {token}></Form> </div>: null}
       </>
    )
}

const ActivityList = (props) => {
    const activity = props.activity;
    console.log(props.activity);
    return (<div id = "activity-listing">
    <div id = "activity-name"> Activity Name: {activity.name}</div>
    <div id = "activity-description"> Description: {activity.description}</div>
    <div id = "activity-id"> Activity ID: {activity.id}</div>
    </div>)
}

const Form = (props) => {

    const token = props.token;
    const [name, setName]= useState("");
    const [description, setDescription] = useState("");
    const [newActivity, setNewActivity] = useState({});
    useEffect(()=> {
        setNewActivity({name: name, description: description})
   
    }, [name, description])
    const onSubmitHandler = async (event) => {
        event.preventDefault();
        addActivity(token, newActivity);
    }
    return (<form id="create-activity-form" onSubmit={ async (event) => {
       
        onSubmitHandler(event);
        }}>
        <h1>Create Activity Form</h1>

        <div className="field">
            <label>Activity Title</label>
            <input
            type = "text"
            label = "Title"
            placeholder="Title"
            value = {name}
            required
            onChange = { (event) => {
                setName(event.target.value);}}
            />
            
        </div>
        
        <div className="field">
            <label>Description</label>
            <input
            type = "text"
            label = "Location"
            value = {description}
            placeholder="Description..."
            required
            onChange = {(event) => {setDescription(event.target.value)}}
            />
            
        </div>
        <button className="submit-form" type = "submit" value = "Submit">Submit</button>
    </form>);

}


export default Activities