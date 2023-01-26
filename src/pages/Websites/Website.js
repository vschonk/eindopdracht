import React from 'react';

const Website = (props) => {
    return(
    <div>
        <div>{props.name}</div>
        <div>{props.description}</div>
        <div>{props.visited}</div>
    </div>
    )
}

export default Website