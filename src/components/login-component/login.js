import axios from "axios";
import {Route, Redirect} from 'react-router-dom';
import { useState } from "react";
import { withRouter } from "react-router-dom";
import { PingApiLogin } from "../ServerRequest";
import { LandingPage } from "../styled-components/home-page/LandingPage";
import LoginForm from "./login-form";
import { forOfStatement } from "@babel/types";
import { GrWindows } from "react-icons/gr";

function Login(props){

    const [credentials, setCredentials] = useState("");

    const [error, setError] = useState(false);
    const [networkError, setNetworkError] = useState(false);

    const handleChange = (e) =>{
        const {value,name} = e.target;

        setCredentials({...credentials, [name]:value});
        console.log(credentials);

        setError(false);
        setNetworkError(false);
    }

    const handleSubmit = (e)=>{
        e.preventDefault();
        const loginInfo = {
            username:`${credentials.username}`,
            password:`${credentials.password}`
        };
        console.log(JSON.stringify(loginInfo));
        // axios.post("http://apexstocks.xyz/services/login", JSON.stringify(loginInfo), {headers:{'Content-Type': 'application/json'}})
        PingApiLogin(JSON.stringify(loginInfo))
            .then(response=>{
                if(sessionStorage.getItem("Authorization")){
                    sessionStorage.removeItem("Authorization");
                }
                console.log(response.jwt);
                sessionStorage.setItem("Authorization", response.jwt);
                sessionStorage.setItem("loggedIn", true);
                window.location.href = "/home";
            })
            .catch(function (error) {
                if(error && !error.response) {
                    setNetworkError(true);
                }
                else if (error.response.status === 500) {
                    setError(true);
                }
            })
    }
    return <LoginForm networkError={networkError} error={error} onChange={handleChange} onSubmit={handleSubmit}></LoginForm>;
}
export default withRouter(Login);
