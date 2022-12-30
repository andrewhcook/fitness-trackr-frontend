import React, { useState }from "react";
import {addActivityToRoutine} from '../api/Requests.js'
import { useHistory } from 'react-router-dom'


const AddActivityToRoutine = (props) => {

    const {routine} = props

console.log (routine)

return <h1> Hello World </h1>


}


export default AddActivityToRoutine