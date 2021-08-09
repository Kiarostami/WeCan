import React from 'react';
import './Status.css';
import AppContext from './AppContext';
import { useContext, useState, useEffect } from 'react';
function Status() {
    const [imgsrc, setImgsrc] = useState(null);
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
    }, [])
    const info = useContext(AppContext);
    return (
        <div>
            <div className="stat-container">
                <div className="lung-container">
                    <img className="lung-img" src={"images/" + imgsrc} alt="not found"></img>
                </div>
                <div className="perform-container">
                    Hiiiiiiiiii
                </div>

            </div>
        </div>
    )
}

export default Status;
