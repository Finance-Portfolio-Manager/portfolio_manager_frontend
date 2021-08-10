import { Redirect } from "react-router";

export default function Authorization(props){

    let loggedIn = false;
    if(sessionStorage.getItem("Authorization")){
        loggedIn = true;
    }

    return loggedIn ? props.children : <Redirect to="/login"></Redirect>;
}