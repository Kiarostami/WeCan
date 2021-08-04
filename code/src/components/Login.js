import React from 'react';
import './Login.css';
import { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
function Login() {
    const [users, setUsers] = useState(null);
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
        console.log(users);
        console.log(match);
        if(match.length === 0){
            console.log("no");
            setCheckuser(false);
        }
        else{
            console.log("yes");
            setCheckuser(true);
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
