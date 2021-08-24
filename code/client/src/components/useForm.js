import { useState, useContext } from "react";
import { useHistory } from 'react-router-dom';
import AppContext from './AppContext';
import Axios from 'axios';

const useForm = (ValidateInfo) => {
    const info = useContext(AppContext);
    const history = useHistory();
    const [values, setValues] = useState({
        username: "",
        email: "",
        password: "",
        cpassword: ""
    });
    const [errors, setErrors] = useState({});
    const handleChange = (e) => {
        setValues({
            ...values,
            [e.target.name]: e.target.value
        });
    }
    const register = (e) => {
        e.preventDefault();
        setErrors(ValidateInfo(values, info.users));
        if(Object.keys(errors).length !== 0){
            Axios.post("http://localhost:3001/api/insert", {
                username : values.username,
                password : values.password,
                email : values.email,
                startDay: new Date().getFullYear() + "-" + (new Date().getMonth() + 1) + "-" + new Date().getDate()
            }).then(() => {
                info.setGname(values.username);
                info.setGemail(values.email);
                let currentDate = new Date().getFullYear() + "-" + (new Date().getMonth() + 1) + "-" + new Date().getDate();
                info.setGstart(currentDate);
                info.setGdays(0);
                history.push("/start")
            });
        }
        
    }
    return {handleChange, values, register, errors};
   
}

export default useForm;