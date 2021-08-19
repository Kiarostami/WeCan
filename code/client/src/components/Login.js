import React from 'react';
import './Login.css';
import { useState, useContext } from 'react';
import { Link, useHistory } from 'react-router-dom';
import AppContext from './AppContext';

function Login() {
    const info = useContext(AppContext);
    var users = info.users;
    const [name, setName] = useState(null);
    const [pass, setPass] = useState(null);
    const [checkuser, setCheckuser] = useState(true);
    const history = useHistory();
    const login = () => {
        let match = users.filter((user) => 
            (user.username === name && user.password === pass))
        if(match.length === 0){
            setCheckuser(false);
        }
        else{
            setCheckuser(true);
            info.setGname(match[0].username);
            info.setGemail(match[0].email);
            info.setGstart(match[0].startDay);
            let sDay = Date.parse(match[0].startDay);
            let today = new Date();
            let y = today.getFullYear();
            let m = today.getMonth() + 1;
            let d = today.getDate();
            let currentDate = y + "-" + m + "-" + d;
            let cDay = Date.parse(currentDate);
            info.setGdays(Math.ceil((cDay - sDay) / (1000 * 60 * 60 * 24)));
            history.push("/start")
        }
    }
    return (
        <div>
            <div className="log-container">
                <div className="log-inp-container">
                    <h2 className="log-head">Login</h2>
                    <p className={checkuser ? "not-err" : "err"}>Username or password is wrong!</p>
                    <input className="log-item username" placeholder="Username" onChange={(e) => setName(e.target.value)}/>
                    <input className="log-item pass" placeholder="Password" type="password" onChange={(e) => setPass(e.target.value)}/>
                    <div className="opt-container">
                        <button className="opt login-btn" onClick={login}>Done</button>
                        <span className="opt reg-txt"><Link to="/register">Register</Link></span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Login;
