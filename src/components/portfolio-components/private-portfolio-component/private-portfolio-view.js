import React from "react";
import { useState } from "react";
import PrivatePortfolioCard from "./private-portfolio-card";
import NewTransaction from "../../new-transaction-component/new_transaction";

export default function PrivatePortfolioView(props){

    function setDisplayPortfolio(){
        props.assignDisplayPortfolio(props.portfolio);
        window.scrollTo(0,0);
    }

    function addTransaction(){
        return(
            <div class="container">
                <NewTransaction portfolio={props.portoflio}/>
            </div>
        )
    }

    //Dynamically renders either a portfolio card or a portfolio table component based on whether or not
    //the user clicked the button
    return (
        <>
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                <Modal.Title>Modal heading</Modal.Title>
                </Modal.Header>
                <Modal.Body>Woohoo, you're reading this text in a modal!</Modal.Body>
                <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>
                    Close
                </Button>
                <Button variant="primary" onClick={handleClose}>
                    Save Changes
                </Button>
                </Modal.Footer>
            </Modal>

            <PrivatePortfolioCard 
            user={props.user} 
            portfolio={props.portfolio} 
            setDisplayPortfolio={setDisplayPortfolio}
            addTransaction={addTransaction}
            />
        </>
    )
}
