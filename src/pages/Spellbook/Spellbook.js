import React, {useEffect, useState } from 'react';
import Spell from './Spell';

const Spellbook = () => {

    useEffect(()=>{
        fetch('https://www.dnd5eapi.co/api/spells').then((response) => response.json())
        .then((spellsjson) => setSpell(spellsjson.results))
        },[])

    const [spells, setSpell] = useState([])
    const [spellArray, setSpellArray] = useState([])
    console.log(spells)


    if (spells !== undefined){
        console.log(spells[1])
        spellArray.push(spells[2])
        spellArray.push(spells[5])
        

    }


    return(
        <div>
            {spellArray.map((spell, index) => 
            <Spell
            key={index}
            name={spell.name}
            />)}
        </div>
    );
    }
export default Spellbook