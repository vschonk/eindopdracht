import React from 'react';
import Tasks from './Tasks';

const CompletedTaskComponent = (props) => {

    function flip(){
        let wholeTaskArray = props.tasks
        let singleTask = wholeTaskArray.find(x => x.id === props.id);
        singleTask.statusdone = false
        wholeTaskArray[wholeTaskArray.findIndex(x => x.id === props.id)] = singleTask
        props.setTasks(wholeTaskArray)
        props.setRefreshCall(true)
    }
    
    return(

    <div className='taskcompcontainer'>
        <h2>#{props.id}</h2>
        <p>{props.category}</p>
        <p>{props.name} <img src="images/arrowleft.png" onClick={flip} className="checkmark"></img> </p>

    </div>)
}
export default CompletedTaskComponent