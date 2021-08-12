import axios from "axios";
import { useState } from "react";
import { withRouter } from "react-router-dom";
import LoginForm from "./login-form";

function Login(props){

    const [credentials, setCredentials] = useState("");

    const [error, setError] = useState(false);
    const [networkError, setNetworkError] = useState(false);

    const handleChange = (e) =>{
        const {value,name} = e.target;

        setCredentials({...credentials, [name]:value});

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
        axios.post(process.env.REACT_APP_API_URL+"/login", JSON.stringify(loginInfo), {headers:{'Content-Type': 'application/json'}})
            .then(response=>{
                if(sessionStorage.getItem("Authorization")){
                    sessionStorage.removeItem("Authorization");
                }
                console.log(response.data.jwt);
                sessionStorage.setItem("Authorization", response.data.jwt);
<<<<<<< HEAD
                props.history.push("/chart");
=======
                props.setLoggedIn(true);
                // props.history.push("/"); to portfolio?
>>>>>>> c222d048b4159f6142373ab97ba96cf52e61d8be
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
