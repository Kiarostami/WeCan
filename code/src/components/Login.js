import React from 'react';
import './Login.css';
import { useEffect, useState, useContext } from 'react';
import { useHistory } from 'react-router-dom';
import AppContext from './AppContext';
function Login() {
    const [users, setUsers] = useState(null);
    const info = useContext(AppContext);
    useEffect(()=>{
        fetch('data.json',
             {
                 headers : {
                     'Content-Type' : 'application/json',
                     'Accept' : 'application/json'
                 }
             }).then(function(response){
                 console.log(response);
                 return response.json();
             }).then(function(data){
                 setUsers(data);
             })
    }, []);
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
            info.setGname(users[0].username);
            info.setGemail(users[0].email);
            info.setGstart(users[0].startDay);
            info.setGgoals(users[0].goals);
            let sDay = Date.parse(users[0].startDay);
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
                    <p className={checkuser ? "log-no-err" : "log-err"}>Username or password is wrong!</p>
                    <input className="log-item username" placeholder="Username" onChange={(e) => setName(e.target.value)}/>
                    <input className="log-item pass" placeholder="Password" type="password" onChange={(e) => setPass(e.target.value)}/>
                    <div className="opt-container">
                        <button className="opt login-btn" onClick={login}>Done</button>
                        <span className="opt reg-txt">Register</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Login;
