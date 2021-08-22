import React from 'react';
import './Status.css';
import AppContext from './AppContext';
import { useContext, useState, useEffect } from 'react';
import Axios from 'axios';
import Portal from './Portal';
function Status() {
    const [imgsrc, setImgsrc] = useState("");
    const [backColor, setBackColor] = useState("");
    const [isOpen, setIsOpen] = useState(false);
    const [cigInfo, setCigInfo] = useState({cigsrc: "", cigtxt: ""});
    const info = useContext(AppContext);
    useEffect(() => {
        if(info.days < 7){
            setImgsrc("sick.png");
            setBackColor("#F9545B");
        }
        else if(info.days >= 7 && info.days < 14){
            setImgsrc("almost-sick.png");
            setBackColor("#F9545B");
        }
        else if(info.days >= 14 && info.days < 21){
            setImgsrc("almost-healthy.png");
            setBackColor("#FDFFB6");
        }
        else if(info.days >= 21 && info.days < 28){
            setImgsrc("pre-healthy.png");
            setBackColor("#98F898");
        }
        else{
            setImgsrc("healthy.png");
            setBackColor("#98F898");
        }
    }, [info.startDay])
    const restart = () =>{
        Axios.put("http://localhost:3001/api/update", {
            username: info.name,
            startDay: new Date().getFullYear() + "-" + (new Date().getMonth() + 1) + "-" + new Date().getDate()
        })
        info.setGstart(new Date().getFullYear() + "-" + (new Date().getMonth() + 1) + "-" + new Date().getDate());
        info.setGdays(0);
    }
    return (
        <div>
            <div className="stat-container" style={{backgroundColor: backColor}}>
                <div className="lung-container">
                    <img className="lung-item lung-img" src={"images/" + imgsrc} alt="lung"></img>
                    <p className="lung-item lung-txt">{info.days} days without smoking!</p>
                    <div className="lung-item btns">
                        <i className="fas fa-cut option-btn" onClick = {() => {
                            setCigInfo({
                                cigsrc: "cut.png",
                                cigtxt: "Awesome! Oh! Poor Cigarette!"
                            });
                            setIsOpen(true);
                            }
                        }></i>
                        <i className="fas fa-trash option-btn" onClick = {() => {
                            setCigInfo({
                                cigsrc: "trash.png",
                                cigtxt: "Perfect! Stay here bad boy!"
                            });
                            setIsOpen(true);
                            }
                        }></i>
                        <i className="fab fa-gripfire option-btn" onClick = {() => {
                            setCigInfo({
                                cigsrc: "fire.png",
                                cigtxt: "Nice! Burn honey! Burn!"
                            });
                            setIsOpen(true);
                            }
                        }></i>
                    </div>
                    <Portal>
                        {isOpen &&
                            <div className='portal-background'>
                                <div className='portal-container'>
                                    <i className='fa fa-times' onClick={() => setIsOpen(false)}></i>
                                    <h1 className="portal-txt">{cigInfo.cigtxt}</h1>
                                    <div className='portal-pics'>
                                        <img src={"images/" + cigInfo.cigsrc} alt='not found' />
                                    </div>
                                </div>
                            </div>
                        }
                    </Portal>
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
