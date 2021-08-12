import React from "react";

export default CreatePortfolio(){

    return (<>
    <form action="http://portfoliomanager-env.eba-49pyjjuv.us-east-2.elasticbeanstalk.com/">
    {/*TODO add endpoint*/}
        <label for="portfolio-name">Portfolio Name</label>
        <input id="portfolio-name" type="text" {/*placeholder="My Portfolio"*/}>My Portfolio</input>

        <label for="public-checkbox">Public</label>
        <input id="public-checkbox" type="checkbox" checked></input>

        <input type="button">Add portfolio</input>
    </form>
    </>);

}