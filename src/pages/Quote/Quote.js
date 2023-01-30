import React from 'react';
import './Quote.css'

const Quote = (props) =>{
    // console.log(props.index)
    // console.log(props.quotelist)
    return(
        <div className="quote">
            <p>"{props.quote}"</p>
            <div className="quotebox">
                <h2>
                    -{props.author},
                </h2>
                <h2>
                    {props.category}
                </h2>
            </div>
        </div>
    )
}

export default Quote