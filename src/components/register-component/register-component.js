import axios from "axios";
import { useState } from "react";
import { withRouter } from "react-router-dom";
import RegisterForm from "./register-form";

const URL = "http://localhost:8082";

export default function Register(props) {

    const [registrationData, setRegistrationData] = useState("");

    const handleChange = (e) =>{
        const {value,name} = e.target;
        
        setRegistrationData({...registrationData, [name]:value});
        console.log(registrationData);
    }

    const handleSubmit = (e)=>{
        e.preventDefault();
        if (validateInput(registrationData.firstName, registrationData.lastName, registrationData.email, registrationData.password, registrationData.confirmPassword)) {
            const registrationInfo = {
                firstName:`${registrationData.firstName}`,
                lastName:`${registrationData.lastName}`,
                email:`${registrationData.email}`,
                username:`${registrationData.username}`,
                password:`${registrationData.password}`,
                confirmPassword:`${registrationData.password}`
                };
            console.log(JSON.stringify(registrationInfo));
            axios.post(URL + "/register", JSON.stringify(registrationInfo), {headers:{'Content-Type': 'application/json'}})
                .then(response=>{
                    console.log(response.data);
                    // props.history.push("/");
                })
                .catch(err=> console.error("There was an issue registering your account!"))
        }
    }

    function validateInput(firstName, lastName, email, password, confirmPassword){
        // var nameError = document.getElementById("name-error");
        // nameError.hidden = true;
        // var emailError = document.getElementById("email-error");
        // emailError.hidden = true;
        // var passwordError = document.getElementById("password-error");
        // passwordError.hidden = true;
        // var retypePasswordError = document.getElementById("retype-password-error");
        // retypePasswordError.hidden = true;

        // Forbid any empty values
        if((firstName||lastName||email||password||confirmPassword)==(null||undefined)){
            console.log("Some registration fields were left empty.");
            return false;
        }
    
        var letters = /^[A-Za-z]+$/;
        if(!firstName.match(letters) || !lastName.match(letters)){
            // nameError.hidden = false;
            return false;
        }
        
        // just looks for string of the form string@string.string proper validation should be done with a validation link sent to the email address
        var emailCheck = /\S+@\S+\.\S+/; 
        if(!emailCheck.test(email)){
            // emailError.hidden = false;
            return false;
        }
        
        var passCheck = /[\s~`!@#$%^&*+=\-[\]\\';,/{}|\\":<>?()._]/g;
        if(!passCheck.test(password) || password.length<8){
            // passwordError.hidden = false;
            return false;
        }
    
        if(password!==confirmPassword){
            // retypePasswordError.hidden = false;
            return false;
        }
        return true;
    }
    return <RegisterForm onChange={handleChange} onSubmit={handleSubmit}></RegisterForm>
}

