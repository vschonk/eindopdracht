import React, { useEffect, useState } from 'react';

const Quote = (props) =>{
    console.log(props.index)
    console.log(props.quotelist)
    return(
        <div classname="quote">
            <p>"{props.quotelist[props.index].quote}"</p>
            <h2>-{props.quotelist[props.index].author}</h2>
        </div>
    )
}

export default Quote