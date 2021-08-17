import React from 'react';
import './Login.css';
import { Link } from 'react-router-dom';
import useForm from './useForm';
import ValidateInfo from './ValidateInfo';
function Register() {
    const {handleChange, values, register, errors} = useForm(ValidateInfo);
    
    return (
        <div>
            <form onSubmit = {register} className="log-container">
                <div className="log-inp-container">
                    <h2 className="log-head">Register</h2>
                    {errors.username && <p className="err">{errors.username}</p>}
                    <input 
                        name="username" 
                        className="log-item username" 
                        placeholder="Username" 
                        value = {values.username}
                        onChange = {handleChange}
                    />
                    {errors.email && <p className="err">{errors.email}</p>}
                    <input 
                        name="email" 
                        className="log-item email" 
                        placeholder="Email" 
                        type="email" 
                        value = {values.email}
                        onChange = {handleChange}
                    />
                    {errors.password && <p className="err">{errors.password}</p>}
                    <input 
                        name="password" 
                        className="log-item pass"  
                        placeholder="Password" 
                        type="password" 
                        value = {values.password}
                        onChange = {handleChange}
                    />
                    {errors.cpassword && <p className="err">{errors.cpassword}</p>}
                    <input 
                        name="cpassword" 
                        className="log-item cpass" 
                        placeholder="Confirm Password" 
                        type="password" 
                        value = {values.cpassword}
                        onChange = {handleChange}
                    />
                    <div className="opt-container">
                        <button type="submit" className="opt login-btn">Done</button>
                        <span className="opt reg-txt"><Link to="/login">Login</Link></span>
                    </div>
                </div>
            </form>
        </div>
    )
}

export default Register
