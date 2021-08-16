import userEvent from "@testing-library/user-event";
import axios;
import React from "react";

export default function CreatePortfolio() {

    return (<>
    {
        const URL = "apexstocks.xyz";

    /* Sends JWT to get user object from server */
        function convertJwtToUser() {
            let user = {};

            /* TODO get the JWT from session storage */

            axios.get(URL + "/login", JSON.stringify(registrationInfo), {headers:{'Content-Type': 'application/json'}})
                .then(response=>{
                    user = response.data;
                })
                .catch(function (error) {
                    if (!error.response) {
                        console.log("not connected to anything");
                    }
                    else if (error.response.status < 200 || error.response.status > 299) {
                        console.log("Unknown error occurred when resolving JWT to a user object");
                    }
                });

            return;
        };

    /* Convert HTML form to JSON */
        function handleSubmit(event) {            
            event.preventDefault();
            const data = new FormData(event.target);

            const values = Object.fromEntries(data.entries());
            document.getElementById('submitForm').submit();
        };

        document.querySelector('form').addEventListener('submit', handleSubmit);
    }

    <form action="http://portfoliomanager-env.eba-49pyjjuv.us-east-2.elasticbeanstalk.com/portfolios">
        <input name="username" type="hidden" value={user.username}></input>
        <input name="password" type="hidden" value={user.password}></input>
        <input name="userId"   type="hidden" value={user.id}></input>

        <label for="name">Portfolio Name</label>
        <input name="name" type="text" id="name">My Portfolio</input>

        <label for="public">Public</label>
        <input name="public" type="checkbox" id="public" checked></input>

        <input type="button" id="submitButton">Add portfolio</input>
    </form>
    </>);

}