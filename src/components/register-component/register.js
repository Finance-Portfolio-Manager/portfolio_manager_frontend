import axios from "axios";
import { useState, useEffect } from "react";
import RegisterForm from "./register-form";
import {Route, Redirect} from 'react-router-dom';
import Login from "../login-component/login";

// const URL = "http://localhost:8082";
const URL = process.env.REACT_APP_API_URL;
// const isLoggedIn = sessionStorage.getItem("Authorization");


export default function Register(props) {

    const [registrationData, setRegistrationData] = useState("");

    // const [nameError, setNameError] = useState(false);
    const [emailError, setEmailError] = useState(false);
    const [usernameError, setUsernameError] = useState(false);
    const [passwordError, setPasswordError] = useState(false);
    const [passwordLengthError, setPasswordLengthError] = useState(false);
    const [confirmPasswordError, setConfirmPasswordError] = useState(false);

    const handleChange = (e) =>{
        const {value,name} = e.target;

        setRegistrationData({...registrationData, [name]:value});
    
        // setNameError(false);
        setEmailError(false);
        setUsernameError(false);
        setPasswordError(false);
        setConfirmPasswordError(false);
        // validateInput(registrationData.firstName, registrationData.lastName, registrationData.username, registrationData.email, registrationData.password, registrationData.confirmPassword);
    }

    const handleSubmit = (e)=>{
        e.preventDefault();
        if (validateInput(registrationData.username, registrationData.email, registrationData.password, registrationData.confirmPassword)) {
            const registrationInfo = {
                email:`${registrationData.email}`,
                username:`${registrationData.username}`,
                password:`${registrationData.password}`,
                confirmPassword:`${registrationData.confirmPassword}`
                };
            axios.post(URL + "/users", JSON.stringify(registrationInfo), {headers:{'Content-Type': 'application/json'}})
                .then(response=>{
                    console.log(response.data);
                    props.history.push("/login");
                    // props.history.push("/");
                    // <Route exact path ="/"> {isLoggedIn ? <Redirect to="/login"/> : <Login /> }</Route>
                    // window.location.href="/login";
                })

                .catch(function (error) {
                    if(!error.response) {
                        console.log("not connected to anything");
                    }
                    else if (error.response.status < 200 || error.response.status > 299) {
                        setUsernameError(true);
                    }
                })

        }
    }

    function validateInput(username, email, password, confirmPassword){
        
        console.log(registrationData.username);
        console.log(registrationData.email);
        console.log(registrationData.password);
        console.log(`URL: ${URL}`);

        // Forbid any empty values
        if((username||email||password||confirmPassword)===(null||undefined)){
            console.log("Some registration fields were left empty.");
            return false;
        }

        
        // just looks for string of the form string@string.string proper validation should be done with a validation link sent to the email address
        var emailCheck = /\S+@\S+\.\S+/;
        if(!emailCheck.test(email)){
            console.log("Invalid email.");
            // emailError.hidden = false;
            setEmailError(true);
            return false;
        }

        var passCheck = /[\s~`!@#$%\^&*+=\-\[\]\\';,/{}|\\":<>\?()\._]/g;
        if(!passCheck.test(password) || password.length<8){
            console.log("invalid password.");
            // passwordError.hidden = false;
            setPasswordError(true);
            return false;
        }

        //Redundant
        // if (password.length<8){
        //     setPasswordLengthError(true);
        //     return false;
        // }

        if(password!==confirmPassword){
            console.log(password);
            console.log(confirmPassword);
            console.log("Password confirmation mismatch.");
            // retypePasswordError.hidden = false;
            setConfirmPasswordError(true);
            return false;
        }
        console.log("User input valid...");
        return true;
    }
    return <RegisterForm emailError={emailError} usernameError={usernameError} passwordError={passwordError} passwordLengthError={passwordLengthError} confirmPasswordError={confirmPasswordError} onChange={handleChange} onSubmit={handleSubmit}></RegisterForm>
}
