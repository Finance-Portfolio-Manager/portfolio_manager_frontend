import axios from "axios";
import { useState } from "react";
import { withRouter } from "react-router-dom";
import LoginForm from "./login-form";



function Login(props){

    const [credentials, setCredentials] = useState("");

    const handleChange = (e) =>{
        const {value,name} = e.target;
        
        setCredentials({...credentials, [name]:value});
        console.log(credentials);
    }

    const handleSubmit = (e)=>{
        e.preventDefault();

        const loginInfo = {
                username:`${credentials.username}`,
                password:`${credentials.password}`
            };
        console.log(JSON.stringify(loginInfo));

        fetch("http://localhost:8082/login", {
        method: 'post',
        headers: new Headers({
            'Content-Type':'application/json'
        }),
        body: JSON.stringify(loginInfo)
    }).then((response) => {
        return response.json();
    }).then((data) => {
                console.log("here");
                console.log(data.jwt)
                sessionStorage.setItem("Authorization", data.jwt)
                if(data.jwt==undefined){

                } else if (data.jwt != null && data.jwt != undefined){
                    console.log("test0");
                 }  
            })
    .catch((error) => {

    })
}


        // axios.post("localhost:8082/login", JSON.stringify(requestBody), {headers:{"Content-Type": "application/json"}})
        //     .then(response=>{
        //         console.log("successful login!!!");
        //         // sessionStorage.setItem("token", response.headers["authorization"]);
        //         // props.history.push("/");
        //     })
        //     .catch(err=> console.error("there was an issue logging in"))
    // }



    return <LoginForm onChange={handleChange} onSubmit={handleSubmit}></LoginForm>;
}

export default withRouter(Login);


// document.getElementById("login-form").addEventListener("submit", function(login){
//     login.preventDefault();
//     const userError = document.getElementById("error-credentials");
//     const networkError = document.getElementById("error-network");
//     userError.hidden = true;
//     networkError.hidden = true;

//     const credentials = {
//     username:document.getElementById("inputUsername").value,
//     password:document.getElementById("inputPassword").value
// };
  
//     fetch("http://portfoliomanager-env.eba-49pyjjuv.us-east-2.elasticbeanstalk.com/login", {
//         method: 'post',
//         headers: new Headers({
//             'Content-Type':'application/json'
//         }),
//         body: JSON.stringify(credentials)
//     }).then((response) => {
//         return response.json();
//     }).then((data) => {
//         sessionStorage.setItem("Authorization", data.jwt)
//         if(data.jwt==undefined){
//             userError.hidden = false;
//         } else if (data.jwt != null && data.jwt != undefined){
//             document.getElementById("toggle-nav-1").hidden = true;
//             document.getElementById("toggle-nav-2").hidden = true;
//             window.location.href = "#/portfolio";
//             location.reload();
//          }  
//     }).catch((error) => {
//             networkError.hidden = false;
//     })
// });
