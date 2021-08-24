import validator from 'validator';

function ValidateInfo(values, users){
    let errors = {};
    if(!values.username.trim()) {
        errors.username = "Username required";
    } else if((users.filter((user) => (user.username === values.username.trim()))).length !== 0 ){
        errors.username = "Username already exists"
    }

    if(!values.email) {
        errors.email = "Email required";
    } else if((users.filter((user) => (user.email === values.email))).length !== 0 ){
        errors.email = "Username with this email already exists"
    } else if(!validator.isEmail(values.email)){
        errors.email = "Email is not valid"
    }

    if(!values.password){
        errors.password = "Password required";
    } else if(!validator.isStrongPassword(values.password)){
        errors.password = "Enter a strong password"
    }

    if(!values.cpassword){
        errors.cpassword = "Confirm password required"
    } else if(values.password !== values.cpassword){
        errors.cpassword = "Password mismatch"
    }
    return errors;
}

export default ValidateInfo;