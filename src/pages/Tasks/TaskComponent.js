import React from 'react';
import './Task.css'

const TaskComponent = (props) => {
    function flip(){
        let wholeTaskArray = props.tasks
        let singleTask = wholeTaskArray.find(x => x.id === props.id)
        singleTask.statusdone = true
        wholeTaskArray[wholeTaskArray.findIndex(x => x.id === props.id)] = singleTask
        props.setTasks(wholeTaskArray)
        props.setRefreshCall(true)
        console.log(props.tasks)
    }

    return(
    <div className='taskcompcontainer'>
        <h2>#{props.id}</h2>
        <p>{props.category}</p>
        <p>{props.name}</p>
        <div className="flex">
            <p>{props.statusdone}</p>
            <p>{props.deadlinedate}  {props.deadlinetime} <img src="images/checkmark.png" onClick={flip} className="checkmark"></img></p>
        </div>
    </div>)
}

export default TaskComponent