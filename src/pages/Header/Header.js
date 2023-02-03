import React, {useEffect, useState} from 'react';
import './header.css'

const Header = (props) => {
    const [date, setDate] = useState(new Date)

    useEffect(() => {
        const timerId = setInterval(refreshClock, 1000)
        return function cleanup() 
        {clearInterval(timerId)}
    },[])

    function refreshClock(){
        setDate(new Date())
    }

    return(
        <div className="header">
        <h2>{date.toLocaleTimeString('nl-NL')}</h2>
        <h1>{date.toLocaleDateString('nl-NL')}</h1>
        </div>
    );
}
export default Header