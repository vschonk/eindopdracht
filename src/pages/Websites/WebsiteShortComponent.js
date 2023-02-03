import React from 'react';

const WebsiteShortComponent = (props) => {
    return(
        <div className="shortwebsite">
            <img src={props.icon} className="favicon"></img>
            <a href={props.link}>{props.name}</a>
            <div>{props.visited}</div>
        </div>
    )
}

export default WebsiteShortComponent