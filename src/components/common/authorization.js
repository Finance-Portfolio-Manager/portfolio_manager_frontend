import { Redirect } from "react-router";

export default function Authorization(props){

    //THIS STATE IS LOST UPON REFRESH, FORCING USER TO RE-LOGIN :(  
//   const [loggedIn, setLoggedIn] = useState();
//   useEffect(()=>{
//     if(sessionStorage.getItem("Authorization")){ 
//       console.log("has token");
//       axios.post("http://localhost:8082/verify", JSON.stringify(sessionStorage.getItem("Authorization")), {headers:{'Content-Type': 'application/json'}})
//       .then(response=>{          
//         setLoggedIn(true);
//       })
//       .catch(function (error) {
//         setLoggedIn(false);
//     })
//     }     
//     console.log(loggedIn);
// },[]);


    let loggedIn = false;
    if(sessionStorage.getItem("Authorization")){
        loggedIn = true;
    }

    return loggedIn ? props.children.Authorization : <Redirect to="/login"></Redirect>;
}