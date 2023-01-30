import React from 'react';

const CompletedTaskComponent = (props) => {
    return(

    <div className='taskcompcontainer'>
        <h2>#{props.id}</h2>
        <p>{props.category}</p>
        <p>{props.name}</p>
    </div>)
}
export default CompletedTaskComponent