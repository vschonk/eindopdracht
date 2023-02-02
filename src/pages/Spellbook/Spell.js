import React, {useState} from 'react'
import './Spell.css'

const Spell =(props) => {
    return(
        <div className="spellcontainer">
        <div className="spell scroller">
            <div className="flexspell">
                <h3 className="circleheader">#{props.index+1}</h3>
                <h4 className="spellheader">{props.name}</h4>
            </div>
            <p className="spelldescription">{props.description}</p>
        </div>
    </div>
    )
}







export default Spell