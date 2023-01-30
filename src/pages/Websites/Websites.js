import React, { useEffect, useState } from 'react';
import Website from './Website';
import Quote from '../Quote/Quote';

const Websites = () => {

    function randomNumber(max){
        console.log("Random!")
        var random = Math.floor(Math.random() * (max) )
        console.log(random)
       return(random);
    }

    useEffect(()=>{
        fetch('./resources/Website.json').then((response) => response.json())
        .then((websitejson) => setWebsite(websitejson))
        .then((techjson) => setTech(techjson))
        fetch('./resources/Civ5Wonders.json').then((response)=>response.json())
        .then((wonderjson) => setWonder(wonderjson))
        fetch('./resources/Civ5Techs.json').then((response)=>response.json())
        .then((techjson) => setTech(techjson))
    },[])

    const [website, setWebsite] = useState([])
    const [techs, setTech] = useState([])
    const [wonders, setWonder] = useState([])

    console.log(techs)

    // const wonder = wonders.length === 0 ? undefined : wonders[randomNumber(wonders.length)];
    // let quoteWonder = undefined;
    // if(wonder !== undefined) {
    //     quoteWonder = <Quote quote={wonder.quote} author={wonder.author} category={wonder.category.name}/>
    // }

    // const tech = techs.length === 0 ? undefined : techs[randomNumber(techs.length)];
    // let quoteTech = undefined;
    // if(tech !== undefined) {
    //     quoteTech = <Quote quote={tech.quote} author={tech.author} category={tech.category.name} />
    // }

    return(
    <div>
        <div className="websitelist">
        {website.map((website, index) =>
            <Website
            key = {index} 
            name = {website.name}
            index = {website.index}
            description = {website.description}
            visited = {website.timesvisited}
            url = {website.url}
            icon = {website.icon}
            />)}
        </div>
        <div className="clickedwebsites">
            <h2>Most clicked websites!</h2>
            {website.map((website,index)=>
            <Website 
            key= {index}
            icon = {website.icon}
            visited = {website.timesvisited}
            />
            )}
        </div>
        <div className="quote">
                {/* {quoteTech}
                {quoteWonder} */}
        </div>
    </div>
    )}
export default Websites