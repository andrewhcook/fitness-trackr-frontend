import React from "react";
import {useParams} from 'react-router'

console.log ("hello")
const DeleteRoutine = (props) => {
    console.log("hello inside function")
    const {routineId} = useParams();
    console.log ("routineId",routineId)

    return (
        <>
        <h1>HELLO EveryBODY</h1>
        <h2>{routineId}</h2>
        </>
    )

}


export default DeleteRoutine