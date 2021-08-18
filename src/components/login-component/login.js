import { useState } from "react";
import { withRouter } from "react-router-dom";
import { PingApiLogin } from "../ServerRequest";
import LoginForm from "./login-form";

function Login(props){

    const [credentials, setCredentials] = useState("");

    const [error, setError] = useState(false);
    const [networkError, setNetworkError] = useState(false);

    const handleChange = (e) =>{
        const {value,name} = e.target;

        setCredentials({...credentials, [name]:value});
        // console.log(credentials);

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
        PingApiLogin(JSON.stringify(loginInfo))
            .then(response=>{
                if(sessionStorage.getItem("Authorization")){
                    sessionStorage.removeItem("Authorization");
                }
                sessionStorage.setItem("Authorization", response.jwt);
                props.history.push("/account"); 
                props.setLoggedIn(true);
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
