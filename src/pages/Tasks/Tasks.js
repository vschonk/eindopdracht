import React, { useEffect, useState } from 'react';
import './Task.css'
import TaskComponent from './TaskComponent';
import CompletedTaskComponent from './CompletedTaskComponent';


const Tasks = (props) => {

    // const [tasks, setTasks] = useState([])
    const [completedTasks, setCompletedTask] = useState([])
    const [incompleteTasks, setIncompleteTask] = useState([])
    const [isInitialCall, setInitialCall] = useState(true)
    const [refreshCall, setRefreshCall] = useState(false)

    useEffect(()=>{
        if (props.tasks.length === 0) {
            return
        }
        setRefreshCall(true)
    }, [props.tasks])

//     if (props.tasks === undefined){
//     if (isInitialCall){
//         setInitialCall(false)
//         fetch('./resources/Task.json').then((response)=>response.json())
//         .then((taskjson) => props.setTasks(taskjson))

//     }
// }

    if (refreshCall) {
        setRefreshCall(false)
        setCompletedTask(props.tasks.filter(task => task.statusdone === true));
        setIncompleteTask(props.tasks.filter(task => task.statusdone === false));
    }

    return(
        <div className="gridcontainertasks" >
            <div className ="gridelement tasks">
            {props.tasks.filter(task => !task.statusdone).map((task, index) =>
                <TaskComponent
                    name={task.name}
                    key={index}
                    index = {index}
                    id = {task.id}
                    category = {task.category}
                    deadlinedate = {task.deadlinedate}
                    deadlinetime = {task.deadlinetime}
                    statusdone = {task.statusdone}
                    tasks = {props.tasks}
                    setTasks = {props.setTasks}
                    setRefreshCall = {setRefreshCall}
                    
                    
                    />)}
            </div>
            <div className ="gridelement progress">
                <div>{completedTasks.length} / {props.tasks.length}</div>
                <div>{incompleteTasks.length}</div>
                
            </div>
            <div className ="gridelement completedlist">
                <h1>Completed Tasks!</h1>
                {completedTasks.map((task, index) =>
                <CompletedTaskComponent 
                name={task.name}
                id={task.id}
                key={index}
                category={task.category}
                index={index}
                tasks = {props.tasks}
                setTasks = {props.setTasks}
                setRefreshCall = {setRefreshCall}

                />
                    
                )}
            </div>
        </div>
    );
}
export default Tasks