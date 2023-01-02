import React, { useState,useEffect } from "react";
import { useParams, Link } from 'react-router-dom'
import { fetchRoutines } from "../api/Requests.js"

const Listing = (props) => {
    const routine = props.routine;
    return (<div id = "routine-listing"><div id = "routine-name">{routine.name}</div>
    <div id = "routine-goal"> Goal: {routine.goal}</div>
    <div id = "routine-username"> Creator Username: {routine.creatorName}</div>
    <div id = "activity-listings"> Activity Listing: {routine.activities.map((activity)=> {return <ActivityList activity = {activity}></ActivityList>})}</div></div>)
}

const ActivityList = (props) => {
    const activity = props.activity;
    return (<div id = "activity-listing-in-routines">
    <div id = "activity-name"> Activity Name: {activity.name}</div>
    <div id = "activity-description"> Description: {activity.description}</div>
    <div id = "activity-count"> Count: {activity.count}</div>
    </div>)
}

const Routines = (props) => {
    const [routines, setRoutines] = useState([]);
    useEffect(()=> {
        const getRoutines = async () => {
          try{
          const {routines} = await fetchRoutines();
          setRoutines(routines);
          } catch(error) {
            console.error(error);
          }
        }

        getRoutines();
      }, []);

    //SHOW: ROUTINE NAME, GOAL and CREATOR's USERNAME
    // A LIST OF ACTIVITIES FOR THE ROUTINE, including thier name, description and/or count 
    return (<><div id = "routine-listings">{routines.reverse().map((routine)=> {return <Listing routine = {routine}></Listing>})}</div></>)

}


export default Routines