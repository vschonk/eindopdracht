import React, { useEffect, useState } from 'react';
import './Home.css'
import TaskComponent from '../Tasks/TaskComponent';
import Quote from '../Quote/Quote';
import WebsiteShortComponent from '../Websites/WebsiteShortComponent';

const Home = () => {

     function randomNumber(max){
         console.log("Random!")
         var random = Math.floor(Math.random() * (max) )
         console.log(random)
        return(random);
     }
    

    useEffect(()=>{
        fetch('./resources/Task.json').then((response)=>response.json())
        .then((taskjson) => setTasks(taskjson) )
        fetch('./resources/Website.json').then((response)=>response.json())
        .then((websitejson) => setWebsites(websitejson) )
        fetch('./resources/Civ5Techs.json').then((response)=>response.json())
        .then((techjson) => setTech(techjson))
        fetch('./resources/Civ5Wonders.json').then((response)=>response.json())
        .then((wonderjson) => setWonder(wonderjson))
    },[])



    const [tasks,setTasks] = useState([])
    console.log(tasks)
    const [websites, setWebsites] = useState([])
    console.log(websites)
    const [techs, setTech] = useState([])
    console.log(techs)
    const [wonders, setWonder] = useState([])
    console.log(wonders)

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
        <div className="gridcontainer">
            <div className="gridelement tasks">
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

            <div className="gridelement sites">
                {websites.map((websites, index) => 
                <WebsiteShortComponent
                    name = {websites.name}
                    key={index}
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