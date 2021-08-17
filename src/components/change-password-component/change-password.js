import axios from "axios";
import { useState } from "react";
import { withRouter } from "react-router-dom";
import ChangePasswordForm from "./change-password-form";

function ChangePassword(props){

    let URL = process.env.REACT_APP_API_URL;

    //let URL = "http://localhost:8080";

    const [email, setEmail] = useState("");
    const [credentials, setCredentials] = useState("");
    const [codeMessage, setCodeMessage] = useState("");
    const [confirmMessage, setConfirmMessage] = useState("");
       

    const handleEmailChange = (e) =>{
        setEmail(e.target.value);
        //setNetworkError(false);
    }

    const handleOtherChange = (e) =>{
        const {name,value} = e.target;    
        setCredentials({...credentials, [name]:value});
        //setNetworkError(false);
    }

    const handleGetCode = (e)=>{
        setCodeMessage("Try to Send the code........");
        e.preventDefault();
        let getCodeURL = URL + "/password" + "?email=" + email;
        console.log(getCodeURL);
        axios.get(getCodeURL)
            .then(response=>{
                console.log(".then");
                //console.log(response.data);
                setCodeMessage("Code sent. Please check your email")      
            })
            .catch(err=>{
                console.log(".catch"); //code:500 and 400
                console.error(err)
                setCodeMessage("Error: invalid email")
                
            })
    }

    const handleSubmit = (e)=>{
        e.preventDefault();
        if (validateInput(email, credentials.code, credentials.password, credentials.confirmPassword)) {
            let accountObject = {
                email:`${email}`,
                code:`${credentials.code}`,
                password:`${credentials.password}`
            };
            let submitURL = URL + "/password";
            let accountJson = JSON.stringify(accountObject)
            console.log(accountJson);
            axios.post(submitURL, accountJson, {headers:{'Content-Type': 'application/json'}})
                .then(response=>{console.log(response);
                    console.log("password changed");
                    setConfirmMessage("password changed");
                    alert("password changed, you can log in with your new passowrd")
                    props.history.push("/login"); 
                })
                .catch(err=> {
                    setConfirmMessage("Error: invalid code")
                    console.error("there was an issue logging in :(")
                })
        }
    }
    
    function validateInput(email, code, password, confirmPassword){
        
        console.log("checking input");
        // console.log("email: " + email);
        // console.log("code: " + code);
        // console.log("password: " + password);
        // console.log("confirmPassword: " + confirmPassword);
        
        // Forbid any empty values
        if((email ===undefined || code ===undefined ||password ===undefined ||confirmPassword ===undefined)){
            console.log("Some fields were left empty.");
            setConfirmMessage("Some fields were left empty.")
            return false;
        }

        if(password.length < 8){
            console.log("password length should have at least 8 characters");
            setConfirmMessage("password length should have at least 8 characters");
            return false;
        }
    
        if(password!==confirmPassword){
            console.log("Password confirmation mismatch.");
            setConfirmMessage("Password confirmation mismatch.");
            return false;
        }


        
        console.log("User input is valid");
        return true;
    }
    return (<ChangePasswordForm handleEmailChangeEventListener = {handleEmailChange}
     handleGetCodeEventListener={handleGetCode} handleOtherChangeEventListener={handleOtherChange} 
     handleSubmitEventListener={handleSubmit} codeMessageState={codeMessage}  confirmMessageState={confirmMessage}
     ></ChangePasswordForm>);
}
export default withRouter(ChangePassword);
// export default ChangePassword;