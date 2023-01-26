import React, { useEffect, useState } from 'react';
import './Home.css'
import TaskComponent from '../Tasks/TaskComponent';
import Website from '../Websites/Website'
import Quote from '../Quote/Quote';

const Home = () => {

    //  function randomnumber(max){
    //      console.log("Random!")
    //      var random = Math.floor(Math.random() * (max) )
    //      console.log(random)
    //     return(random);
    //  }
    

    useEffect(()=>{
        fetch('./resources/Task.json').then((response)=>response.json())
        .then((taskjson) => setTasks(taskjson) )
        fetch('./resources/Website.json').then((response)=>response.json())
        .then((websitejson) => setWebsites(websitejson) )
        fetch('./resources/Civ5Techs.json').then((response)=>response.json())
        .then((techjson) => {
            console.log(techjson);
            setTech(techjson);
        })
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
    // const [randomNumber, setRandomNumber] = useState(1)


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
                <Website 
                    name = {websites.name}
                    description = {websites.description}
                    visited={websites.visited}
                    key={index}
                />                
                )}


            </div>

            <div className="gridelement quotes">

                        <Quote 
                        quotelist = {wonders}
                        index = {5}
                        />
                        <Quote 
                        quotelist = {techs}
                        index = {5}
                        />
            </div>
        </div>
    );
}
export default Home