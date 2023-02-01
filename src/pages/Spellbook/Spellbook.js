import React, {useEffect, useState } from 'react';
import Spell from './Spell';

const Spellbook = () => {

    useEffect(() => {
        fetch('https://www.dnd5eapi.co/api/spells').then((response) => response.json())
            .then((spellsjson) => fillArray(spellsjson.results))
    }, [])

    const fillArray = (spells) => {
        setSpell(spells)
        buildSpellArray(spells);
    }

    async function buildSpellArray(spells) {
       let returnArray = []
       for(let i = 0; i < 20 ; i++ ){
        const temp = spells[randomNumber(spells.length)]
        let description = []
        await fetch(`https://www.dnd5eapi.co${temp.url}`).then(response => response.json())
        .then(responseJson=> description = responseJson.desc)
        const newSpellWithDesc = {
            ...temp,
            description
        }
        returnArray.push(newSpellWithDesc);
       }
       console.log(returnArray)
       setSpellArray(returnArray)
    }

    function randomNumber(max){
        return Math.floor(Math.random()*max)
    }



    const [spells, setSpell] = useState([])
    const [spellArray, setSpellArray] = useState([])
    console.log(spells)





    return(
        <div className="grid">
             {spellArray.length > 0 && spellArray.map((spell, index) => 
            <Spell
            key={index}
            index={index}
            name={spell.name}
            description={spell.description}
            />)} 
        </div>
    );
    }
export default Spellbook