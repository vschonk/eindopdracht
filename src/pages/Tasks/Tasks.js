import React, { useEffect, useState } from 'react';
import './Task.css'
import TaskComponent from './TaskComponent';
import CompletedTaskComponent from './CompletedTaskComponent';


const Tasks = () => {

    useEffect(()=>{
        fetch('./resources/Task.json').then((response)=>response.json())
        .then((taskjson) => setTask(taskjson))
        fetch('./resources/TaskCompleted.json').then((response)=>response.json())
        .then((taskjson) => setCompletedTask(taskjson))
    },[])
    
    const [tasks,setTask] = useState([])
    const [completedTasks, setCompletedTask] = useState([])


    return(
        <div className="gridcontainer" >
            <div className ="gridelement tasks">
            {tasks.map((tasks, index) =>
                <TaskComponent
                    name={tasks.name}
                    key={index}
                    id = {tasks.id}
                    category = {tasks.category}
                    deadlinedate = {tasks.deadlinedate}
                    deadlinetime = {tasks.deadlinetime}
                    statusdone = {tasks.statusdone} />)}
            </div>
            <div className ="gridelement progress">
                Track de progress!
            </div>
            <div className ="gridelement completedlist">
                <h1>Completed Tasks!</h1>
                {completedTasks.map((tasks, index) =>
                <CompletedTaskComponent 
                name={tasks.name}
                key={index}
                category={tasks.category}
                />
                    
                )}
            </div>
        </div>
    );
}
export default Tasks