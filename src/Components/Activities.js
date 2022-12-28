import { useEffect,useState } from "react";
import { getActivities } from "../api/Requests";

const Activities = (props) => {
    const [activities, setActivities] = useState([]);
    useEffect(()=> {
        const loadActivities = async() => {
            const newActivities = await getActivities();
            console.log(newActivities);
         setActivities(newActivities);}
        loadActivities();    
            
    }, [])
    return (
        <div id = "activity-listings">{ activities.map((activity)=> {return <ActivityList activity = {activity}></ActivityList>})}</div>
    )
}

const ActivityList = (props) => {
    const activity = props.activity;
    console.log(props.activity);
    return (<div id = "activity-listing">
    <div id = "activity-name"> Activity Name: {activity.name}</div>
    <div id = "activity-description"> Description: {activity.description}</div>
    </div>)
}

const Form = (props) => {

}

export default Activities