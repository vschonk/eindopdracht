import React, { useEffect, useState } from 'react';
import './Task.css'

const TaskComponent = (props) => {

    function booleanCheck(check){
        // if (check){
        //     return("Done")
        // }
        // else{
        //     return("Not Done")
        // }
        return check ? "done" : "not done";
    }

    return(
    <div className='taskcompcontainer'>
        <h2>#{props.id}</h2>
        <p>{props.category}</p>
        <p>{props.name}</p>
        <div className="flex">
            <p>{booleanCheck(props.statusdone)}</p>
            <p>{props.deadlinedate}  {props.deadlinetime}</p>
        </div>


    </div>)
}

export default TaskComponent