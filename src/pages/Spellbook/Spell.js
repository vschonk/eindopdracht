import React, {useState} from 'react'
import './Spell.css'

const Spell =(props) => {
    return(
        <div className="spellcontainer">
        <div className="spell scroller">
            <h3>{props.index+1}</h3>
            <h4></h4>{props.name}
            <p>{props.description}</p>
        </div>
    </div>
    )
}







export default Spell