import React from 'react';
import './Status.css';
import AppContext from './AppContext';
import { useContext, useState, useEffect } from 'react';
function Status() {
    const [imgsrc, setImgsrc] = useState(null);
    const info = useContext(AppContext);
    useEffect(() => {
        if(info.days < 7)
            setImgsrc("sick.png");
        else if(info.days >= 7 && info.days < 14)
            setImgsrc("almost-sick.png");
        else if(info.days >= 14 && info.days < 21)
            setImgsrc("almost-healthy.png");
        else if(info.days >= 21 && info.days < 28)
            setImgsrc("pre-healthy.png");
        else
            setImgsrc("healthy.png");
    }, [info.startDay])
    const restart = () =>{
        info.setGstart(new Date);
        info.setGdays(0);
    }
    return (
        <div>
            <div className="stat-container">
                <div className="lung-container">
                    <img className="lung-item lung-img" src={"images/" + imgsrc} alt="lung"></img>
                    <p className="lung-item lung-txt">{info.days} days without smoking!</p>
                </div>
                <div className="perform-container">
                    <p className="perform-item">
                       <b>Health Performance:</b><br />
                       Oxygen Level: 100%<br />
                       Carbon monoxide Level: 79%<br/>
                       Nicotine Expelled from Body: 47%<br /> 
                    </p>
                    <button className="smoke-btn" onClick={restart}>I Smoked :(</button>
                </div>

            </div>
        </div>
    )
}

export default Status;
