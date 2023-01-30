import React from 'react';

const Website = (props) => {
    return(
    <div>
        <a href={props.url}>{props.name}</a>
        <img src={props.icon} alt="Hoi"></img>
        <p>{props.description}</p>
        <div>{props.visited}</div>

    </div>
    )
}

export default Website