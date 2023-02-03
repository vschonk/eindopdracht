import React, { useEffect, useState } from 'react';
import './Home.css'
import TaskComponent from '../Tasks/TaskComponent';
import Quote from '../Quote/Quote';
import WebsiteShortComponent from '../Websites/WebsiteShortComponent';

const Home = (props) => {

     function randomNumber(max){
         console.log("Random!")
         var random = Math.floor(Math.random() * (max) )
         console.log(random)
        return(random);
     }
    

    useEffect(()=>{
        // fetch('./resources/Task.json').then((response)=>response.json())
        // .then((taskjson) => setTasks(taskjson) )
        fetch('./resources/Website.json').then((response)=>response.json())
        .then((websitejson) => setWebsites(websitejson) )
        fetch('./resources/Civ5Techs.json').then((response)=>response.json())
        .then((techjson) => setTech(techjson))
        fetch('./resources/Civ5Wonders.json').then((response)=>response.json())
        .then((wonderjson) => setWonder(wonderjson))
    },[])



    // const [tasks,setTasks] = useState([])
    console.log(props.tasks)
    const [websites, setWebsites] = useState([])
    console.log(websites)
    const [techs, setTech] = useState([])
    console.log(techs)
    const [wonders, setWonder] = useState([])
    console.log(wonders)
    const [refreshCall, setRefreshCall] = useState(false)

    const wonder = wonders.length === 0 ? undefined : wonders[randomNumber(wonders.length)];
    let quoteWonder = undefined;
    if(wonder !== undefined) {
        quoteWonder = <Quote quote={wonder.quote} author={wonder.author} category={wonder.category.name}/>
    }

    const tech = techs.length === 0 ? undefined : techs[randomNumber(techs.length)];
    let quoteTech = undefined;
    if(tech !== undefined) {
        quoteTech = <Quote quote={tech.quote} author={tech.author} category={tech.category.name} />
    }


    return(
        <div className="gridcontainerhome">
            <div className="gridelement tasks">
                {props.tasks.filter(task => !task.statusdone).map((tasks, index) =>
                <TaskComponent
                    name={tasks.name}
                    key={index}
                    id = {tasks.id}
                    category = {tasks.category}
                    deadlinedate = {tasks.deadlinedate}
                    deadlinetime = {tasks.deadlinetime}
                    statusdone = {tasks.statusdone}
                    tasks = {props.tasks}
                    setRefreshCall={setRefreshCall}
                    setTasks = {props.setTasks} />)}
            </div>

            <div className="gridelement sites shortwebsitecontainer">
                {websites.map((websites, index) => 
                <WebsiteShortComponent
                    name = {websites.name}
                    key={index}
                    icon={websites.icon}
                    link={websites.url}
                />                
                )}


            </div>

            <div className="gridelement quotes">
                    {quoteWonder}
                    {quoteTech}
            </div>
        </div>
    );
}
export default Home