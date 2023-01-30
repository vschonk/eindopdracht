import React from 'react';

const WebsiteShortComponent = (props) => {
    return(
    <div>
        <div>{props.name}</div>
        <div>{props.visited}</div>
    </div>
    )
}

export default WebsiteShortComponent