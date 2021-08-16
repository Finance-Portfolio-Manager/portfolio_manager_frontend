import userEvent from "@testing-library/user-event";
import React from "react";

export default function CreatePortfolio() {

    return (<>

    {
    /* TODO send JWT to get user object from server */

    /* Sends JWT to get user object from server */

        function convertJwtToUser() {
            let user = {};

            /* TODO get the JWT from session storage */
            /* TODO make call to server */
            /* TODO put results in object */
        }

    /* Convert HTML form to JSON */
        function handleSubmit(event) {            
            event.preventDefault();
            const data = new FormData(event.target);

            const values = Object.fromEntries(data.entries());
            document.getElementById('submitForm').submit();
        }

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