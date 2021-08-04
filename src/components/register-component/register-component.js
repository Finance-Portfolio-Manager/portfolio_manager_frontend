import axios from "axios";
import { useState } from "react";
import { withRouter } from "react-router-dom";

const URL = "http://localhost:8082";

export default function Register(props) {

    const [credentials, setCredentials] = useState("");

    return <p>Register Component!!!!! placeholder</p>
}

function validateInput(firstName, lastName, email, username, password, secondPassword){
    var nameError = document.getElementById("name-error");
    nameError.hidden = true;
    var emailError = document.getElementById("email-error");
    emailError.hidden = true;
    var passwordError = document.getElementById("password-error");
    passwordError.hidden = true;
    var retypePasswordError = document.getElementById("retype-password-error");
    retypePasswordError.hidden = true;

    var letters = /^[A-Za-z]+$/;
    if(!firstName.match(letters) || !lastName.match(letters)){
        nameError.hidden = false;
        return false;
    }
    
    // just looks for string of the form string@string.string proper validation should be done with a validation link sent to the email address
    var emailCheck = /\S+@\S+\.\S+/; 
    if(!emailCheck.test(email)){
        emailError.hidden = false;
        return false;
    }
    
    var passCheck = /[\s~`!@#$%\^&*+=\-\[\]\\';,/{}|\\":<>\?()\._]/g;
    if(!passCheck.test(password) || password.length<8){
        passwordError.hidden = false;
        return false;
    }

    if(password!=secondPassword){
        retypePasswordError.hidden = false;
        return false;
    }
    return true;
}